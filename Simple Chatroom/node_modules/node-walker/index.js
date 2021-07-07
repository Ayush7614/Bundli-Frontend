var fs = require('fs');

/**
    Walks over all files in a given path and calls the provided
    function fnEach for every real file. fnNext must be called
    after every call to fnEach in order to continue. When all
    files have been read, fileName and fnNext are null.
    
    fnEach ( errorObject, fileName, fnNext ) { }
 */
var exports = module.exports = function(start, fnEach) {
	
	// start only with the starting directory
	var arrFiles = [];
	if (typeof start === 'string') arrFiles.push(start);
	if (typeof start === 'array') arrFiles = start.concat([]);
	
	// start iterating
	iterate(arrFiles, fnEach);
}



// main iteration function, recursive
function iterate (arrFiles, fnEach) {

	// no items left
	if (arrFiles.length == 0) return fnEach(null, null, null);

	// remove first item	
	var item = arrFiles.shift();
	

	// get file stats
	fs.stat(item, function (err, stats) {
		
		// an error occurred
		if (err) return fnEach(err, null, null);
		
		// it is a file
		if (stats.isFile()) {
			return fnEach(null, item, function () {
				iterate(arrFiles, fnEach);
			});
		}
		
		// it is a folder
		if (stats.isDirectory()) {
			
			fs.readdir(item, function (err, contents) {
				// an error occurred
				if (err) return fnEach(err, null, null);
				
				// add files to iteration queue 
				for (var i = 0; i < contents.length; i++) {
					// ignore . and ..
					if (contents[i] === '.' || contents[i] === '..') continue;
					
					// add path to file
					arrFiles.push(item + '/' + contents[i]);
				}
				
				// proceed iteration
				iterate(arrFiles, fnEach);
			});
			return;
		}
		
		// this should not happen, but let's 
		// at the very least throw an error to be safe
		fnEach(new Error('Unknown item type has been encountered: ' + item), null, null);
	});	
}

