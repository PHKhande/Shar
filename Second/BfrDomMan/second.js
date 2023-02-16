

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

    var editBtn = document.createElement('button');
    editBtn.id = 'btn';
    editBtn.className = 'btn btn-info edit';
    editBtn.appendChild(document.createTextNode(" Edit "));
    newli.appendChild(editBtn)
    parentElem.appendChild(newli)

    editBtn.onclick = () => {
        let editObj = localStorage.getItem(obj.Email);

        document.getElementById('name').value = JSON.parse(editObj).Name
        document.getElementById('email').value = JSON.parse(editObj).Email
        document.getElementById('phone').value = JSON.parse(editObj).Phn
        document.getElementById('date').value = JSON.parse(editObj).Date
        document.getElementById('time').value = JSON.parse(editObj).Time

        localStorage.removeItem(obj.Email);
        parentElem.removeChild(newli)
    }


    var delBtn = document.createElement('button');
    delBtn.id = 'btn';
    delBtn.className = 'btn btn-danger delete';
    delBtn.appendChild(document.createTextNode(" Delete "));
    newli.appendChild(delBtn)
    parentElem.appendChild(newli)

    delBtn.onclick = () => {
        localStorage.removeItem(obj.Email);
        parentElem.removeChild(newli)
    }

}
}
