
var subBtn =  document.getElementById("btnSubmit");
subBtn.addEventListener('click',submitfunc);

async function submitfunc(e) {
    try{
        e.preventDefault();
        const Amount = document.getElementById('expenseAmount').value
        const Category= document.getElementById('expenseCategory').value
        const Description = document.getElementById('expenseDescription').value
    
        const obj = {
            Amount,
            Category,
            Description
        }
        lastExpense = await axios.post('http://localhost:4000/expense/add', obj);
        // expenseDetails(lastExpense);
    }
    catch (err) {
        console.log(err);
        document.body.innerHTML += `<h4> Something went wrong</h4>`
    }


    // function expenseDetails(obj){
    //     var parentElem = document.getElementById('expenseDetailsUl');
    //     var newli = document.createElement('li');
    //     newli.textContent = obj.Category + "-" + obj.Description + "-" + obj.Amount;
    //     newli.className = "list-group-item";

    //     var editBtn = document.createElement('button');
    //     editBtn.id = 'edtBtn';
    //     editBtn.className = 'btn btn-success edit';
    //     editBtn.appendChild(document.createTextNode(" Edit Expense "));
    //     newli.appendChild(editBtn)

    //     var delBtn = document.createElement('button');
    //     delBtn.id = 'DelBtn';
    //     delBtn.className = 'btn btn-danger delete';
    //     delBtn.appendChild(document.createTextNode(" Delete Expense "));
    //     newli.appendChild(delBtn)

    //     parentElem.appendChild(newli);

    //     editBtn.onclick = () => {
    //         let editObj = JSON.parse(localStorage.getItem(obj.Amount));

    //         document.getElementById('expenseAmount').value = editObj.Amount
    //         document.getElementById('expenseCategory').value = editObj.Category
    //         document.getElementById('expenseDescription').value = editObj.Description

    //         localStorage.removeItem(obj.Amount);
    //         parentElem.removeChild(newli);
    //     }

    //     delBtn.onclick = () => {
    //         localStorage.removeItem(obj.Amount);
    //         parentElem.removeChild(newli);
    //     }

    // }
}