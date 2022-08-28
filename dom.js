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

document.all[18].textContent = "Hello, here is your menu list";

// console.log(document.forms);
// console.log(document.links);


//GETELEMENTBYID
var header = document.getElementById('main-header');
header.style.borderBottom = 'solid 3px #000';


//GETELEMENTBYCLASSNAME
var title = document.getElementsByClassName('title');
console.log(title);
title[0].style.color = 'green';
title[0].style.fontWeight = 'bold';

// var items = document.getElementsByClassName('list-group-item');
// items[2].style.backgroundColor = 'green';

// //Gives Error
// //items[i].style.fontWeight = 'bold';

// for (let i=0; i < items.length; i++){
//     items[i].style.fontWeight = 'bold';
// }


var items = document.getElementsByClassName('list-group-item');
for (let i=0; i < items.length; i++){
    items[i].style.color = 'skyblue';
}

//GETELEMENTBYTAGNAME
var li = document.getElementsByTagName('li');
console.log('li');

for (let i=0; i < li.length; i++){
    li[i].style.color = 'skyblue';
}

var items = document.getElementsByClassName('list-group-item');
for (let i=0; i < items.length; i++){
    items[i].style.fontWeight = 'bold';
    items[i].style.backgroundColor = 'green';
}