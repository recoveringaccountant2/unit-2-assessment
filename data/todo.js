const todos = [{
    id: 1,
    todo: "String", 
    done: false
}];

module.exports = {
    getAll,
    getOne,
    deleteOne,
    create
};

function getAll() {
  return todos;
}

function getOne(id) {
  return todos.find(todo => todo.id === parseInt(id));
}

function deleteOne(id) {
  const idx = todos.findIndex(todo => todo.id === parseInt(id));
  todos.splice(idx, 1);
}

function create(todo) {
  todo.id = Date.now() % 1000000;
  todo.done = false;
  todos.push(todo);
}
