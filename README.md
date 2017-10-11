# study_nodejs
my personal study for Node.js

Terminal command:
1. Check Node.js version
$ node -v

2. Enter node shell
$ node

3. Exit from node shell
$ .exit


// myfirstmodule.js
Use the exports keyword to make properties and methods available outside the module file
If the response from the HTTP server is supposed to be displayed as HTML, you should include an HTTP header with the correct content type
The first argument of the res.writeHead() method is the status code, 200 means that all is OK, the second argument is an object containing the response headers


// myfirst.js
use ./ to locate the module, that means that the module is located in the same folder as the Node.js file

To add append a new line (line break), 
1.  {'Content-Type': 'text/html'}
write("The date and time are currently: " + dt.myDateTime() + '</br>');

2. {'Content-Type': 'text/plain'}
write("The date and time are currently: " + dt.myDateTime() + '\n');
                        == equivalent to ==
var os = require('os')
write("The date and time are currently: " + dt.myDateTime() + os.EOL);


// demo_http_url.js
The function passed into the http.createServer() has a req argument that represents the request from the client, as an object (http.IncomingMessage object).
This object has a property called "url" which holds the part of the url that comes after the domain name


// demo_querystring.js
There are built-in modules to easily split the query string into readable parts, such as the URL module

