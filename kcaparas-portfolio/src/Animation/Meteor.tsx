'use client';

import React, { useEffect, useState } from 'react';
import './Meteor.css';

interface MeteorsProps {
  number?: number;
}

const Meteors = ({ number = 20 }: MeteorsProps) => {
  const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>([]);

  useEffect(() => {
    const styles = [...new Array(number)].map(() => ({
      top: `${Math.floor(Math.random() * 100)}%`,
      left: `${Math.floor(Math.random() * 100)}%`,
      animationDelay: `${Math.random() * 1 + 0.2}s`,
      animationDuration: `${Math.floor(Math.random() * 8 + 2)}s`,
    }));
    setMeteorStyles(styles);
  }, [number]);

  return (
    <>
      {meteorStyles.map((style, idx) => (
        <span
          key={idx}
          className="meteor"
          style={style}
        >
          <div className="meteor-tail" />
        </span>
      ))}
    </>
  );
};

export default Meteors;
