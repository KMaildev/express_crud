var todoService = require('./../service/TodoService');

async function getAllToDos(req, res, next) {
    let todos = await todoService.getAllToDos();
    res.json(todos);
};

async function createTodo(req, res, next) {
    console.log('ToDo Routers post ', req.body);
    try {
        const todo = await todoService.saveTodo(req.body);
        if (!todo) throw Error('Cannot save todo');
        await res.status(201).json(todo);

    } catch (err) {
        console.log(err);
        await res.status(400).json({ message: err })
    }
}


async function deleteTodo(req, res, next) {
    try {
        let todoId = req.params['id'];
        console.log('Id ', todoId, ' todo ', req.body)
        const todo = await todoService.deleteTodo(todoId);
        if (!todo) throw Error('Cannot delete todo');
        await res.status(200).json(todo);

    } catch (err) {
        console.log(err);
        await res.status(400).json({ message: err })
    }
}

async function updateTodo(req, res, next) {
    try {
        let todoId = req.params['id'];
        console.log('Id ', todoId, ' todo ', req.body)
        const todo = await todoService.updateTodo(todoId, req.body);
        if (!todo) throw Error('Cannot update todo');
        await res.status(200).json(todo);

    } catch (err) {
        console.log(err);
        await res.status(400).json({ message: err })
    }
}


async function getAllCompletedToDos(req, res, next) {
    let todos = await todoService.getAllCompletedToDos();
    res.json(todos);
};

module.exports = {
    getAllToDos,
    createTodo,
    deleteTodo,
    updateTodo,
    getAllCompletedToDos,
}