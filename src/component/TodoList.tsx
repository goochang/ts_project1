import React from 'react';
import ToDoListItem from './ToDoListItem';
import { TodoItem } from '../types';

// Props 타입 정의
interface TodoListProps {
  todos: TodoItem[]; // TodoItem 타입의 배열
  checkClick: (id:number) => void;
  onEditToggle: (todo:TodoItem) => void;
  onRemoveClick: (id: number) => void;
}

// 함수형 컴포넌트 정의
const TodoList: React.FC<TodoListProps> = ({todos, checkClick, onEditToggle, onRemoveClick}) => {
  return (
    <div className='TodoList'>
      {
        todos.map((todo, index) => (
          <ToDoListItem 
            todo={todo} 
            index={index} 
            checkClick={checkClick}
            onEditToggle={onEditToggle}
            onRemoveClick={onRemoveClick}
          />          
        ))
      }
    </div>
  );
};

export default TodoList;