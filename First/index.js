
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
  li.setAttribute('id', localEmail)
  li.appendChild(document.createTextNode(`${localName}: ${localEmail}`));
  userList.appendChild(li);
}

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
