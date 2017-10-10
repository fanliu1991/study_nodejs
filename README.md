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

