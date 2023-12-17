// Exercise #1: Strict and Same
// Start commenting here
Object.is(10, 20);//false
Object.is(0, -0);//True
Object.is(NaN, 100);//false
Object.is("one", "two");//false
Object.is({ name: "John", age: 30 }, { name: "John", age: 30 });//True
Object.is(null, undefined);//False

10 === 20;//false
10 === "10" //False
3.14 !== 3.14;//false
"TechUp" !== "TechUp";//false
NaN === NaN;//False
0 !== -0;//false

let objectA = { course: "Web Developer", price: 300000 };
let objectB = { course: "Web Developer", price: 300000 };
objectA === objectB;//false
