import React from 'react';
import { TodoItem } from '../types';
import './ToDoListItem.scss'
import {
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
  MdCheckBox,
  MdModeEditOutline,
} from 'react-icons/md';

// Props 타입 정의
interface ToDoListItemProps {
  todo:TodoItem;
  index:number;
  checkClick: (id:number) => void;
  onEditToggle: (todo:TodoItem) => void;
  onRemoveClick: (id: number) => void;
}

// 함수형 컴포넌트 정의
const ToDoListItem: React.FC<ToDoListItemProps> = ({todo, index, checkClick, onEditToggle, onRemoveClick}) => {
  return (
    <div className='TodoListItem-virtualized' id={`${index}`}>
      <li className='TodoListItem'>
        <div className={`checkbox ${todo.checked ? "checked" : ""}`} onClick={() => checkClick(todo.id) }>
          {
            todo.checked ?
            <MdCheckBox /> :
            <MdCheckBoxOutlineBlank />
          }
          <div className={`text`}>{todo.text}</div>
        </div>
        <div className='edit' onClick={()=> onEditToggle(todo) }><MdModeEditOutline /></div>
        <div className='remove' onClick={() => onRemoveClick(todo.id)}><MdRemoveCircleOutline /></div>
      </li>
      
    </div>
  );
};

export default ToDoListItem;