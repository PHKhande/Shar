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

blogs = []
function updateLastUserActivityTime(){
    return new Promise( function (res) {
        setTimeout(function () {
            const tim = new Date().getTime();
            res(tim)
        }, 1000)
    })
}

function createPost(post) {
    return new Promise( (resolve) => {
        blogs.push(post);
        resolve(blogs);
    }) 
}


Promise.all(
    [
        createPost("ABC"), updateLastUserActivityTime()
    ],
    [
        createPost("DEF"), updateLastUserActivityTime()
    ]
).then(
    (values) => {
        console.log(values)
    }
)












