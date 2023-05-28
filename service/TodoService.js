let Todos = require('../model/ToDo');

async function getAllToDos() {
    return Todos.find();
}

async function saveTodo(todo) {
    let newToDo = new Todos(todo);
    return newToDo.save();
}

async function deleteTodo(todoId) {
    let deletedTodo = await Todos.findByIdAndDelete(todoId);
    return deletedTodo;
}

async function updateTodo(todoId, todo) {
    let updateTodo = await Todos.findByIdAndUpdate(todoId, todo, { new: true });
    return updateTodo;
}

async function getAllCompletedToDos() {
    return Todos.find({
        completed: true
    });
}

module.exports = {
    getAllToDos,
    saveTodo,
    deleteTodo,
    updateTodo,
    getAllCompletedToDos,
}