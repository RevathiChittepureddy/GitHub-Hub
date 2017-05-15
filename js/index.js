/* index.js */
"use strict";
var msg = "hello JavaScript";
console.log(msg);

var resultDiv = document.getElementById("results");
resultDiv.innerHTML = "<p> This is from JavaScript</p>";

console.log("msg is " + typeof(msg));
console.log("resultDiv is " + typeof(resultDiv));

var none;
console.log("none is " + typeof(none));

var aNumber = 0;
console.log("aNumber is " + typeof(aNumber));

var trueFalse = true;
console.log("trueFalse is " + typeof(trueFalse));

var Hello="null";
console.log("Hello is " + typeof(Hello));

if(!none){
    console.log("none is undefined");
}

if (aNumber == "0"){
    console.log("10 is 10")
}

function showMsg(msg)

