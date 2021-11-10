import React from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1>To-do List</h1>
        <Form />
        <TodoList />
      </div>
  
    </div>
  );
}
