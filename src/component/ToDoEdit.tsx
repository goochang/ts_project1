import React, { ChangeEvent, useState } from 'react';
import { MdInput } from "react-icons/md";
import './ToDoEdit.scss';
import { TodoItem } from '../types';

// Props 타입 정의
interface ToDoEditProps {
  editTodo: TodoItem;
  editSave: (todo:TodoItem) => void;
}

// 함수형 컴포넌트 정의
const ToDoEdit: React.FC<ToDoEditProps> = ({editTodo, editSave}) => {
  const [text, setText] = useState(editTodo.text);
  const textChange = function(e:ChangeEvent<HTMLInputElement>){
    setText(e.target.value);
    editTodo.text = e.target.value;
  }
  return (
    <div className='background'>
        <div className='todoedit__insert'>
            <h2>입력</h2>
            <input type='text' value={text} onChange={textChange}></input>
            <button onClick={() => editSave(editTodo)}>저장</button>
        </div>
    </div>
  );
};

export default ToDoEdit;