# upload-js

Upload multiple with javascript...


## Get Started
### Copy this script 'upload.js' for DEVELOPMENT into your HTML
```
<script src="src/upload.js"></script>
```
### OR use this CDN for PRODUCTION
```
<script src="https://cdn.jsdelivr.net/gh/lamhotsimamora/upload-js@master/src/upload.js"></script>
```

### Put the input file into your HTML, for example id = "file_1" and name = "file_1" (id and name of INPUT file must be SAME)
```
<input type="file" id="file_1" name="file_1">
<input type="file" id="file_2" name="file_2">
<input type="file" id="file_3 name="file_3">
<input type="file" id="file_4" name="file_4">
```

### Use this code for uploading multiple files to server
```
_upload = new Upload({
		// Array
		el    : ['file_1','file_2','file_3','file_4'],
		// String
		url   : 'server-side/upload.php',
		// String
		data  :  {
                    id: 1
                },
		// String
		token : 'abcde12345'
	}).start(($response)=>{
		  console.log($response);
	});
```

### For example i use PHP as server side, so create file 'upload.php' and write code like this
```
<?php 

// Try to receive files...

if (isset($_FILES))
{
	var_dump($_FILES);
}else{
	echo 'Nothing...';
}
```
