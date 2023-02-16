
function submitfunc(e){

    let infoObj = {
        'Name' : document.getElementById('name').value,
        'Email': document.getElementById('email').value,
        'Phn': document.getElementById('phone').value,
        'Date': document.getElementById('date').value,
        'Time': document.getElementById('time').value
    }

    let objStr = JSON.stringify(infoObj)
    localStorage.setItem("info", objStr);
}