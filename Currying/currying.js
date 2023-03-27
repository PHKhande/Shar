// 'use strict';
// let multiply = function (x, y) {
//     console.log(x * y);
// }

// let multiplyByTwo = multiply.bind(this, 2);
// multiplyByTwo(5);

// let multiplyByThree = multiply.bind(this, 3);
// multiplyByThree(7);

// //Function Closures
// let multi = function (x) {
//     return function (y) {
//         console.log(x * y);
//     }
// }

// let multiByTwo = multi(2);
// multiByTwo(6);


// // What are the different type of usage of this as shown by the youtuber. List all of them
// // After listing all of them write a small code snippet for everyone of them and paste the code here.

// //this inside global scope
// this.table = 'Engg';

// const cleanTable = function() {
//     let that = this;
//     const inner = function(_soap){
//         console.log(`cleaned ${this.table} using ${_soap}`);
//     }
//     inner.call(this,'soappp');
// }
// //call function
// cleanTable.call(this);

// this.work = {
//     table: 'developer',
//     cleanTable() {
//         console.log(`cleaned ${this.table}`);
//     }
// };
 
// //this inside object
// let johnRoom = {
//     table : 'johns table'
// };
// console.log(johnRoom.table)
// //console.log(this.johnRoom.table)

// //this inside method
// let barnRoom = {
//     table : 'barns table',
//     cleanTable() {
//         console.log(`cleaned ${this.table}`);
//     }
// };
// console.log(barnRoom.table)
// barnRoom.cleanTable();
// this.work.cleanTable();

// //this inside constructor
// let createRoom = function(name){
//     this.table = `${name}s table`
// }
// const jillsRoom = new createRoom('jill')















// Design pattern problem - How will you design a Student class which stores the name , age , phone number, board marks of each student. Make a constructor to initialize the values.

// Write a function to check whether the student is egligible or not for college. 
//If board marks > 40 -> egligible , if less than 40 -> not egligible.Write a function to check this.

// Create 5 students with different names and age.

// Write a function which keep track of the number of students created. Have you heard of static variables.
// Leverage that now. Check Hints 1 if you are stuck.


// setTimeout(() => console.log('timer1 expired'), 1000)



// setTimeout(() => console.log('timer2 expired'), 0)



// function x(y) {

// console.log('inside x');

// y();

// }



// x(function y(){

// setTimeout(() => console.log('inside y'), 0)

// })


// document.getElementById('click')
// .addEventListener("click",function xyz(){
//     console.log("Clicked!");
// });

// var studentobj = {
// 	'yash': 26,
// 	'vaibhav': 24,
// 	'rajesh' : 25,
// 	}

// function findaverageage(studentObj){
//     let val = Object.values(studentObj)
//     let sum = 0;
//     let averageAge = 0;
//     val.forEach(function(num) { sum += num });
//     averageAge = sum / val.length;
//     console.log(averageAge)
// 	return averageAge;

// }
// findaverageage(studentobj);

// var x = 7;


// getName();
// console.log(x);
// console.log(getName);
//  function getName(){
//     console.log("A");
//  }

{
console.log(count(1)); //calling the function count
function count(i){
  if(i>5)
  {
//Print the elements inside the stack from top to bottom 
    return 0;
  }

  else 
  {
    return count(i+1);
  }
}

}
