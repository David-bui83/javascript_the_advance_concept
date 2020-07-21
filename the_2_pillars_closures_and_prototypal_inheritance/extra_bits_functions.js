/**
 * Extra Bits: Functions
 */

// Don't do this
for(let i = 0; i < 5; i++) {
  function a() {

  }

  a();
}

// Do this
function b() {}
for(let i = 0; i < 5; i++){
  b();
}

// default param
function c(param=6){
  return param
}
c()