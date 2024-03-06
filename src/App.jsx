import './App.css'
import TodoList from './components/TodoList';

const App = () => {
 
  return (
    <div className="container">
      <h1 >MERN Todo App</h1>
      <TodoList  />
    </div>
  );
};

export default App;