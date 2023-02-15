// var mainHeader = document.getElementById('main-header');
// mainHeader.style.border = 'solid 3px #000'

// var additem = document.getElementsByClassName('title')[0]
// additem.style.fontWeight = 'bold';
// additem.style.color = 'green';

// var allitems = document.getElementsByClassName('list-group-item');
// allitems[2].style.backgroundColor = 'green';

// for (i = 0; i < allitems.length; i++) {
//     allitems[i].style.fontWeight = 'bold';
// }

// var item2 = document.querySelector('.list-group-item:nth-child(2)');
// var item3 = document.querySelector('.list-group-item:nth-child(3)');

// item2.style.backgroundColor = 'green';
// item3.style.display = 'None';

// var items = document.querySelectorAll('.list-group-item');
// items[1].style.color = 'red';

// var odditems = document.querySelectorAll('.list-group-item:nth-child(odd)');
// for (i = 0; i < odditems.length; i++){
//     odditems[i].style.backgroundColor = 'green';
// }

var items = document.querySelector('.list-group');

// parentElement
items.parentNode.style.backgroundColor = 'orange';

// lastelementchild
items.lastElementChild.style.color = 'red'

// lastchild
items.lastChild.textContent = 'Considers last linebreak as lastChild';

// firstelementchild
items.firstElementChild.style.color = 'red'

// firstchild
items.firstChild.textContent = 'Considers first linebreak as firstChild';

// nextsibling
console.log(items.nextSibling)

// nextelementsibling
console.log(items.nextElementSibling);

// previoussibling
console.log(items.previousSibling);

// previouselementsibling
items.previousElementSibling.textContent = 'Item Names'

// createelement
newDiv = document.createElement('div');
newDiv.className = 'hello';
newDiv.id = 'hello';

// setAttribute
newDiv.setAttribute("title", "Hello All");

// createtextnode
newText = document.createTextNode("Hello All!");

// appendchild
newDiv.appendChild(newText);

container = document.querySelector("header .container");
h1 = document.querySelector("header #header-title");

container.insertBefore(newDiv, h1);

//<li class="list-group-item">Item 1</li>

newli = document.createElement('li');
newli.className = 'list-group-item';
newli.appendChild(newText);

ul = document.querySelector("ul");
li1 = document.querySelector(".list-group-item");

ul.insertBefore(newli, li1);



