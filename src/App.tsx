import React, { useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoTemplate from './component/ToDoTemplate';
import ToDoInsert from './component/ToDoInsert';
import TodoList from './component/TodoList';
import ToDoEdit from './component/ToDoEdit';
import { TodoItem } from './types';

function App() {
  const initialTodo = {id:0, text:"",checked:false};
  const [editToggle, setEditToggle] = useState<Boolean>(false);
  const [editTodo, setEditTodo] = useState<TodoItem>(initialTodo);

  const [todos, setTodos] = useState<TodoItem[]>([
    {
      id: 1,
      text: "운동하기",
      checked: false
    }
  ]);

  // 할일 체크 클릭시
  const checkClick = function (id: number) {
    setTodos(todos.map((todo) => todo.id == id ? { ...todo, checked: !todo.checked } : { ...todo }));
  }

  // 새로생성할 할일 번호
  const nextId = useRef(2);

  // 추가버튼 클릭시
  const insertTodo = function (text: string) {
    if(!text) return;
    setTodos([...todos, { id: nextId.current, text: text, checked: false }]);
    nextId.current += 1;
  }

  // 수정버튼 클릭시
  const onEditToggle = (todo: TodoItem) => {
    setEditTodo(editToggle ? initialTodo : todo);
    setEditToggle((editToggle) => !editToggle);
  }
  // 저장버튼 클릭시
  const editSave = (editTodo: TodoItem) => {
    setTodos(todos.map((todo) => todo.id == editTodo.id ? editTodo : todo ))
    setEditToggle((editToggle) => !editToggle);
  }
  // 삭제버튼 클릭시
  const removeClick = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return ( 
    <div className="App">
      <ToDoTemplate>
        <ToDoInsert
          insertTodo={insertTodo}
        ></ToDoInsert>
        <TodoList
          todos={todos}
          checkClick={checkClick}
          onEditToggle={onEditToggle}
          onRemoveClick={removeClick}
        ></TodoList>
        {editToggle &&
          <ToDoEdit
            editTodo={editTodo}
            editSave={editSave}
        ></ToDoEdit>}
      </ToDoTemplate>
    </div>
  );
}

export default App;
