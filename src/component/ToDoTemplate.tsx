import React from 'react';
import './ToDoTemplate.scss';

// Props 타입 정의
interface ToDoTemplateProps {
  children: React.ReactNode;
}

// 함수형 컴포넌트 정의
const ToDoTemplate: React.FC<ToDoTemplateProps> = ({ children }) => {
  return (
    <div className='TodoTemplate'>
      <div className='app-title'>Todo</div>
      <div className='content'>
        {children}
      </div>
    </div>
  );
};

export default ToDoTemplate;