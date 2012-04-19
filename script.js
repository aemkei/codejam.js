var _ = require("./underscore");

var fs = require('fs');
var data = fs.readFileSync('problem.in').toString().split("\n");


var results = _.map(data, function(line, index){
  return line;
});

_.each(data, function(line, index){
  console.log("Case #", index, ": ", line)
});

