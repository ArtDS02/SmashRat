import React, { useState } from 'react';
import '../App.css';
import hammerImage from '../img/hammer1.png';

const ChangeableTag = () => {
  const [isHammerDown, setIsHammerDown] = useState(false);
  const [hammerPosition, setHammerPosition] = useState({ x: 0, y: 0 });

  function moveHammer(e) {
    const x = e.clientX;
    const y = e.clientY;
    setHammerPosition({ x: x - 30, y: y - 40 });
  }

  function animateHammer() {
    if (!isHammerDown) {
      setIsHammerDown(true);
      setTimeout(() => {
        setIsHammerDown(false);
      }, 500);
    }
  }

  const hammerStyle = {
    position: 'absolute',
    left: `${hammerPosition.x}px`,
    top: `${hammerPosition.y}px`,
    transform: isHammerDown ? 'rotate(-90deg)' : 'rotate(0deg)',
    transition: 'transform 0.2s ease-in-out',
  };

  return (
    <div>
      <div
        id="hammer"
        style={hammerStyle}
        onClick={animateHammer}
        onMouseMove={(event) => moveHammer(event)}
      >
        <img className='img-hammer' src={hammerImage} alt="Hammer" />
      </div>
    </div>
  );
};

export default ChangeableTag;
