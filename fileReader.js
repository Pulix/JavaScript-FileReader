 //The File Input Element
 //
 //Works with input multiple="true"
 //
let fileInputElement = document.getElementById("fileupload");

fileInputElement.addEventListener("change", handleFiles, false);
function handleFiles() {
    
    // files is a FileList object
    let files = fileInputElement.files;

    function readAndLog(file) {
        //console.log(file);
        let reader = new FileReader();

        //this gets called after the FileReader has finished reading the file.
        reader.addEventListener("load", function () {
            //
            //Code to be executed after reading the file
            //...
            //the result can be found in reader.result
            //
            let data = reader.result; //get the content
            let baseString = data.split(',')[1]; // separate the mime type from the b64 string
            let document = {
                name: file.name,
                contents: baseString
            }
            
            //log an object containing the file name and it's base64 content.
            console.log(document);

        }, false);

        //Reads the file as b64
        reader.readAsDataURL(file);
    }

    //If there were files uploaded, call readAndLog() for each one.
    if (files) {
        [].forEach.call(files, readAndLog);
    }
}