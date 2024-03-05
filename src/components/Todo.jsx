import PropTypes from 'prop-types';


const Todo = ({ todo, onDelete, onComplete }) => {
  return (
    <div className="todo">
      <h3>{todo.text}</h3>
      <p>{todo.completed ? 'Completed' : 'Not Completed'}</p> 
      <button onClick={() => onDelete(todo.id)}>Delete</button>
      <button onClick={() => onComplete(todo.id)}>Toggle Complete</button>
    </div>
  );
};
Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired
};
export default Todo;