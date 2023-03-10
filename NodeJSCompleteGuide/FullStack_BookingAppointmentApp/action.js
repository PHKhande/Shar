window.addEventListener("DOMContentLoaded", () => {
    axios.get("http://localhost:4000/users")
    .then( (response) => {
        // console.log(response.data.allUsersfromDB);
        for (let i = 0; i < response.data.allUsersfromDB.length; i++){
            showUserOnScreen(response.data.allUsersfromDB[i])
        }
    })
    .catch(err => console.log(err))
})


var subBtn =  document.getElementById("buttonSubmit");
subBtn.addEventListener('click',submitfunc);


function submitfunc(e){
    e.preventDefault();
    const Name = document.getElementById('name').value
    const Email = document.getElementById('email').value
    const Phn = document.getElementById('phone').value

    const obj = {
        Name,
        Email,
        Phn
    }

    
    axios.post('http://localhost:4000/user/add', obj)
    .then((response) => {
        // console.log(typeof(response.data.newUserData))
        showUserOnScreen(response.data.newUserData)
    })
    .catch(err => {
        console.log(err);
        document.body.innerHTML += `<h4> Something went wrong</h4>`
    })
        
}

function showUserOnScreen(obj){
    var parentElem = document.getElementById('listOfUsers');
    var newli = document.createElement('li');
    newli.textContent = obj.name + " " + obj.email + " " + obj.phnnumber 

    var editBtn = document.createElement('button');
    editBtn.id = 'btn';
    editBtn.className = 'btn btn-info edit';
    editBtn.appendChild(document.createTextNode(" Edit "));
    newli.appendChild(editBtn)
    parentElem.appendChild(newli)

    editBtn.onclick = () => {

        document.getElementById('name').value = obj.name
        document.getElementById('email').value = obj.email
        document.getElementById('phone').value = obj.phnnumber

        axios.delete(`http://localhost:4000/user/${obj.id}`)
        .then((response) => {
        console.log('successfull')
        })
        .catch( err => {
        console.log(err)
        })
        parentElem.removeChild(newli);
    }


    var delBtn = document.createElement('button');
    delBtn.id = 'btn';
    delBtn.className = 'btn btn-danger delete';
    delBtn.appendChild(document.createTextNode(" Delete "));
    newli.appendChild(delBtn)
    parentElem.appendChild(newli)

    delBtn.onclick = () => {
        axios.delete(`http://localhost:4000/user/${obj.id}`)
        .then((response) => {
            console.log(response.data)
            console.log('successfull')
        })
        .catch( err => {
            console.log(err)
        })
        parentElem.removeChild(newli)
    }

}
