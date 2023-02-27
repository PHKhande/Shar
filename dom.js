// document.title = "Hotel Items";

// var form = document.getElementById('addForm');
// var itemList = document.getElementById('items');
// var filter  = document.getElementById('filter');

// //Form submit event
// form.addEventListener('submit', addItem);

// //Delete Event
// itemList.addEventListener('click', removeItem);

// //Filter Event
// filter.addEventListener('keyup', filterItem);

// function addItem(e){
//     e.preventDefault();
    
//     //Get input value
//     var newItem = document.getElementById('item').value;
//     var newDescript = document.getElementById('description').value;

//     //Create new li element
//     var li = document.createElement('li');

//     //Add class
//     li.className = 'list-group-item';
//     console.log(li);

//     //Append the textNode with inp value from form
//     if(newDescript){
//         li.appendChild(document.createTextNode(newItem + ` (${newDescript})`));
//     }else{
//         li.appendChild(document.createTextNode(newItem));
//     }
    
//     //Create delete button
//     var delBtn = document.createElement('button');
//     delBtn.className = 'btn btn-danger btn-sm float-right delete';
//     delBtn.appendChild(document.createTextNode('X'));
//     li.appendChild(delBtn);
//     //console.log(delBtn);

//     // var editBtn = document.createElement('button');
//     // editBtn.className = 'btn btn-danger btn-sm float-right delete';
//     // editBtn.appendChild(document.createTextNode('Edit'));
//     // li.appendChild(editBtn);

//     itemList.appendChild(li);
// }

// function removeItem(e) {
//     if (e.target.classList.contains('delete')){
//         if(confirm('Are you sure?')){
//             var li = e.target.parentElement
//             itemList.removeChild(li);
//         }
//     }
// }

// //Filter items
// function filterItem(e){
//     //converting into lowerCase
//     var text = e.target.value.toLowerCase();
    
//     //Get li's
//     var items = itemList.getElementsByTagName('li');

//     //Converting HTML Collection to array
//     Array.from(items).forEach(function(item){
//         var itemName = item.firstChild.textContent;
//         if(itemName.toLowerCase().indexOf(text) != -1){
//             item.style.display = 'block';
//         }else{
//             item.style.display = 'none';
//         }
//     });
// }

// const myForm = document.querySelector('#my-form');
// const nameInput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');
// const msg = document.querySelector('.msg');
// const userList = document.querySelector('#users');

// myForm.addEventListener('submit' , onSubmit);

// function onSubmit(e){
//     e.preventDefault();
//     if (nameInput.value === '' || emailInput.value === ''){
//         msg.classList.add('error')
//         msg.innerHTML = 'Enter All Fields'

//         setTimeout( () => msg.remove(), 5000);
//     } else{
//         console.log(nameInput.value);
//         console.log(emailInput.value);
//     }
// }



//Async
// console.log('person1 shows ticket');
// console.log('person2 shows ticket');

// const preMovie = async () => {

//   const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('ticket'), 3000);
//   });
//   const getPopcorn =  new Promise((resolve, reject) => {
// 		setTimeout(() => resolve('popcorn'), 3000);
//   });
  
//   const addButter =  new Promise((resolve, reject) => {
// 		setTimeout(() => resolve('butter'), 3000);
//   });

//   const getColdDrink = new Promise( (resolve) => {
//         setTimeout(() => resolve('cold drink'), 3000);
//   })

//   let ticket = await person3PromiseToShowTicketWhenWifeArrives;
//   console.log(`got the ${ticket}`);
//   console.log(`Wife: "i am hungry"`);
  
//   let popcorn = await getPopcorn;
//   console.log(`Husband: here is ${popcorn}`);
//   console.log(`Wife: "I dont like popcorn without butter!"`);
  
//   let butter = await addButter;
//   console.log(`added ${butter}`);
//   console.log(`Wife: lets go we are going to miss the preivew`);

//   let coldDrink = await getColdDrink;
//   console.log(`got ${coldDrink}`);
  
//   return ticket;
  
// };

// preMovie().then((t) => console.log(`person3 shows ${t}`));

// console.log('person4 shows ticket');


// Promise
// console.log('person1: shows ticket');
// console.log('person2: shows ticket');

// const promiseWifeBringingTickets = new Promise( (resolve, reject) => {
//     setTimeout( () => {
//         resolve('ticket');
//     }, 3000)
// });


// const getPopcorn = promiseWifeBringingTickets.then( (t) => {
//     console.log("wife's Hungry");
//     return new Promise((res) => res(`${t} popcorn`) )
// })

// const getbutter = getPopcorn.then((m) => {
//     console.log(m)
//     console.log('I need butter')
//     return new Promise( (res) => {res("got butter")})
// })

// const getDrinks = getbutter.then((m) => {
//     console.log(m)
//     console.log('I need coldDrinks')
//     return new Promise( (res) => {res("got drinks")})
// })

// getDrinks.then( (msg) => {
//     console.log(msg)
//     console.log('Preson3: shows ticket')
// })

// console.log('person4: shows ticket');
// console.log('person5: shows ticket');











// blogs = []
// let val = function updateLastUserActivityTime(){
//     return new Promise( function (res) {
//         setTimeout(function () {
//             const tim = new Date().getTime();
//             res(tim)
//         }, 1000)
//     })
// }

// function createPost(post) {
//     return new Promise( (resolve) => {
//         blogs.push(post);
//         resolve(blogs);
//     }) 
// }

// function deletePost() {
//     return new Promise( (resolve) => {
//         blogs.pop();
//         resolve(blogs);
//     }) 
// }

// const post = async () => {
//     await createPost("ABC") 
//     let k = await val()
//     console.log(k)
//     console.log(blogs)
//     await createPost("DEF") 
//     k = await val()
//     console.log(k)
//     console.log(blogs)
//     await deletePost() 
//     k = await val()
//     console.log(k)
//     console.log(blogs)
// }

// post()

// Promise.all(
//     [
//         createPost("ABC"), updateLastUserActivityTime()
//     ],
//     [
//         createPost("DEF"), updateLastUserActivityTime(), deletePost()
//     ]
// ).then(
//     (values) => {
//         console.log(values)
//     }
// )








name = 'Yash Prasad'

age = 25

address = "Prestige Falcon City, Bangalore"


console.log("personal details = My name is ",name, "age is", age," address is", address)

