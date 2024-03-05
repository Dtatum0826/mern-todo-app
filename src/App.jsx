import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';

import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  
  return (
    <div className="App">
      <h1>My Todo List</h1>
      <AddTodoForm /> 
      <TodoList todos={todos} />
    </div>
  );
}

export default App;