// Javascript has 7 types

// PRIMITIVE TYPES -> In memory, it only represents one type of data
const five = typeof 5 // numbers
console.log(five);

const b = typeof true // boolean 
console.log(b);

const str = typeof 'to be or not to be' // string
console.log(str);

const u = typeof undefined // undefined -> absence of definition
console.log(u);

const n = typeof null // null -> object -> no value there
console.log(n);

const s = typeof Symbol('just me') // symbol -> for object property
console.log(s);


// NONE PRIMITIVE TYPES -> In memory it represent more than on type of data

const o = typeof {} // object
console.log(o);

const arr = typeof [] // array -> array is an object
console.log(arr); 

const f = typeof function(){} // function -> function is a object
console.log(f);