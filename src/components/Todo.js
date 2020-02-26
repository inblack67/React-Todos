import React from 'react';

const Todo = ({todo, index, completeTodo, incompleteTodo, deleteTodo}) => {

  return (
    <ul className="collection">
      <li className="collection-item" style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }} >{todo.text} 
      
      <button className="btn green right" onClick={() => completeTodo(index)}>
        Complete
      </button>

      <button className="btn grey right" onClick={() => incompleteTodo(index)}>
        Incomplete
      </button>

      <button className="btn red right" onClick={() => deleteTodo(index)}>
        Delete
      </button>

      </li>
    </ul>
  )
}

export default Todo
