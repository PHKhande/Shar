

const todo = document.getElementById('todo');
const showIt = document.getElementById('show');
const postIt = document.getElementById('todoBtn');

const show = async (e) => {
  try {
    e.preventDefault();
    const response = await axios.get("https://crudcrud.com/api/54d378d4881f427e8b01ecaef9afc43e/todo");
    console.log(response);
  } catch(err) {
    console.error(err);
  }
}

const pos = async (e) => {
  try {
    const newTodo = {
      id: new Date().toISOString(),
      text: todo.value
    }

    e.preventDefault();
    const response = await axios.post("https://crudcrud.com/api/54d378d4881f427e8b01ecaef9afc43e/todo", newTodo);
    console.log(response);
  } catch(err) {
    console.error(err);
  }
}

showIt.addEventListener("click", show);
postIt.addEventListener("click", pos);
