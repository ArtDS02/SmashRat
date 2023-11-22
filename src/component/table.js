import React, { useState, useEffect } from 'react';
import '../App.css';
import Hole from '../img/hole.png';
import Rat from '../img/rat.png';
import DeadRat from '../img/deadRat.png';

const Table = () => {
  const [ratLocation, setRatLocation] = useState(null);
  const [score, setScore] = useState(0);
  const [check, setCheck] = useState(false);
  const [mousePos, setMousePos] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const randomLocation = Math.floor(Math.random() * 8); 
      setRatLocation(randomLocation);
      setCheck(false);
    }, 2000); 
    return () => clearInterval(interval);
  }, []); 

  // get position of mouse
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      );
    };
  }, []);


  // Tính điểm khi MouseMove vào
  useEffect(() => {
    const ratElement = document.querySelector('.rat');
    if (ratElement) {
        const ratRect = ratElement.getBoundingClientRect();
        console.log(ratRect);
        const mouseX = mousePos.x;
        const mouseY = mousePos.y;

        if (
          mouseX >= ratRect.left &&
          mouseX <= ratRect.right &&
          mouseY >= ratRect.top &&
          mouseY <= ratRect.bottom
        ) {
            setScore(score + 1);
            setCheck(true);
        }
      }
  })


  const renderTable = () => {
    const holes = [];

    for (let i = 0; i < 8; i++) {
      if (i === ratLocation) {
        holes.push(<img key={i} src={check ? DeadRat :Rat} alt="Rat Logo" className={check ? 'dead-rat' : 'rat'} />);
      } else {
        holes.push(<img key={i} src={Hole} alt="Hole Logo" />);
      }
    }

    const rows = [];
    for (let i = 0; i < 2; i++) {
      rows.push(
        <div key={i} className='row-game'>
          {holes.slice(i * 4, (i + 1) * 4).map((hole, index) => (
            <div key={index}>
              {hole}
            </div>
          ))}
        </div>
      );
    }

    return rows;
  };

  return (
    <div className='table-game'>
      <div>Score: {score}</div>
      {renderTable()}
    </div>
  );
};

export default Table;
