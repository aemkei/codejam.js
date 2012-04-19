var codejam = require("./codejam.js");

// Modify the following function and return the correct answer.

function evaluate(line){  
  // Exaple: Return length^2 of items in line.
  var array = line.split(" ");
  return array.length * array.length;
}


codejam.run(evaluate);
