import React,{ useState } from 'react';
import firebase from '../util/firebase';
import '../App.css';

export default function Todo({ todo }) {
  const [title, setTitle] = useState('');

  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };
  const deleteTodo = () => {
    const todoRef = firebase.database().ref('Todo').child(todo.id);
    todoRef.remove();
  };
  const completeTodo = () => {
    const todoRef = firebase.database().ref('Todo').child(todo.id);
    var timeFinished = Date.now();
    todoRef.update({
      complete: !todo.complete,
      timeDone: timeFinished
    });
  };
  const editTodo = () => {
    const todoRef = firebase.database().ref('Todo').child(todo.id);
    todoRef.update({
      title: title
    });
  };


  return (
    <div className="to-do-containter">
      <div className = "Functions">
        <div className = "titler">
          <input className={todo.complete ? 'complete' : ''} type="text" onChange={handleOnChange} value={title} 
          placeholder = {todo.title}></input>
        </div>
        <button className="button" onClick={editTodo}>Edit</button>
        <button className="button" onClick={deleteTodo}>Delete</button>
        <button className="button" onClick={completeTodo}>Complete</button>
      </div>
      
      <div className="times">
        <p className="time">{"Time Started: " + new Date(todo.timeInit).toLocaleTimeString()}</p>
        <p className="time">{todo.complete ? "Time Finished: " + new Date(todo.timeDone).toLocaleTimeString() : ''}</p>
        <p className="time">{todo.complete ?  "Duration: " + ((todo.timeDone - todo.timeInit) / 1000) + " Seconds" : ''}</p>
      </div>
    </div>
  );
}
