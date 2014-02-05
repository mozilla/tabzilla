BUILD_SCRIPT=$(CURDIR)/bin/build.py


compile:     
	$(BUILD_SCRIPT) --verbose --closure
    
test:
	open http://localhost:8080/build/latest/test.html
	echo "Use Ctrl+C when you're done testing"
	python -m SimpleHTTPServer 8080
