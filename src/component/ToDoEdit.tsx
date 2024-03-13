import React from 'react';
import { MdInput } from "react-icons/md";
import './ToDoEdit.scss';

// Props 타입 정의
interface ToDoEditProps {
}

// 함수형 컴포넌트 정의
const ToDoEdit: React.FC<ToDoEditProps> = () => {
  return (
    <div className='background'>
        <div className='todoedit__insert'>
            <h2>입력</h2>
            <input type='text'></input>
            <button>
                <MdInput />
            </button>
        </div>
    </div>
  );
};

export default ToDoEdit;