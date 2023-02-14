var mainHeader = document.getElementById('main-header');
mainHeader.style.border = 'solid 3px #000'

var additem = document.getElementsByClassName('title')[0]
additem.style.fontWeight = 'bold';
additem.style.color = 'green';

// var allitems = document.getElementsByClassName('list-group-item');
// allitems[2].style.backgroundColor = 'green';

// for (i = 0; i < allitems.length; i++) {
//     allitems[i].style.fontWeight = 'bold';
// }

var liitems = document.getElementsByTagName('li');
liitems[2].style.backgroundColor = 'green';

for (i = 0; i < liitems.length; i++) {
    liitems[i].style.fontWeight = 'bold';
}