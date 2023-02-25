window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/847a4d82e99e424f9552180039d0f53b/appointmentData")
    .then( (response) => {
        for (let i = 0; i < response.data.length; i++){
            showUserOnScreen(response.data[i])
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
    const Date = document.getElementById('date').value
    const Time = document.getElementById('time').value

    const obj = {
        Name,
        Email,
        Phn,
        Date,
        Time
    }
    
    axios.post("https://crudcrud.com/api/847a4d82e99e424f9552180039d0f53b/appointmentData", obj)
    .then((response) => {
        showUserOnScreen(response.data)
    })
    .catch(err => {
        console.log(err);
        document.body.innerHTML += `<h4> Something went wrong</h4>`
    })
        
}

function showUserOnScreen(obj){
    var parentElem = document.getElementById('listOfUsers');
    var newli = document.createElement('li');
    newli.textContent = obj.Name + " " + obj.Email + " " + obj.Phn + " " + obj.Date +  " " + obj.Time

    var editBtn = document.createElement('button');
    editBtn.id = 'btn';
    editBtn.className = 'btn btn-info edit';
    editBtn.appendChild(document.createTextNode(" Edit "));
    newli.appendChild(editBtn)
    parentElem.appendChild(newli)

    editBtn.onclick = () => {



        // let editObj = localStorage.getItem(obj.Email);

        document.getElementById('name').value = obj.Name
        document.getElementById('email').value = obj.Email
        document.getElementById('phone').value = obj.Phn
        document.getElementById('date').value = obj.Date
        document.getElementById('time').value = obj.Time

        axios.delete(`https://crudcrud.com/api/847a4d82e99e424f9552180039d0f53b/appointmentData/${obj._id}`)
        .then((response) => {
            console.log(response)
            console.log('successfull')
        })
        .catch( err => {
            console.log(err)
        })
        // localStorage.removeItem(obj.Email);
        parentElem.removeChild(newli)
    }


    var delBtn = document.createElement('button');
    delBtn.id = 'btn';
    delBtn.className = 'btn btn-danger delete';
    delBtn.appendChild(document.createTextNode(" Delete "));
    newli.appendChild(delBtn)
    parentElem.appendChild(newli)

    delBtn.onclick = () => {
        axios.delete(`https://crudcrud.com/api/847a4d82e99e424f9552180039d0f53b/appointmentData/${obj._id}`)
        .then((response) => {
            console.log(response)
            console.log('successfull')
        })
        .catch( err => {
            console.log(err)
        })
        // localStorage.removeItem(obj.Email);
        parentElem.removeChild(newli)
    }

}
