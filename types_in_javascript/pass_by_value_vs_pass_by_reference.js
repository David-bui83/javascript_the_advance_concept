/**
 * PASS BY VALUE VS PASS BY REFERENCE
 */

/**
 * Primitive types are pass by value
 * Primitive types are immutable 
 * Primitive types are pass by value
 */  

var a = 5; // a has the address if where 5 sits in memory
var b = a; // made a copy of a value into a new memory location



/**
 * Objects are pass by reference 
 * Obj2 is pointing to the same memory location as obj1
 */

let obj1 = {name: 'Yao', password: '123'};
let obj2 = obj1;

obj2.password = 'easypeasy';
// both password for obj1 and obj2 password changed to 'easypeasy' because of pass by reference 
console.log(obj1);
console.log(obj2);

// Pass by reference of array
var c = [1,2,3,4,5]
var d = c;

d.push(123123123);
console.log(d);
console.log(c);

// Pass by value -> create a clone 
var c2 = [1,2,3,4,5]
var d2 = d2.concat(c);

d2.push(32144545456);
console.log(d2);
console.log(c2);

// Pass by value and reference for objects
let object = {a: 'a', b: 'b', c: 'c'};
let clone = Object.assign({}, object);
let clone2 = {...object};

object.c = 5;
console.log(clone);
console.log(clone2);
console.log(object);

// shallow clone does not clone objects inside an object
let sobj = {
  a: 'a',
  b: 'b', 
  c: {
    deep: 'try and copy me'
  }
};

let clone = Object.assign({}, sobj);
let clone2 = {...sobj};

sobj.c = 'hahahaha';
console.log(clone);
console.log(clone2);
console.log(sobj);

// Deep clone modify object inside an object
let dobj = {
  a: 'a',
  b: 'b', 
  c: {
    deep: 'try and copy me'
  }
};

let clone = Object.assign({}, dobj);
let clone2 = {...dobj};
let superClone = JSON.parse(JSON.stringify(dobj));

dobj.c.deep = 'hahaha';
console.log(clone);
console.log(clone2);
console.log(dobj);
console.log(superClone)