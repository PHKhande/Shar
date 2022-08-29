
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


    console.log(`Name is ${nameInput.value} and email is ${emailInput.value}`);
    
    // Create new list item with user
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
    
    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;
    
    // Append to ul
    userList.appendChild(li);
    
    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}



Object.keys(localStorage).forEach((key) => {
  stringifiedDetailsOfPeople = localStorage.getItem(key);
  deserialized = JSON.parse(stringifiedDetailsOfPeople);

  let localName = deserialized.Name;
  let localEmail = deserialized.Email;
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(`${localName}: ${localEmail}`));
  userList.appendChild(li);
  });

