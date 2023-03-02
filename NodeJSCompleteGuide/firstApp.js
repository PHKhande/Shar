// console.log("hello world");

// const abc = (a, b) => a * b
// console.log(abc(5, 6))

// //Creating Objects
// const student = {
//     name : 'Prathviraj',
//     age : 24,
//     class : 'Backend',
//     studies() {
//         console.log(`Studies ${this.class}`)
//     } 
// }
// student.studies()

const arr = [ 'apple', 'oranges', ' ', 'mango', ' ', 'lemon']
console.log(arr.map( fruit => {
    if(fruit == ' '){
        return 'empty string'
    }
    else return fruit
}))


