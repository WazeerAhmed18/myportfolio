"use client";
import React, { useEffect, useState } from 'react';
import './MouseCircle.css'; // Import the CSS for the circle

const MouseCircle = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const newPosition = {
        x: event.clientX,
        y: event.clientY,
      };
      console.log('Mouse Position:', newPosition); // Debugging line
      setPosition(newPosition);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="hidden md:block mouse-circle"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
};

export default MouseCircle;
