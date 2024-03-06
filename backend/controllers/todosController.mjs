import Todo from '../models/Todo.mjs'


// @route GET api/todos
// @desc Get all todos
export const  getTodos = async (req, res) => {
  try {
      const todos = await Todo.find();
      res.json(todos);
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
}

// @route POST api/todos
// @desc Create a todo
export const  createTodo = async (req, res) => {
const newTodo = new Todo(req.body);
console.log(newTodo)
try {
    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
} catch (err) {
    res.status(400).json({ message: err.message });
}
}


// @route PUT api/todos/:id
// @desc Update a todo by ID
export const  updateTodo = async (req, res) => {
try {
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedTodo);
    console.log(updatedTodo)
} catch (err) {
    res.status(400).json({ message: err.message });
}
}

// @route DELETE api/todos/:id
// @desc Delete a todo by ID
export const  deleteTodo = async (req, res) => {
try {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: 'Todo deleted successfully' });
} catch (err) {
    res.status(500).json({ message: err.message });
}
};
