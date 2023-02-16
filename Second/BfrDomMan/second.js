
function submitfunc(e){
    console.log('Name:' + document.getElementById('name').value)
    console.log('Email:' + document.getElementById('email').value)
    console.log('Phn:' + document.getElementById('phone').value)
    console.log('Date:' + document.getElementById('date').value)
    console.log('Time:' + document.getElementById('time').value)

    sessionStorage.setItem('Name', document.getElementById('name').value)
    sessionStorage.setItem('Email', document.getElementById('email').value)
    sessionStorage.setItem('Phn', document.getElementById('phone').value)
    sessionStorage.setItem('Date', document.getElementById('date').value)
    sessionStorage.setItem('Time', document.getElementById('time').value)

}