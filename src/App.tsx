import React from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoTemplate from './component/ToDoTemplate';
import ToDoInsert from './component/ToDoInsert';
import TodoList from './component/TodoList';
import ToDoEdit from './component/ToDoEdit';
import { TodoItem } from './types';

function App() {
  const editToggle:Boolean = false;

  const todos:TodoItem[] = [
    {
      id:1, 
      text:"운동하기", 
      checked:false
    }
  ]
  return (
    <div className="App">
      <ToDoTemplate>
        <ToDoInsert></ToDoInsert>
        <TodoList todos={todos}></TodoList>
        { editToggle && 
        <ToDoEdit></ToDoEdit>}
      </ToDoTemplate>
    </div>
  );
}

export default App;
