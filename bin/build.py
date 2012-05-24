#!/usr/bin/env python
import os
import shutil
import subprocess

import git
import cssmin


_here = os.path.dirname(__file__)
CLOSURE_JAR_LOCATION = os.path.join(_here, 'compiler-latest', 'compiler.jar')

TEST_PAGE = """
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<link rel="stylesheet" href="css/tabzilla.min.css">
<title>Test page</title>
<style>body {background-color: #ccc}</style>
</head>
<body>
<a href="http://www.mozilla.org/" id="tabzilla">mozilla</a>
<h1>Test page for Tabzilla</h1>
<script src="js/tabzilla.min.js"></script>
</body>
</html>
"""


class CompilationError(Exception):
    pass


def _git_id(path):
    rev = git.repo.Repo(path)
    return git.repo.Repo(path).log('-1')[0].id_abbrev


def _find_root(where=None):
    if where is None:
        where = os.curdir
    here = os.path.abspath(where)
    if here == '/':
        raise IOError('no .git found')
    if '.git' in os.listdir(here):
        return here
    parent = os.path.join(here, '..')
    return _find_root(parent)


class Minify(object):

    def __init__(self, base_dir, verbose=False):
        self.base_dir = base_dir
        self.verbose = verbose
        self.closure = False
        self.advanced_optmization = False
        self.uglify = False

    def run(self, dir_=None):
        if dir_ is None:
            dir_ = self.base_dir
        for f in os.listdir(dir_):
            path = os.path.join(dir_, f)
            if os.path.isdir(path):
                self.run(path)
            if '.min.' in f:
                continue
            if f.endswith('.css'):
                self._css(path)
            elif f.endswith('.js'):
                self._js(path)

    def _css(self, path):
        new_path = self._new_name(path)
        with open(path) as source:
            oldcss = source.read()
            newcss = cssmin.cssmin(oldcss)
            with open(new_path, 'w') as dest:
                dest.write(newcss)
            if self.verbose:
                self._show_diff(os.path.basename(path), len(oldcss), len(newcss))

    def _js(self, path):
        new_path = self._new_name(path)
        with open(path) as source:
            oldjs = source.read()
            if self.closure:
                newjs = self._run_closure(oldjs)
            elif self.uglify:
                newjs = self._run_uglify(oldjs)
            else:
                raise ValueError("You must either use --closure or --uglify")
            with open(new_path, 'w') as dest:
                dest.write(newjs)
            if self.verbose:
                self._show_diff(os.path.basename(path), len(oldjs), len(newjs))

    def _run_closure(self, code):
        cmd = "java -jar %s " % CLOSURE_JAR_LOCATION
        if self.advanced_optmization:
            cmd += " --compilation_level ADVANCED_OPTIMIZATIONS "
        return self._run_cmd(cmd, code)

    def _run_cmd(self, cmd, code):
        proc = subprocess.Popen(cmd, shell=True,
                                stdout=subprocess.PIPE,
                                stdin=subprocess.PIPE,
                                stderr=subprocess.PIPE)
        stdoutdata, stderrdata = proc.communicate(code)
        if not stdoutdata and stderrdata:
            raise CompilationError(stderrdata)
        return stdoutdata

    def _run_uglify(self, code):
        cmd = "uglifyjs"
        if self.advanced_optmization:
            cmd += " --compilation_level ADVANCED_OPTIMIZATIONS "
        return self._run_cmd(cmd, code)

    def _new_name(self, path):
        basename = os.path.basename(path)
        dirname = os.path.dirname(path)
        a, b = os.path.splitext(basename)
        new_name = a + '.min' + b
        return os.path.join(dirname, new_name)

    def _show_diff(self, name, before, after):
        print name.ljust(30),
        print ("%d bytes" % before).ljust(14),
        print "->",
        print ("%d bytes" % after).ljust(14),
        print "=>",
        print "%d bytes" % (before - after)


def run(*args):
    root = _find_root()
    build_dir = os.path.join(root, 'build')
    if not os.path.isdir(build_dir):
        os.mkdir(build_dir)

    latest_dir = os.path.join(build_dir, 'latest')
    if not os.path.isdir(latest_dir):
        os.mkdir(latest_dir)

    # copy css, img, js as is
    _copy_all(os.path.join(root, 'media'), latest_dir)
    m = Minify(latest_dir, verbose=False)
    if '--closure' in args:
        m.closure = True
        if '--advanced' in args:
            m.advanced_optmization = True
    elif '--uglify' in args:
        m.uglify = True
    if '--verbose' in args:
        m.verbose = True
    m.run()

    with open(os.path.join(latest_dir, 'test.html'), 'w') as dest:
        dest.write(TEST_PAGE)

    # we could call it "versions/XXXX" instead of just "XXXX"
    versions_dir = os.path.join(build_dir, 'versions')
    if not os.path.isdir(versions_dir):
        os.mkdir(versions_dir)
    version_dir = os.path.join(versions_dir, _git_id(root))
    if os.path.isdir(version_dir):
        shutil.rmtree(version_dir)
    shutil.copytree(latest_dir, version_dir)


def _copy_all(base_dir, dest_dir):
    for each in 'js', 'img', 'css':
        s = os.path.join(base_dir, each)
        d = os.path.join(dest_dir, each)
        if not os.path.isdir(d):
            os.mkdir(d)
        for f in os.listdir(s):
            shutil.copy(os.path.join(s, f),
                        os.path.join(d, f))


if __name__ == '__main__':
    import sys
    sys.exit(run(*sys.argv[1:]))
