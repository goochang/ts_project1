import React from 'react';

// Props 타입 정의
interface MyComponentProps {
  name: string;
  age: number;
}

// 함수형 컴포넌트 정의
const MyComponent: React.FC<MyComponentProps> = ({ name, age }) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default MyComponent;