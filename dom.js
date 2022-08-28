//console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);

document.title = "Hotel Items";

// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);

document.all[18].textContent = "Hello, Menu List";

// console.log(document.forms);
// console.log(document.links);



var header = document.getElementById('main-header');
header.style.borderBottom = 'solid 3px #000';

var items = document.getElementsByClassName('title');
console.log(items);
items[0].style.color = 'green';
items[0].style.fontWeight = 'bold';