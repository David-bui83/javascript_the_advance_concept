/**
 * Type Coercion
 * JavaScript automatically convert one value to match the other
 */

const one = 1 === '1';  // return true

// Avoid type coercion with '==='
const two = 2 === '2' // return false 

// -0 and +0
const zero = -0 === +0 // return true

// Object.is()
const zero2 = Object.is(-0,+0) // return false

// Exercise: Type coercion

const a = false == "";  // true
const b = false == [];  // true
const c = false == {}; // false
const d = "" == 0; // true
const e = "" == []; // true     
const f = "" == {}; // false     
const g = 0 == []; // true      
const h = 0 == {}; // false      
const i = 0 == null; // false

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);
console.log(i);