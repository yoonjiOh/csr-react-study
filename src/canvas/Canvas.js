import React, {useRef, useEffect } from 'react';

const Canvas = ({draw, height, width}) => {
  const canvas = useRef(null);

  useEffect(() => {
    const context = canvas.current.getContext('2d');
    draw(context);
  });

  return (
    <canvas data-testid='canvas' ref={canvas} height={height} width={width} />
  );
};

export default Canvas;