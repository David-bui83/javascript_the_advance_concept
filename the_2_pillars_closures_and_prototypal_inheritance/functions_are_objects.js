/**
 * Functions are object
 */

// Three way to invoke and define functions

// first method
function one() {
  return 1
}

one();

// second method
const obj = {
  // two: function() {
  //   return 2;
  // }

  // new way
  two(){
    return 2;
  }
}

obj.two();

// third method
function three() {
  return 3;
}

three.call();

// Less use way -> function constructor
const four = new Function('return 4')

four();

// Properties
function woohoo() {
  console.log('wooohooo')
}

woohoo.name // property name
woohoo.length // prperty length