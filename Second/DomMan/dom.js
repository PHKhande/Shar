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

var item2 = document.querySelector('.list-group-item:nth-child(2)');
var item3 = document.querySelector('.list-group-item:nth-child(3)');

item2.style.backgroundColor = 'green';
// item3.style.display = 'None';

var items = document.querySelectorAll('.list-group-item');
items[1].style.color = 'red';

var odditems = document.querySelectorAll('.list-group-item:nth-child(odd)');
for (i = 0; i < odditems.length; i++){
    odditems[i].style.backgroundColor = 'green';
}

