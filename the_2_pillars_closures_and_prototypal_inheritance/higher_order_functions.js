/**
 * Higher Order Functions
 */

// Higher order function is a function that can take in a function as an argument or return a function as a value

// // Bad way
// function letAdamLogin(){
//   let array = [];
//   for(let i = 0; i < 1000000; i++){
//     array.push(i);
//   }
//   return 'Access Granted to Adam'
// }

// function letEvaLogin(){
//   let array = [];
//   for(let i = 0; i < 1000000; i++){
//     array.push(i);
//   }
//   return 'Access Granted to Adam'
// }

// letAdamLogin();
// letEvaLogin();

// // Better way 
// function letUserLogin(user){
//   let array = [];
//   for(let i = 0; i < 1000000; i++){
//     array.push(i);
//   }
//   return 'Access Granted to Adam' + user;
// }

// letUserLogin('Adam');

// // Refactor 
// const giveAccessTo = (name) => 'Access Granted to ' + name;

// function letUserLogin2(user){
//   let array = [];
//   for(let i = 0; i < 1000000; i++){
//     array.push(i);
//   }
//   return giveAccessTo(user);
// }

// letUserLogin2('Eva')


// HOA -> Help to keep code more flexible and dry

const giveAccessTo = (name) => 'Access Granted to ' + name;
function authenticate(verify){
  let array = [];
  for(let i = 0; i < verify; i++){
    array.push(i);
  }
  return true;
}

function letPerson(person, fn){
  
  if(person.level === 'admin'){
    fn(50000)
  } else if (person.level === 'user') {
    fn(10000)
  }
  return giveAccessTo(person.name)
}

console.log(letPerson({level: 'user', name: 'sally'}, authenticate));


// Excerise: Higher order functions
// const multiplyBy = function(num1) {
//   return function (num2) {
//     return num1 * num2
//   }
// }
const multiplyBy = (num1) => (num2) => num1 * num2

const multiplyByTwo = multiplyBy(2);
const multiplyByFive = multiplyBy(5);
multiplyByTwo(4)
multiplyByTwo(10)
multiplyByFive(6)