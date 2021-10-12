/*
* Written by Lamhot Simamora
* Library Upload File Javascript
* October 2021
* Github : https://github.com/lamhotsimamora/upload-js
*/
class Upload
{
    constructor(config)
    {
        if (config)
        {
            // element of input file, ex : ['input_1','input_2']
            this.el    = config.el;
            // url of upload in server side
            this.url   = config.url;
            // token as string
            this.token = config.token;
            // data as object
            this.data  = config.data;

            // create new object of formData
            this.form  = new FormData();
        }
        // Request method is POST
        this.request_method = 'POST';
        // You can change this string of token
        this.string_token   = '_token';
        // You can change this string of data
        this.string_data    = '_data';

        // create information of files
        this.info_files = [];
        return this;
    }

    // method to start upload files
    // with callback
    start(callback=null)
    {
        if (this.el==null){
            console.error("upload.js -> element file is nothing !");
            return;
        }
        if (this.el.length)
        {
            try
            {
                var collection_info = [];

                // create XMLHttpRequest object
                var x = XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHttp');
                
                // looping data inside of 'el'
                for (var i = 0; i <= (this.el.length-1); i++) {
                    // get element by id
                    var el = document.getElementById(this.el[i]);
                    if (el==null){
                        console.info("upload.js -> element "+this.el[i]+" is not found !");
                        continue;
                    }
                    // get attribute by name
                    var attr = el.getAttribute('name');
                    // check if input file is TRUE
                    if (el.files[0])
                    {
                        // append file to the form
                        this.form.append(attr, el.files[0]);
                        var file_name = el.files[0].name;
                        var file_size = el.files[0].size;
                        var file_type = el.files[0].type;
                        
                        // collecting information file into array
                        var info_file = {
                            'file_name' : file_name,
                            'file_size' : file_size,
                            'file_type' : file_type
                        }

                        collection_info[i] = info_file;
                    }
                }
                this.info_files = collection_info;
                
                // append _token to the form
                this.form.append(this.string_token, this.token);
                // append _data to the form
                this.form.append(this.string_data, JSON.stringify(this.data));

                // try to access the URL
                x.open(this.request_method, this.url);
             
                //x.setRequestHeader("Content-type", "multipart/form-data");
        
                x.onreadystatechange = function($info) {
                    // if status is 200 | success
                    if (this.readyState == 4 && this.status == 200) {
                        // check if callback is VALID
                       if (callback!=null)
                       {
                            // call user function with responseText and more information
                            callback(this.responseText,$info);
                       }else{
                            console.error("upload.js -> You have to use callback function !");
                       }
                    }
                };
                // send form
                x.send(this.form);
            }catch(error)
            {
                console.error("upload.js -> "+error);
            }
        }
        else{
            console.log("Element should be collecting in array !")
        }
        return this;
    }

    /*
    * Return information of files (Object)
    */
    get information(){
        return this.info_files;
    }   
}
