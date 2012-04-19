var _ = require("./underscore");

var fs = require('fs');
var data = fs.readFileSync('problem.in').toString().split("\n");


var results = _.map(data, function(line, index){
  
  line = line.split(" ");
  
  var amount = 1 * line.shift();
  var total = 1 * line.shift();
  
  line = _.map(line, function(number){
    return {
      want: number * 1,
      bought: 0,
      available: amount
    };
  });
  
  return {amount: amount, total: total, items: line};
});

_.each(results, function(line, index){
  
  var items = line.items;
  
  var count = 0;
  
  function log(value){
    console.log("Case #" + index + ": " + value)
  }
  
  function validate(){
    return _.find(items, function(item){
      return item.want > item.available;
    });
  }

  
  function buy(){
    
    
    items = _.sortBy(items, function(item){
      return item.want;
    });
    
    var left = _.filter(items, function(item){
      return item.available > 0;
    });
        
    var item = left[0];
    
    var notdone = _.find(items, function(item){
      return item.want > item.bought;
    }); 
    
    if (!notdone || !item){ 
      log(count);
      return;
    }
    
    count++;
    
    item.bought++;
    item.available--;    
        
    buy();
    
  }
  
  
  if (validate()){
    log(-1)
    return;
  } else {
    buy();    
  }
  
  
  
  
  
});

