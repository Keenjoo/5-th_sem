var xyz = ["Banana", "Orange", "Apple", "Mango"];

//length of string
console.log("the length into string",xyz.length);

//convert an array into string
console.log("convert an array into string",xyz.toString());

//introduce array method at()
console.log(xyz.at(2));

//joint array element
console.log("joining array element",xyz.join(" & "));

//pop(), remove the last element from array
console.log(" remove the last element from array",xyz.pop());
console.log("the length into string",xyz.length);

//push(), add new element from array
xyz.push("kiwi")
console.log("add new element from array",xyz);
console.log("the length into string",xyz.length);

//shift() method removes the first array element 
console.log("add new element from array",xyz.shift());
console.log("the length into string",xyz.length);

//unshift() method add the first array element 
xyz.unshift("pineapple")
console.log("add new element from array",xyz);
console.log("the length into string",xyz.length);

// delete() leaves undefined holes in the array.
delete xyz[0];
console.log("the delete fruit is", xyz);

//joining the two element
var a=[1,2,3,4,7]
var b=[3,8,9,6,5]
console.log(" joining two element",c=b.concat(a));

//







