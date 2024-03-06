import PropTypes from 'prop-types';

import { useState } from 'react';

const Todo = ({ todo, onDelete, onComplete, onUpdate }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(todo.task);

  const toggleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleInputChange = (e) => {
    setUpdatedTask(e.target.value);
  };

  const handleSubmitUpdate = (e) => {
    e.preventDefault();
    onUpdate(todo._id, updatedTask); // Call update function from parent
    toggleEdit(); // Close edit mode
  };

  return (
    <div className="todo">
      {isEdit ? (
        <form onSubmit={handleSubmitUpdate}>
          <input
            type="text"
            value={updatedTask}
            onChange={handleInputChange}
          />
          <button type="submit">Update</button> 
          <button type="button" onClick={toggleEdit}>Cancel</button> 
        </form>
      ) : (
        <div>
          <h3>{todo.task}</h3>
          <p>{todo.completed ? 'Completed' : 'Not Completed'}</p>
          <button className='btn' onClick={() => onDelete(todo._id)}>Delete</button>
          <button onClick={() => onComplete(todo._id)}>Toggle Complete</button>
          <button onClick={toggleEdit}>Edit</button> 
        </div>
      )}
    </div>
  );
};

Todo.propTypes = {
  todo: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    task: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired
};
export default Todo;