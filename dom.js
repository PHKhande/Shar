//git remote add origin https://github.com/PHKhande/SharpenerTasks.git

//console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);

document.title = "Hotel Items";

// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);

//document.all[18].textContent = "Hello, here is your menu list";

// console.log(document.forms);
// console.log(document.links);


//GETELEMENTBYID
// var header = document.getElementById('main-header');
// header.style.borderBottom = 'solid 3px #000';


// //GETELEMENTBYCLASSNAME
// var title = document.getElementsByClassName('title');
// console.log(title);
// title[0].style.color = 'green';
// title[0].style.fontWeight = 'bold';

// var items = document.getElementsByClassName('list-group-item');
// items[2].style.backgroundColor = 'green';

// //Gives Error
// //items[i].style.fontWeight = 'bold';

// for (let i=0; i < items.length; i++){
//     items[i].style.fontWeight = 'bold';
// }


// var items = document.getElementsByClassName('list-group-item');
// for (let i=0; i < items.length; i++){
//     items[i].style.color = 'skyblue';
// }

// //GETELEMENTBYTAGNAME
// var li = document.getElementsByTagName('li');
// console.log('li');

// for (let i=0; i < li.length; i++){
//     li[i].style.color = 'skyblue';
// }

// var items = document.getElementsByClassName('list-group-item');
// for (let i=0; i < items.length; i++){
//     items[i].style.fontWeight = 'bold';
//     items[i].style.backgroundColor = 'green';
// }


//QUERYSELECTOR
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #000';

// var input = document.querySelector('input');
// input.value = 'Hello World!';
// // Even though it has two inputs, it will select the first one by default

// var submit = document.querySelector('input[type = "submit"]');
// submit.value = 'SEND';

// var items = document.querySelector('.list-group-item');
// items.style.color = 'red';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor = 'green';

// var lastItem = document.querySelector('.list-group-item:last-child');
// console.log(lastItem)
// lastItem.style.backgroundColor = 'red';

// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.visibity = 'hidden';

//QUERYSELECTORALL
// var odd = document.querySelectorAll('li:nth-child(odd)');
// //console.log(odd);
// for (var i = 0; i < odd.length; i++){
//     odd[i].style.backgroundColor = 'green';
// }

// var second = document.querySelectorAll('li');
// console.log(second);
// second[2].style.color = 'red';


// TRAVERSING THE DOM //

var itemList = document.querySelector('#items');

// //ParentNode 
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = 'grey';

//ParentElement
//console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = 'grey';

//childNodes
//console.log(itemList.childNodes);

//children
//console.log(itemList.children);
itemList.children[0].style.backgroundColor = 'brown';


//lastChild
//console.log(itemList.lastChild);

//lastElementChild
//console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'Paneer';
itemList.firstElementChild.textContent = 'Rice';

// //nextSibling
// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);

// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'green';

//createElement

// Create a div
var newDiv = document.createElement('div');


// Add class and id
newDiv.className = 'hello';
newDiv.id = 'hello1';

// Add attr
newDiv.setAttribute('title', 'Hello Div');


//Create a text node
var newDivtext = document.createTextNode('Hello World!');

//Add text node in div
newDiv.appendChild(newDivtext);

// Adding div inside DOM
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
//console.log(h1);

container.insertBefore(newDiv, h1);
newDiv.style.fontSize = '20px';

// Adding hello before item1
var head1 = document.querySelector('div .list-group');
console.log(head1);
var list1 = document.querySelector('ul .list-group-item');
console.log(list1);

head1.insertBefore(newDiv, list1);


console.log(newDiv);