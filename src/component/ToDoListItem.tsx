import React from 'react';
import { TodoItem } from '../types';

// Props 타입 정의
interface ToDoListItemProps {
  todo:TodoItem;
  index:number;
}

// 함수형 컴포넌트 정의
const ToDoListItem: React.FC<ToDoListItemProps> = ({todo, index}) => {
  return (
    <div id={`${index}`}>
      {todo.text}
    </div>
  );
};

export default ToDoListItem;