var fs = require('fs');

var fileName= process.argv[2]

fs.readFile(fileName, function(err, data){

if 
  fs.writeFile(fileName +".copy", data.toString(), function(err){

  })
});
