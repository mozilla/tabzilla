var path = require('path');

var tabzillaEntryPoint = require.resolve('mozilla-tabzilla');
var tabzillaDir = path.join(path.dirname(tabzillaEntryPoint), 'css');

function includePaths() {
  return tabzillaDir;
}

module.exports = {
  includePaths: includePaths(),
  with: function() {
    var paths  = Array.prototype.slice.call(arguments);
    var result = [].concat.apply(includePaths(), paths);
    return result;
  }
};
