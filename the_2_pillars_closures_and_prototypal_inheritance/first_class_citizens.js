/**
 * Funtions Class Citizens
 */

 // 1 - assign to a variable
var stuff = function() {}

// 2 - pass a function as an argument into a function
function a(fn) {
  fn()
}

a(function(){console.log('hi there')})

// 3 - return function as a value
function b() {
  return function c() {
    console.log('bye')
  }
}

// this
b()();
// or this
var d = b();
d();