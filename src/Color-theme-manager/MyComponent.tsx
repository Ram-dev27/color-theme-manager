import React from 'react';

export interface MyComponentProps {
  message: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ message }) => {
  return <div style={{ backgroundColor: 'black', color: 'white' }}>{message}</div>;
};

export default MyComponent;