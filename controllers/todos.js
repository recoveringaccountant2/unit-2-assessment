const Todo = require('../data/todo');

module.exports = {
    index,
    create,
    delete: deleteTodo,
};
  
function index(req, res) {
    const x = Todo.getAll()
    console.log(x)
    res.render('todos/index', {
    todos:x,
    // time: req.time
    });
}

function create(req, res) {
    console.log(req.body);
    req.body.done = false;
    Todo.create(req.body);
    res.redirect('/todos');
};
    
function deleteTodo(req, res) {
    Todo.deleteOne(req.params.id);
    res.redirect('/todos');
}
  