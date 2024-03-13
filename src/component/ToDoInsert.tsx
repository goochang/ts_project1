import React from 'react';
import './ToDoInsert.scss';
import { MdInput } from "react-icons/md";

// Props 타입 정의
interface ToDoInsertProps {
}

// 함수형 컴포넌트 정의
const ToDoInsert: React.FC<ToDoInsertProps> = () => {
  return (
    <div className='TodoInsert'>
      <input type='text'></input>
      <button>
        <MdInput />
      </button>
    </div>
  );
};

export default ToDoInsert;