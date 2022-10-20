import React, { useRef, useImperativeHandle, forwardRef } from 'react'
import classes from './MapBoxes.module.css';
import { useState } from 'react';

const MapBoxes = (props, ref) => {

    useImperativeHandle(ref, () => ({
        upMove: () => { upMove() },
        downMove: () => { downMove() },
        rightMove: () => { rightMove() },
        leftMove: () => { leftMove() },
        firstEnemyMove: () => { enemyMove(1, 1) }

    }))


    const [posPlayerX, setPlayerX] = useState(1);
    const [posPlayerY, setPlayerY] = useState(2);
    const [posEnemyX, setEnemyX] = useState(0);
    const [posEnemyY, setEnemyY] = useState(3);
    const [posEnemyXSecond, setEnemyXSecond] = useState(1);
    const [posEnemyYSecond, setEnemyYSecond] = useState(4);
    const [posEnemyXThird, setEnemyXThird] = useState(2);
    const [posEnemyYThird, setEnemyYThird] = useState(3);



    function upMove() {
        if (posPlayerX === 0 && posPlayerY === 1) {
            setPlayerX(1);
            setPlayerY(0);
        }
        else if (posPlayerX === 2 && posPlayerY === 1) {
            setPlayerX(1)
            setPlayerY(0)
        }
        else {
            setPlayerY(posPlayerY - 1)
        }
    }
    function downMove() {
        if (posPlayerX === 0 && posPlayerY === 3) {
            setPlayerX(1);
            setPlayerY(4);
        }
        else if (posPlayerX === 2 && posPlayerY === 3) {
            setPlayerX(1)
            setPlayerY(4)
        }
        else {
            setPlayerY(posPlayerY + 1)

        }
    }
    function leftMove() {
        if (posPlayerX === 1 && posPlayerY === 0) {
            setPlayerX(0);
            setPlayerY(1);
        }

        else {
            setPlayerX(posPlayerX - 1)
        }
    }
    function rightMove() {

        if (posPlayerX === 1 && posPlayerY === 0) {
            setPlayerX(2);
            setPlayerY(1);
        }

        else {
            setPlayerX(posPlayerX + 1)

        }
    }

    function enemyMove(route, numberEnemy) {
        if (route === 1) {
            if (numberEnemy === 1) {
                if (posEnemyXSecond === 0 && posEnemyYSecond === 1) {
                    setEnemyXSecond(1);
                    setEnemyYSecond(0);

                }
                else if (posEnemyXSecond === 2 && posEnemyYSecond === 1) {
                    setEnemyXSecond(1)
                    setEnemyYSecond(0)
                }
                else {
                    setEnemyYSecond(posEnemyYSecond - 1)

                }
            }
            else if (numberEnemy === 2) {
                if (posEnemyX === 0 && posEnemyY === 1) {
                    setEnemyX(1);
                    setEnemyY(0);

                }
                else if (posEnemyX === 2 && posEnemyY === 1) {
                    setEnemyX(1)
                    setEnemyY(0)
                }
                else {
                    setEnemyY(posEnemyY - 1)

                }
            }
            else {

                if (posEnemyXThird === 0 && posEnemyYThird === 1) {
                    setEnemyXThird(1);
                    setEnemyYThird(0);

                }
                else if (posEnemyXThird === 2 && posEnemyYThird === 1) {
                    setEnemyXThird(1)
                    setEnemyYThird(0)
                }
                else {
                    setEnemyYThird(posEnemyYThird - 1)

                }

            }

        }




        else if (route == 2) {
            if (numberEnemy === 1) {
                if (posEnemyXSecond === 0 && posEnemyYSecond === 1) {
                    setEnemyXSecond(1);
                    setEnemyYSecond(0);

                }
                else if (posEnemyXSecond === 2 && posEnemyYSecond === 1) {
                    setEnemyXSecond(1)
                    setEnemyYSecond(0)
                }
                else {
                    setEnemyYSecond(posEnemyYSecond + 1)

                }
            }
            else if (numberEnemy === 2) {
                if (posEnemyXSecond === 0 && posEnemyY === 1) {
                    setEnemyX(1);
                    setEnemyY(0);

                }
                else if (posEnemyXSecond === 2 && posEnemyY === 1) {
                    setEnemyX(1)
                    setEnemyY(0)
                }
                else {
                    setEnemyY(posEnemyY + 1)
                }

            }

            else {

                if (posEnemyXThird === 0 && posEnemyYThird === 1) {
                    setEnemyXThird(1);
                    setEnemyYThird(0);

                }
                else if (posEnemyXThird === 2 && posEnemyYThird === 1) {
                    setEnemyXThird(1)
                    setEnemyYThird(0)
                }
                else {
                    setEnemyYThird(posEnemyYThird + 1)

                }

            }
        }



        else if (route == 3) {
            if (numberEnemy === 1) {
                if (posEnemyXSecond === 0 && posEnemyYSecond === 1) {
                    setEnemyXSecond(1);
                    setEnemyYSecond(0);

                }
                else if (posEnemyXSecond === 2 && posEnemyYSecond === 1) {
                    setEnemyXSecond(1)
                    setEnemyYSecond(0)
                }
                else {
                    setEnemyXSecond(posEnemyXSecond + 1)
                }
            }
            else if (numberEnemy === 2) {
                if (posEnemyXSecond === 0 && posEnemyY === 1) {
                    setEnemyX(1);
                    setEnemyY(0);

                }
                else if (posEnemyXSecond === 2 && posEnemyY === 1) {
                    setEnemyX(1)
                    setEnemyY(0)
                }
                else {
                    setEnemyX(posEnemyX + 1)
                }

            }

            else {

                if (posEnemyXThird === 0 && posEnemyYThird === 1) {
                    setEnemyXThird(1);
                    setEnemyYThird(0);

                }
                else if (posEnemyXThird === 2 && posEnemyYThird === 1) {
                    setEnemyXThird(1)
                    setEnemyYThird(0)
                }
                else {
                    setEnemyXThird(posEnemyXThird + 1)

                }

            }

        }



        else {
            if (numberEnemy === 1) {
                if (posEnemyXSecond === 0 && posEnemyYSecond === 1) {
                    setEnemyXSecond(1);
                    setEnemyYSecond(0);

                }
                else if (posEnemyXSecond === 2 && posEnemyYSecond === 1) {
                    setEnemyXSecond(1)
                    setEnemyYSecond(0)
                }
                else {
                    setEnemyXSecond(posEnemyXSecond - 1)

                }
            }
            else if (numberEnemy === 2) {
                if (posEnemyXSecond === 0 && posEnemyY === 1) {
                    setEnemyX(1);
                    setEnemyY(0);

                }
                else if (posEnemyXSecond === 2 && posEnemyY === 1) {
                    setEnemyX(1)
                    setEnemyY(0)
                }
                else {
                    setEnemyX(posEnemyX - 1)
                }

            }

            else {

                if (posEnemyXThird === 0 && posEnemyYThird === 1) {
                    setEnemyXThird(1);
                    setEnemyYThird(0);

                }
                else if (posEnemyXThird === 2 && posEnemyYThird === 1) {
                    setEnemyXThird(1)
                    setEnemyYThird(0)
                }
                else {
                    setEnemyXThird(posEnemyXThird - 1)

                }

            }
        }

    }






    function Player(props) {
        const positX = props.positX;
        const positY = props.positY;


        if (posPlayerX === positX && posPlayerY === positY) {
            return <span>X</span>;
        }
        return <h1> </h1>;
    }

    function Enemy(props) {
        const positX = props.positX;
        const positY = props.positY;

        if (posEnemyX === positX && posEnemyY === positY) {
            return <span>O</span>;
        }
        if (posEnemyXSecond === positX && posEnemyYSecond === positY) {
            return <span>O</span>;
        }
        if (posEnemyXThird === positX && posEnemyYThird === positY) {
            return <span>O</span>;
        }
        return <h1> </h1>;
    }


    function makeBox(x, y, boxType) {
        let text = '';

        return <div onClick={() => upMove()} className={boxType}><Player positX={x} positY={y} /><Enemy positX={x} positY={y} />{text}</div>
    }


    return (
        <div>
            {makeBox(1, 0, classes.box, 1)}
            <div div className={classes.flexBoxMap} >
                {makeBox(0, 1, classes.boxCell)}
                {makeBox(1, 1, classes.boxCell)}
                {makeBox(2, 1, classes.boxCell)}
                <div className={classes.boxCellEmp}></div>
            </div>

            <div className={classes.flexBoxMap}>
                {makeBox(0, 2, classes.boxCell)}
                {makeBox(1, 2, classes.boxCell)}
                {makeBox(2, 2, classes.boxCell)}
                <div className={classes.boxCellEmp}></div>

            </div>

            <div className={classes.flexBoxMap}>
                {makeBox(0, 3, classes.boxCell)}
                {makeBox(1, 3, classes.boxCell)}
                {makeBox(2, 3, classes.boxCell)}
                <div className={classes.boxCellEmp}></div>


            </div>
            {makeBox(1, 4, classes.box)}


            <button onClick={() => enemyMove(1, 2)}>up1</button>
            <button onClick={() => enemyMove(1, 1)}>up2</button>
            <button onClick={() => enemyMove(1, 3)}>up3</button>

            <button onClick={() => enemyMove(2, 2)}>dw1</button>
            <button onClick={() => enemyMove(2, 1)}>dw2</button>
            <button onClick={() => enemyMove(2, 3)}>dw3</button>

            <button onClick={() => enemyMove(3, 2)}>rt1</button>
            <button onClick={() => enemyMove(3, 1)}>rt2</button>
            <button onClick={() => enemyMove(3, 3)}>rt3</button>

            <button onClick={() => enemyMove(4, 2)}>lt1</button>
            <button onClick={() => enemyMove(4, 1)}>lt2</button>
            <button onClick={() => enemyMove(4, 3)}>lt3</button>



        </div>
    );
};
export default forwardRef(MapBoxes)