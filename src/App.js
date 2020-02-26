import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import './App.css';

function App() {

  const [todos, setTodos] = useState([
    {
      text: 'Learn Node',
      isCompleted: true
    },
    {
      text: 'Learn React',
      isCompleted: true
    },
    {
      text: 'Learn MERN Stack',
      isCompleted: false
    }
  ]);

  const addTodo = (text) => {

    const newTodo = [...todos, {text}];
    setTodos(newTodo);
  }
  const completeTodo = (index) => {
    const newTodo = [...todos];
    newTodo[index].isCompleted = true
    setTodos(newTodo);
  }

  const incompleteTodo = (index) => {
    const newTodo = [...todos];
    newTodo[index].isCompleted = false
    setTodos(newTodo);
  }

  const deleteTodo = (index) => {

    const newTodo = [...todos];
    newTodo.splice(index,1);
    setTodos(newTodo);
  }

  return (
    <div>
      <Navbar />
      <div className="container">

        <p className="flow-text">List</p>
      {todos.map((todo, index) => ( <Todo index={index} todo={todo} key={index} completeTodo={completeTodo} incompleteTodo={incompleteTodo} deleteTodo={deleteTodo} />))}

      <TodoForm addTodo={addTodo} />

      </div>
    </div>
  );
}

export default App;
