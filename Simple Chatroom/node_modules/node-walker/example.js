
// include the module, in this case 
// it's located in the current folder,
// otherwise use require('node-walker')
var walker = require('./index.js');

// set a counter to zero
var j = 0;

// walk this directory
var root = __dirname;

console.log('\nShowing all files in ' + root + ' ..\n');

// start walkin'
walker(root, function (errorObject, fileName, fnNext) {
	
	// an error occurred
	if (errorObject) throw errorObject;
	
	if (fileName !== null) {

		// increase a counter
		j++;

		// show relative path
		fileName = fileName.substr(root.length +1);

		// log the filename
		console.log(j + '.\t' + fileName);

		// continue with next file
		fnNext();
		
	} else {
		
		// filename is null, no more will follow
		console.log('\nThe end.');	
	}
});