

var subBtn =  document.getElementById("buttonSubmit");
subBtn.addEventListener('click',submitfunc);


function submitfunc(e){
    e.preventDefault();
    const Name = document.getElementById('name').value
    const Email = document.getElementById('email').value
    const Phn = document.getElementById('phone').value
    const Date = document.getElementById('date').value
    const Time = document.getElementById('time').value

    const obj = {
        Name,
        Email,
        Phn,
        Date,
        Time
    }
    
    localStorage.setItem(obj.Email, JSON.stringify(obj));
    showUserOnScreen(obj);


function showUserOnScreen(obj){
    var parentElem = document.getElementById('listOfUsers');
    var newli = document.createElement('li');
    newli.textContent = obj.Name + " " + obj.Email + " " + obj.Phn + " " + obj.Date +  " " + obj.Time

    var newBtn = document.createElement('button');
    newBtn.id = 'btn';
    newBtn.className = 'btn btn-danger delete';
    newBtn.appendChild(document.createTextNode("Delete"));
    newli.appendChild(newBtn)
    parentElem.appendChild(newli)

    newBtn.onclick = () => {
        localStorage.removeItem(obj.Email);
        parentElem.removeChild(newli)
    }
}
}







//     var newBtn = document.createElement('button');
//     newBtn.id = 'btn';
//     newBtn.className = 'btn btn-danger delete';
//     newBtn.appendChild(document.createTextNode("Delete"));
    
//     newli.appendChild(document.createTextNode(document.getElementById('name').value  + " "  ));
//     var email = document.createTextNode(document.getElementById('email').value)
//     newli.appendChild(email);
//     newli.appendChild(document.createTextNode(" " + document.getElementById('phone').value + " "));
//     newli.appendChild(newBtn);

//     newDiv.childNodes[1].appendChild(newli);


//     var lidel = document.getElementById('infoli');
//     lidel.addEventListener('click', deleteItem);
//     var ul = document.querySelector('#newul');
    
//     function deleteItem(e){
//         if(e.target.classList.contains('delete')){
//             var li = e.target.parentElement;
//             console.log(li.childNodes)
//             newDiv.childNodes[1].removeChild(li);
//             localStorage.removeItem('li.childNodes');

//         }
//     }
    
// }


