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

// var items = document.querySelector('.list-group');

// // parentElement
// items.parentNode.style.backgroundColor = 'orange';

// // lastelementchild
// items.lastElementChild.style.color = 'red'

// // lastchild
// items.lastChild.textContent = 'Considers last linebreak as lastChild';

// // firstelementchild
// items.firstElementChild.style.color = 'red'

// // firstchild
// items.firstChild.textContent = 'Considers first linebreak as firstChild';

// // nextsibling
// console.log(items.nextSibling)

// // nextelementsibling
// console.log(items.nextElementSibling);

// // previoussibling
// console.log(items.previousSibling);

// // previouselementsibling
// items.previousElementSibling.textContent = 'Item Names'

// createelement
// newDiv = document.createElement('div');
// newDiv.className = 'hello';
// newDiv.id = 'hello';
// // setAttribute
// newDiv.setAttribute("title", "Hello All");
// // createtextnode
// newText = document.createTextNode("Hello All!");
// // appendchild
// newDiv.appendChild(newText);
// container = document.querySelector("header .container");
// h1 = document.querySelector("header #header-title");
// container.insertBefore(newDiv, h1);


// newli = document.createElement('li');
// newli.className = 'list-group-item';
// newli.appendChild(newText);
// ul = document.querySelector("ul");
// li1 = document.querySelector(".list-group-item");
// ul.insertBefore(newli, li1);

var form = document.getElementById('addForm');
form.addEventListener('submit', additem);

var ul = document.querySelector("ul");
ul.addEventListener('click', removeItem);

var filter = document.getElementById('filter');
filter.addEventListener('keyup', filterItem);

//Adding item
function additem(e){
    e.preventDefault();

    var newItem = document.getElementById('item').value;
    var newDis = document.getElementById('descriptor').value;
    var li = document.createElement('li');
    li.className = 'list-group-item';   
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(" " + newDis));

    var delBtn = document.createElement('button');
    delBtn.className = 'btn btn-danger btn-sm float-right delete';
    delBtn.appendChild(document.createTextNode('X'));
    li.appendChild(delBtn);

    var edtBtn = document.createElement('button');
    edtBtn.className = 'btn btn-info btn-sm float-right edit';
    edtBtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(edtBtn);

    ul.appendChild(li);
}

//Removing item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            ul.removeChild(li);
        }
    }
}

//Filtering Items
function filterItem(e){
    //Converting filter text to lowercase
    var text = e.target.value.toLowerCase();

    //Get collection of li's
    var items = document.getElementsByTagName('li');

    //Convert that collection into an array
    Array.from(items).forEach( function(item) {
        var itemName = item.childNodes[0].textContent;
        var itemDesc = item.childNodes[1].textContent;
        if (itemDesc == 'X' || itemDesc == 'Edit'){
            itemDesc = '';
        }

        if (itemName.toLowerCase().indexOf(text) != -1 || itemDesc.toLowerCase().indexOf(text) != -1 ) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })


}

