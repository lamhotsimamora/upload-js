# upload-js

Upload multiple with javascript...


## Get Started
### Copy this script 'upload.js' into your HTML
```
<script src="src/upload.js"></script>
```

### Put the input file into your HTML, for example id = file_1 and name = file_1
```
<input type="file" id="file_1" name="file_1">
```

### Use this code for uploading multiple files to server
```
_upload = new Upload({
		// Array
		el    : ['file_1','file_2','file_3','file_4'],
		// String
		url   : 'server-side/upload.php',
		// String
		data  : 'id|1',
		// String
		token : 'abcde12345'
	}).start(($response)=>{
		  console.log($response);
	});
```
