File Serve

File serve is a simple API to upload files through a NodeJS server.
Currently files of type PNG, JPG and PDF with size upto 10MB are supported

Usage
1. Checkout git repository and install node modules with yarn
2. To run simply type 'node index.js'

Upload of files and display can be tested through Postman.

Support for file uploads through webpage will be added in future.

Routes
GET '/'
landing page for the application

POST '/upload'
form-data [file] : choose the file to upload in postman

POST '/uploadMany'
form-data [files] : choose upto 10 files to upload

GET '/display?name={filename.extension}'
name : enter the file name in the server to be displayed
