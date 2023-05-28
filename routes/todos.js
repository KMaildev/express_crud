var express = require('express');
const todos = require("../controller/ToDoController");
var router = express.Router();

router.get('/', todos.getAllToDos);
router.post('/', todos.createTodo);
router.delete('/:id', todos.deleteTodo);
router.put('/:id', todos.updateTodo);
router.get('/completed', todos.getAllCompletedToDos);

module.exports = router;