// task 1
var myGlobal = 10;

function fun1 () {
    oopsGlobal = 5;

}

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
      output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
      output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
  }

  fun2();


// task 2
function myLocalScope () {
    'use strict';
    var myVar = 1;
    console.log(`inside myLocalScope: ${myVar}`)
}
myLocalScope();

console.log(`outside myLocalScope: ${myVar}`);
