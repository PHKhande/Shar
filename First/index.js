// const ul = document.querySelector('.items');

// //ul.remove();
// //ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello';
// ul.firstElementChild.style.color = 'green';
// ul.children[0].style.background = 'grey';

// ul.children[1].innerText = 'Brad';
// ul.children[1].style.color = 'yellow';
// ul.children[1].style.background = 'grey';

// ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

// const btn = document.querySelector('.btn');
// btn.style.background = 'red';

const btn = document.querySelector('.btn');

btn.addEventListener('mouseover', (e) => {
    document.querySelector('body').classList.add('bg-dark');
    // document.querySelector('.items').children[0].innerText = 'MouseOver';
    // document.querySelector('.items').children[1].innerText = 'MouseOver';
    // document.querySelector('.items').children[2].innerText = 'MouseOver';
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

    //storing locally
    localStorage.setItem('Name', nameInput.value);
    localStorage.setItem('Email', emailInput.value);

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


//local storge
// localStorage.setItem('name','Bob');
// console.log(localStorage.getItem('name'));
// localStorage.removeItem('name');

// sessionStorage.setItem('name','Bob');
// sessionStorage.removeItem('name');

//document.cookie = 'name=Kyle; expires=' + new Date(2022, 0, 1).toUTCString();
