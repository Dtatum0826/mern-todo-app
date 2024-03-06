import  { useState, useEffect } from 'react';

import Todo from './Todo';


const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const url ="http://localhost:5000/api/todos"

  useEffect(() => {
    const getTodos = async () => {
      const response = await fetch(`${url}`); // Fetch from backend
      const data = await response.json();
      setTodos(data);
    };

    getTodos();
  }, []);

  
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${url}/${id}`, { method: 'DELETE' });
    
      if (response.ok) {
        setTodos(todos.filter((todo) => todo._id !== id));
      } else {
        console.error('Failed to delete todo:', response.statusText);
      }
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };
  

  const handleComplete = async (id) => {
    try {
      const updatedTodo = todos.find((todo) => todo._id === id); // Find the todo by id
      const updatedTodoData = { completed: !updatedTodo.completed };
     
      const response = await fetch(`${url}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedTodoData)
      });
      if (response.ok) {
        setTodos(todos.map((todo) => todo._id === id ? { ...todo, completed: !todo.completed } : todo));
      }
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };
  const handleUpdate = async (id, newTask) => {
    const updatedTodoData = { task: newTask };

    try {
      const response = await fetch(`${url}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedTodoData)
      });

      if (response.ok) {
        setTodos(todos.map((todo) => todo._id === id ? { ...todo, task: newTask } : todo));
      }
    } catch (error) {
      console.error("Error updating task: ", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTodo = {
        task: text,
        completed: false,
    };

    try {
        const response = await fetch(`${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTodo)
        });

        const data = await response.json();
        setTodos([...todos, data]);
        setText(''); 
    } catch (error) {
        console.error("Error adding todo:", error);
    }
};


  return (
    <div className="todo-list">
    <div className="form-container"> {/* Wrap form and title in a container */}
     
      <form onSubmit={handleSubmit} className="form"> {/* Add a class for form */}
        <input
          type="text"
          placeholder="Add a todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
   
    <div className="columns-container"> {/* Wrap columns in a container */}
        <div className="column left">
          <h2 className='title' >ToDo</h2>
          {todos.filter((todo) => !todo.completed).map((todo) => (
            <Todo
              key={todo._id}
              todo={todo}
              onDelete={handleDelete}
              onComplete={handleComplete}
              onUpdate={handleUpdate}
            />
          ))}
        </div>
        <div className="column right">
          <h2 className='title' >Done</h2>
          {todos.filter((todo) => todo.completed).map((todo) => (
            <Todo
              key={todo._id}
              todo={todo}
              onDelete={handleDelete}
              onComplete={handleComplete}
              onUpdate={handleUpdate}
            />
          ))}
        </div>
      </div>
  </div>
);
};



export default TodoList;
