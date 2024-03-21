import React, { ChangeEvent, ChangeEventHandler, FormEvent, useState } from 'react';
import './ToDoInsert.scss';
import { FiPlus } from "react-icons/fi";


// Props 타입 정의
interface ToDoInsertProps {
  insertTodo: (text: string) => void;
}


// 함수형 컴포넌트 정의
const ToDoInsert: React.FC<ToDoInsertProps> = ({ insertTodo }) => {

  const [text, setText] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    insertTodo(text)
    setText("");
    e.preventDefault();
    e.stopPropagation();
  }
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    setText(e.target.value);
  }

  return (
    <form onSubmit={onSubmit} className='TodoInsert'>
      <input type='text' placeholder='할 일을 입력하세요' value={text} onChange={onChange} />
      <button type='submit'>
        <FiPlus />
      </button>
    </form>
  );
};

export default ToDoInsert;