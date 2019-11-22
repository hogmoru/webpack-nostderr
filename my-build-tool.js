var exec = require('child_process').exec;
var child;

child = exec('webpack -d',
   function (error, stdout, stderr) {
      if (error === null) {
          console.log('# Build successful');
      } else {
          console.log('# Build has failed: ' + error);
          console.log('# Error details below:\n' + stderr);
      }
   }
);

