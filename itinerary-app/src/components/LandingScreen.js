import React, { useState, useEffect } from 'react';
import './InitialScreen.css';

const InitialScreen = ({ title, names }) => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const titleStyle = {
    transform: `translateY(${Math.min(scrollY, 100)}px) scale(${Math.max(1 - scrollY / 200, 0.5)})`,
    position: scrollY > 100 ? 'fixed' : 'relative',
    top: scrollY > 100 ? '10px' : '50vh',
    left: scrollY > 100 ? '10px' : '50%',
    transform: scrollY > 100 ? 'translateX(0) translateY(0) scale(0.5)' : 'translateX(-50%)',
  };

  const namesStyle = {
    transform: `translateY(${Math.min(scrollY, 100)}px)`,
    position: scrollY > 100 ? 'fixed' : 'relative',
    top: scrollY > 100 ? '50px' : '60vh',
    left: scrollY > 100 ? '200px' : '50%',
    transform: scrollY > 100 ? 'translateX(0) translateY(0)' : 'translateX(-50%)',
  };

  return (
    <div className="initial-screen">
      <h1 style={titleStyle}>{title}</h1>
      <div style={namesStyle} className="names">
        {names.map((name, index) => (
          <p key={index}>{name}</p>
        ))}
      </div>
    </div>
  );
};

export default InitialScreen;
