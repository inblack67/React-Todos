import React, {useState} from 'react';

const TodoForm = ({addTodo, completeTodo, index}) => {

  const [value, setValue] = useState('');

  const onChange = (e) => {

    setValue(e.target.value);
  }

  const onSubmit = (e) => {

    e.preventDefault();

    if(!value) return;

    addTodo(value);
    setValue('');   // clear the form out after addition

  }

  return (
    <form onSubmit={onSubmit}>
      <div className="input-field">
        <input type="text" className="validate" value={value} onChange={onChange}/>
        <label htmlFor="todo">New Todo</label>
      </div>
      <div className="input-field">
        <input type="submit" value="Add" className="btn red"/>
      </div>
    </form>
  )
}

export default TodoForm;
