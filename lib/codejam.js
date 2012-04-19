// Google Code Jam JavaScript Template
//
// by Martin Kleppe <kleppe@ubilabs.net> 
// @aemkei 2012

var FILE = 'problem.in',
  _ = require("./underscore");

var codejam = {  
  // run the app
  run: function(callback){
    _.bindAll(this);
    this.callback = callback;
    var data = this.load();
    this.parse(data);
    this.evaluate();
  },
  
  // log a single result
  // eg: "Case #1: 123"
  log: function(index, value){
    index = index + 1;
    console.log("Case #" + index + ": " + value);
  },
  
  // load the input file
  load: function(){
    return require('fs').readFileSync(FILE).toString();
  },
  
  // parse all line in file
  parse: function(data){
    var lines = data.split("\n");
    _.each(lines, this.evaluate);
  },
  
  // parse a sinle line
  // but skip first line and empty (last) line
  evaluate: function(line, index){
    if (!index || !line){ return; }
    var value = this.callback(line);
    this.log(index, value);
  }
};

module.exports = codejam;