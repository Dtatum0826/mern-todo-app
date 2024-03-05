import PropTypes from 'prop-types';

const Todo = ({ todo }) => {
  return (
    <div className="todo">
      <input type="checkbox" checked={todo.completed} />
      <label>{todo.text}</label>
      <button>Delete</button>
    </div>
  );
};
Todo.propTypes = {
  todo: PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired
};
export default Todo;