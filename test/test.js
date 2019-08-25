/*
* Example input file in your HTML
* id and name should be same
* <input type="file" id="file_1" name="file_1" class="form-control">
*/
var _upload = null;

// this code is example to make multiple upload files to server
function uploadNow(){

	/*
	* Create new Upload instance
	* el -> elementof input file (Array)
	* url -> url upload server (String)
	* data -> send external data  (String)
	* token -> send token (String)
	*/

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
		// get the response and show it to the HTML
		document.getElementById('display_response').innerHTML = ($response);

	});

}

function infoFile(index){
	if (_upload==null)
	{
		return;
	}
	var data = _upload.information;

	var template_list = '<ul class="list-group">';
	
	var file_name = data[index].file_name;
	var file_size = data[index].file_size;
	var file_type = data[index].file_type;

	template_list += '<li class="list-group-item">'+file_name+'</li>'+
	                 '<li class="list-group-item">'+file_size+'</li>'+
	                 '<li class="list-group-item">'+file_type+'</li>';
	
	template_list += '</ul>';

	document.getElementById('display_info_files').innerHTML = template_list;
}
