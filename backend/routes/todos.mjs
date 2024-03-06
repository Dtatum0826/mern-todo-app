
import express from 'express';
import * as todosController from '../controllers/todosController.mjs';
const router = express.Router();


// @route GET api/todos
// @desc Get all todos
router.get('/', todosController.getTodos); 


// @route POST api/todos
// @desc Create a todo
router.post('/', todosController.createTodo); 


// @route PUT api/todos/:id
// @desc Update a todo by ID
router.put('/:id', todosController.updateTodo);


// @route DELETE api/todos/:id
// @desc Delete a todo by ID
router.delete('/:id', todosController.deleteTodo);

export default router;
