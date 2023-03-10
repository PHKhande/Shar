window.addEventListener("DOMContentLoaded", async () => {
    try{
        const allExpenses = await axios.get("http://localhost:4000/expenses");
        // console.log(allExpenses.data.allExpensesfromDB);
        for (let i = 0; i < allExpenses.data.allExpensesfromDB.length; i++){
            // console.log(allExpenses.data.allExpensesfromDB[i])
            expenseDetails(allExpenses.data.allExpensesfromDB[i]);
        }
    }
    catch (err) {
        console.log(err);
        document.body.innerHTML += `<h4> Something went wrong</h4>`
    }
})


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
        const lastExpense = await axios.post('http://localhost:4000/expense/add', obj);
        // console.log(typeof(lastExpense.data.newUserData), lastExpense.data)
        
        expenseDetails(lastExpense.data.newExpenseData);
    }
    catch (err) {
        console.log(err);
        document.body.innerHTML += `<h4> Something went wrong</h4>`
    }
}

function expenseDetails(obj){
    var parentElem = document.getElementById('expenseDetailsUl');
    var newli = document.createElement('li');
    newli.textContent = obj.category + "-" + obj.desc + "-" + obj.expAmt;
    newli.className = "list-group-item";

    var editBtn = document.createElement('button');
    editBtn.id = 'edtBtn';
    editBtn.className = 'btn btn-success edit';
    editBtn.appendChild(document.createTextNode(" Edit Expense "));
    newli.appendChild(editBtn)

    var delBtn = document.createElement('button');
    delBtn.id = 'DelBtn';
    delBtn.className = 'btn btn-danger delete';
    delBtn.appendChild(document.createTextNode(" Delete Expense "));
    newli.appendChild(delBtn)

    parentElem.appendChild(newli);

    editBtn.onclick = async() => {
        try{
            document.getElementById('expenseAmount').value = obj.expAmt
            document.getElementById('expenseCategory').value = obj.category
            document.getElementById('expenseDescription').value = obj.desc
        
            await axios.delete(`http://localhost:4000/expense/${obj.id}`);
            parentElem.removeChild(newli);
        }
        catch (err) {
            console.log(err);
            document.body.innerHTML += `<h4> Something went wrong</h4>`
        }
    }

    delBtn.onclick = async() => {
        try{
            await axios.delete(`http://localhost:4000/expense/${obj.id}`);
            parentElem.removeChild(newli);
        }
        catch (err) {
            console.log(err);
            document.body.innerHTML += `<h4> Something went wrong</h4>`
        }
        
    }

}