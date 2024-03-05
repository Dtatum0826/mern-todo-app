
import  { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    const getTodos = async () => {
      // Replace with actual fetch request
      setTodos([
        { id: 1, text: 'Finish coding project', completed: false },
        { id: 2, text: 'Walk the dog', completed: true },
      ]);
    };

    getTodos();
  }, []);

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: todos.length + 1, // Generate unique ID for new todo
      text: text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setText(''); // Clear input field after adding todo
  };

  return (
    <div className="todo-list">
      <h2>Todo List</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onDelete={handleDelete}
          onComplete={handleComplete}
        />
      ))}
    </div>
  );
};
TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired
};


export default TodoList;
