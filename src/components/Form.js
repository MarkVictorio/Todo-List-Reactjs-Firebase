import React, { useState } from 'react';
import firebase from '../util/firebase';
import '../App.css';

export default function Form() {
  const [title, setTitle] = useState('');

  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };
  const createTodo = () => {
    const todoRef = firebase.database().ref('Todo');
    const timeInit = Date.now();
    const todo = {
      title,
      complete: false,
      timeInit,
      timeDone: null
    };

    todoRef.push(todo);
  };

  return (
    <div>
      <div className="to-do-form">
        <input className="input" type="text" onChange={handleOnChange} value={title} />
        <button className="button" onClick={createTodo}>Add Todo</button>
      </div>
      
    </div>
  );
}
