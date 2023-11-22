import React, { useEffect, useState } from 'react';
import Tank from '../img/tank.png';
import '../App.css';

const SquareBox = () => {
    const [positionX, setPositionX] = useState(700);
    const [positionY, setPositionY] = useState(355);
    const [rotate, setRotate] = useState(90);
    let move = "";

    useEffect(() => {
        const handleKeyPress = (event) => {
            switch (event.key) {
                case 'ArrowRight':
                    if (positionX < 1400) setPositionX(prevX => prevX + 50);
                    else setPositionX(1450);
                    move = "Right";
                    // rotate=90;
                    setRotate(90);
                    console.log('Sang phải x = ',positionX," y = ", positionY, " ", move, "rotate = ", rotate);
                    break;
                case 'ArrowUp':
                    if (positionY >= 50) setPositionY(prevY => prevY - 50);
                    else setPositionY(0);
                    move = "Up";
                    setRotate(0);
                    console.log('Lên trên x = ',positionX," y = ", positionY, " ", move, "rotate = ", rotate);
                    break;
                case 'ArrowLeft':
                    if (positionX >= 50) setPositionX(prevX => prevX - 50);
                    else setPositionX(0);
                    move = "Left";
                    setRotate(-90);
                    console.log('Sang trái x = ',positionX," y = ", positionY, " ", move, "rotate = ", rotate);
                    break;
                case 'ArrowDown':
                    if (positionY < 605) setPositionY(prevY => prevY + 50);
                    else setPositionY(655);
                    move = "Down";
                    setRotate(180);
                    console.log('Xuống dưới x = ',positionX," y = ", positionY, " ", move, "rotate = ", rotate);
                    break;
                default:
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [positionX, positionY]);

    const squareStyle = {
        width: '64px',
        height: '64px',
        position: 'relative',
        top: `${positionY}px`,
        left: `${positionX}px`,
        transform: `rotate(${rotate}deg)`,
        transition: 'top 0.3s ease, left 0.3s ease, transform 0.4s ease-in-out',
    };

    return (
        <div style={squareStyle}>
            <img className='' src={Tank} alt="Tank" />
        </div>
    );
};

export default SquareBox;
