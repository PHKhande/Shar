
const btn = document.querySelector('.btn');

btn.addEventListener('mouseover', (e) => {
    document.querySelector('body').classList.add('bg-dark');
});

btn.addEventListener('mouseout', (e) => {
    btn.style.background = 'red';
});

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {

    //storing locally as an object
    const userDetails = {
      Name : nameInput.value,
      Email : emailInput.value
    };
    let serialize = JSON.stringify(userDetails);
    localStorage.setItem(userDetails.Email, serialize);

    if(localStorage.getItem(emailInput.value) !== null){
      removeUser(emailInput.value);
    }
    newUser(nameInput.value, emailInput.value);
  }
  nameInput.value = '';
  emailInput.value = '';
}

function newUser(localName, localEmail){
  const li = document.createElement('li');
  const bt1 = document.createElement("button");
  bt1.setAttribute('id', `ed+${localEmail}`);
  bt1.innerHTML = 'EDIT';
  const bt2 = document.createElement("button");
  bt2.innerHTML = 'DEL';
  bt2.setAttribute('id', `de+${localEmail}`);
  li.setAttribute('id', localEmail)

  li.appendChild(document.createTextNode(`${localName}: ${localEmail}`));
  li.appendChild(bt1);
  li.appendChild(bt2);

  bt1.addEventListener('click', editUser);
  bt2.addEventListener('click', delUser);
  userList.appendChild(li);
}

//userList.addEventListener('click', editUser());
//userList.addEventListener('click', delUser());



function removeUser(localEmail){
  let rem = document.getElementById(localEmail)
  userList.removeChild(rem);
}

  function showUserOnScreen() {
    Object.keys(localStorage).forEach((key) => {
      stringifiedDetailsOfPeople = localStorage.getItem(key);
      deserialized = JSON.parse(stringifiedDetailsOfPeople);
      newUser(deserialized.Name, deserialized.Email);
      });
  }

  showUserOnScreen();

function editUser(){

}

function delUser(){

}
