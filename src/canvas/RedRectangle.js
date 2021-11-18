import React from 'react';
import Canvas from './Canvas';

const RedRectangle = () => {
  const draw = (context) => {
    console.log(context)
    // context.fillRect(x, y, width, height) -> x, y 는 시작 좌표.
    context.fillStyle = "red";
    context.fillRect(100, 100, 400, 300);
  }

  return (
    <Canvas draw={draw} width={800} height={600} />
  )
};

export default RedRectangle;