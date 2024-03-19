// Primitive Datatypes
// 7 Types : String, Number, Boolean, null, undefined, symbol, BigInt 


// References (Non Primitive) Datatypes
// Array, Objects, Functions


// const score = 100
// console.log(score);

// const id = Symbol("123")
// const anotherId  = Symbol("123")

// console.log(id == anotherId);
// console.log(typeof id);
// console.log(typeof anotherId);
// console.log([id,anotherId]);
// console.log(id);

// const heros = ["Brother","Father","Uncle"]
// console.log(heros);

// let myObject = {
//     "name":"Darsh",
//     "age":20,
//     "place":"Thane"
// }
// console.log(myObject);

// const myFunction = function(){
//     console.log("Hello World...!");
//     console.log(myFunction)
// }

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let myNmae = "Durgesh Patil"
// let anotherName = myNmae
// anotherName = "Bahubali",
// anotherName = "Amol"
// console.log(anotherName);

let UserOne = {
    email : "durgeshpatil@gmail.com",
    upi : "@8873Abdc"
}

let userTwo = UserOne
console.log(userTwo);

userTwo.email = "ram@yahoo.com"
console.log(UserOne);
console.log(userTwo);