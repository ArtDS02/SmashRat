import React, { useEffect, useState } from 'react';
import Tank from '../img/tank.png';
import Bullet from '../img/bullet.png';
import '../App.css';

const SquareBox = () => {
    const [positionX, setPositionX] = useState(700);
    const [positionY, setPositionY] = useState(355);
    const [bulletPositionX, setBulletPositionX] = useState(0);
    const [bulletPositionY, setBulletPositionY] = useState(0);
    const [rotate, setRotate] = useState(90);
    const [display, setDisplay] = useState("none");
    const [moving, setMoving] = useState("");
    let move = "";

    useEffect(() => {
        const handleKeyPress = (event) => {
            switch (event.key) {
                case 'ArrowRight':
                    if (positionX < 1400) setPositionX(prevX => prevX + 50);
                    else setPositionX(1450);
                    move = "Right";
                    setMoving(move);
                    setRotate(90);
                    console.log('Sang phải x = ', positionX, " y = ", positionY, " ", move, "rotate = ", rotate);
                    break;
                case 'ArrowUp':
                    if (positionY >= 50) setPositionY(prevY => prevY - 50);
                    else setPositionY(0);
                    move = "Up";
                    setMoving(move);
                    setRotate(0);
                    console.log('Lên trên x = ', positionX, " y = ", positionY, " ", move, "rotate = ", rotate);
                    break;
                case 'ArrowLeft':
                    if (positionX >= 50) setPositionX(prevX => prevX - 50);
                    else setPositionX(0);
                    move = "Left";
                    setMoving(move);
                    setRotate(-90);
                    console.log('Sang trái x = ', positionX, " y = ", positionY, " ", move, "rotate = ", rotate);
                    break;
                case 'ArrowDown':
                    if (positionY < 605) setPositionY(prevY => prevY + 50);
                    else setPositionY(655);
                    move = "Down";
                    setMoving(move);
                    setRotate(180);
                    console.log('Xuống dưới x = ', positionX, " y = ", positionY, " ", move, "rotate = ", rotate);
                    break;
                case ' ':
                    console.log("Move =", moving);
                    setDisplay("block");
                    setTimeout(() => {
                        if (moving === "Right") {
                            console.log("Bùm");
                            setBulletPositionY(bulletPrevY => bulletPrevY - 500);
                        } else if (moving === "Left") {
                            console.log("Bùm");
                            setBulletPositionY(bulletPrevY => bulletPrevY - 500);
                        }
                        else if (moving === "Up") {
                            console.log("Bùm");
                            setBulletPositionY(bulletPrevX => bulletPrevX - 300);
                        }
                        else if (moving === "Down") {
                            console.log("Bùm");
                            setBulletPositionY(bulletPrevX => bulletPrevX - 300);
                        }
                    }, 200);
                    setTimeout(() => {
                        setDisplay('none');
                        setBulletPositionX(0); // Đặt lại vị trí của đạn khi biến mất
                        setBulletPositionY(0);
                    }, 800);
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

    const newBullet = {
        width: '32px',
        height: '32px',
        padding: "0px 15px",
        marginBottom: "50px",
        position: 'absolute',
        display: display,
        top: `${bulletPositionY}px`,
        left: `${bulletPositionX}px`,
        transform: `rotate(${0}deg)`,
        transition: 'top 0.8s ease, left 0.8s ease, transform 0.4s ease-in-out'
    };

    return (
        <div style={squareStyle}>
            <img src={Tank} alt="Tank" />
            <img style={newBullet} src={Bullet} alt="Bullet" />
        </div>
    );
};

export default SquareBox;
