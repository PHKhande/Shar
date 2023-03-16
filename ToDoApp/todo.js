window.addEventListener("DOMContentLoaded", async () => {
    try{
        const allItems = await axios.get("http://localhost:4000/todo/items");
        // console.log(allItems.data);        
        for (let i = 0; i < allItems.data.allToDoItems.length; i++){
            todoDetails(allItems.data.allToDoItems[i]);
        }

        const completedItems = await axios.get("http://localhost:4000/completed/items");
        // console.log(allItems.data);        
        for (let i = 0; i < completedItems.data.allCompletedItems.length; i++){
            doneItems(completedItems.data.allCompletedItems[i]);
        }
    }
    catch (err) {
        console.log(err);
        document.body.innerHTML += `<h4> Something went wrong</h4>`
    }
})


const add = document.getElementById('addItemBtn');
add.addEventListener('click', addItem);

async function addItem(e) {
    try{
        e.preventDefault();
        const item = document.getElementById('todoItem').value;
        const descp = document.getElementById('todoDescp').value;
    
        const todo = {
            item,
            descp
        };
        const addedToDo = await axios.post('http://localhost:4000/todo/add', todo);
        todoDetails(addedToDo.data.newAddedItem);
    }
    catch (err) {
        console.log(err);
        document.body.innerHTML += `<h4> Something went wrong</h4>`
    }
}

function todoDetails(obj) {
    const parentElem = document.getElementById('todoItems');
    const newChild = document.createElement('li');
    newChild.textContent = obj.item + " " + obj.description + " ";
    newChild.className = "list-group-item text-dark";

    const doneBtn = document.createElement('button');
    doneBtn.className = 'btn btn-info edit';
    doneBtn.appendChild(document.createTextNode(" Done!! "));
    newChild.appendChild(doneBtn);
    parentElem.appendChild(newChild);

    doneBtn.onclick = async() => {
        try{
            await axios.delete(`http://localhost:4000/completed/${obj.id}`);
            parentElem.removeChild(newChild);
            doneItems(obj);
        }
        catch (err) {
            console.log(err);
            document.body.innerHTML += `<h4> Something went wrong</h4>`
        }
    }
    
}

function doneItems(obj){
    const doneParenElem = document.getElementById('doneItems');
    const doneChildElem = document.createElement('li');
    doneChildElem.textContent = obj.item + " " + obj.description + " ";
    doneChildElem.className = "list-group-item text-dark";

    const delBtn = document.createElement('button');
    delBtn.className = 'btn btn-danger edit';
    delBtn.appendChild(document.createTextNode(" Delete "));
    doneChildElem.appendChild(delBtn);
    doneParenElem.appendChild(doneChildElem);

    delBtn.onclick = async() => {
        try{
            await axios.delete(`http://localhost:4000/delete/${obj.id}`);
            doneParenElem.removeChild(doneChildElem);
        }
        catch (err) {
            console.log(err);
            document.body.innerHTML += `<h4> Something went wrong</h4>`
        }
    }
}