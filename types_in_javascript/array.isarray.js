// Array 

var array = [1,2,3];
// Writing the top is like writing the bottom -> That is why typeof array is an object
var array = {
  0: 1,
  1: 2,
  2: 3
}

// Checking to see if something is an array
const a = Array.isArray([1,2,3]); // true
console.log(a);

const b = Array.isArray({}); // false
console.log(b);

