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






    console.log("__________________")
    console.log(props.posPlayerX, props.posPlayerY, "позиция игрока")
    console.log(props.posEnemyX, props.posEnemyY, "позиция 1 врага")
    console.log(props.posEnemyXSecond, props.posEnemyYSecond, "позиция 2 врага")
    console.log(props.posEnemyXThird, props.posEnemyYThird, "позиция 3 врага")
    console.log("__________________")




    function upMove() {
        if (props.posPlayerX === 0 && props.posPlayerY === 1) {
            props.setPlayerX(1);
            props.setPlayerY(0);
        }
        else if (props.posPlayerX === 2 && props.posPlayerY === 1) {
            props.setPlayerX(1)
            props.setPlayerY(0)
        }
        else {
            props.setPlayerY(props.posPlayerY - 1)
        }
    }
    function downMove() {
        if (props.posPlayerX === 0 && props.posPlayerY === 3) {
            props.setPlayerX(1);
            props.setPlayerY(4);
        }
        else if (props.posPlayerX === 2 && props.posPlayerY === 3) {
            props.setPlayerX(1)
            props.setPlayerY(4)
        }
        else {
            props.setPlayerY(props.posPlayerY + 1)

        }
    }
    function leftMove() {
        if (props.posPlayerX === 1 && props.posPlayerY === 0) {
            props.setPlayerX(0);
            props.setPlayerY(1);
        }

        else {
            props.setPlayerX(props.posPlayerX - 1)
        }
    }
    function rightMove() {

        if (props.posPlayerX === 1 && props.posPlayerY === 0) {
            props.setPlayerX(2);
            props.setPlayerY(1);
        }

        else {
            props.setPlayerX(props.posPlayerX + 1)

        }
    }

    function enemyMove(route, numberEnemy) {
        if (route === 1) {
            if (numberEnemy === 1) {
                if (props.posEnemyXSecond === 0 && props.posEnemyYSecond === 1) {
                    props.setEnemyXSecond(1);
                    props.setEnemyYSecond(0);

                }
                else if (props.posEnemyXSecond === 2 && props.posEnemyYSecond === 1) {
                    props.setEnemyXSecond(1)
                    props.setEnemyYSecond(0)
                }
                else {
                    props.setEnemyYSecond(props.posEnemyYSecond - 1)

                }
            }
            else if (numberEnemy === 2) {
                if (props.posEnemyX === 0 && props.posEnemyY === 1) {
                    props.setEnemyX(1);
                    props.setEnemyY(0);

                }
                else if (props.posEnemyX === 2 && props.posEnemyY === 1) {
                    props.setEnemyX(1)
                    props.setEnemyY(0)
                }
                else {
                    props.setEnemyY(props.posEnemyY - 1)

                }
            }
            else {

                if (props.posEnemyXThird === 0 && props.posEnemyYThird === 1) {
                    props.setEnemyXThird(1);
                    props.setEnemyYThird(0);

                }
                else if (props.posEnemyXThird === 2 && props.posEnemyYThird === 1) {
                    props.setEnemyXThird(1)
                    props.setEnemyYThird(0)
                }
                else {
                    props.setEnemyYThird(props.posEnemyYThird - 1)

                }

            }

        }




        else if (route == 2) {
            if (numberEnemy === 1) {
                if (props.posEnemyXSecond === 0 && props.posEnemyYSecond === 1) {
                    props.setEnemyXSecond(1);
                    props.setEnemyYSecond(0);

                }
                else if (props.posEnemyXSecond === 2 && props.posEnemyYSecond === 1) {
                    props.setEnemyXSecond(1)
                    props.setEnemyYSecond(0)
                }
                else {
                    props.setEnemyYSecond(props.posEnemyYSecond + 1)

                }
            }
            else if (numberEnemy === 2) {
                if (props.posEnemyXSecond === 0 && props.posEnemyY === 1) {
                    props.setEnemyX(1);
                    props.setEnemyY(0);

                }
                else if (props.posEnemyXSecond === 2 && props.posEnemyY === 1) {
                    props.setEnemyX(1)
                    props.setEnemyY(0)
                }
                else {
                    props.setEnemyY(props.posEnemyY + 1)
                }

            }

            else {

                if (props.posEnemyXThird === 0 && props.posEnemyYThird === 1) {
                    props.setEnemyXThird(1);
                    props.setEnemyYThird(0);

                }
                else if (props.posEnemyXThird === 2 && props.posEnemyYThird === 1) {
                    props.setEnemyXThird(1)
                    props.setEnemyYThird(0)
                }
                else {
                    props.setEnemyYThird(props.posEnemyYThird + 1)

                }

            }
        }



        else if (route == 3) {
            if (numberEnemy === 1) {
                if (props.posEnemyXSecond === 0 && props.posEnemyYSecond === 1) {
                    props.setEnemyXSecond(1);
                    props.setEnemyYSecond(0);

                }
                else if (props.posEnemyXSecond === 2 && props.posEnemyYSecond === 1) {
                    props.setEnemyXSecond(1)
                    props.setEnemyYSecond(0)
                }
                else {
                    props.setEnemyXSecond(props.posEnemyXSecond + 1)
                }
            }
            else if (numberEnemy === 2) {
                if (props.posEnemyXSecond === 0 && props.posEnemyY === 1) {
                    props.setEnemyX(1);
                    props.setEnemyY(0);

                }
                else if (props.posEnemyXSecond === 2 && props.posEnemyY === 1) {
                    props.setEnemyX(1)
                    props.setEnemyY(0)
                }
                else {
                    props.setEnemyX(props.posEnemyX + 1)
                }

            }

            else {

                if (props.posEnemyXThird === 0 && props.posEnemyYThird === 1) {
                    props.setEnemyXThird(1);
                    props.setEnemyYThird(0);

                }
                else if (props.posEnemyXThird === 2 && props.posEnemyYThird === 1) {
                    props.setEnemyXThird(1)
                    props.setEnemyYThird(0)
                }
                else {
                    props.setEnemyXThird(props.posEnemyXThird + 1)

                }

            }

        }



        else {
            if (numberEnemy === 1) {
                if (props.posEnemyXSecond === 0 && props.posEnemyYSecond === 1) {
                    props.setEnemyXSecond(1);
                    props.setEnemyYSecond(0);

                }
                else if (props.posEnemyXSecond === 2 && props.posEnemyYSecond === 1) {
                    props.setEnemyXSecond(1)
                    props.setEnemyYSecond(0)
                }
                else {
                    props.setEnemyXSecond(props.posEnemyXSecond - 1)

                }
            }
            else if (numberEnemy === 2) {
                if (props.posEnemyXSecond === 0 && props.posEnemyY === 1) {
                    props.setEnemyX(1);
                    props.setEnemyY(0);

                }
                else if (props.posEnemyXSecond === 2 && props.posEnemyY === 1) {
                    props.setEnemyX(1)
                    props.setEnemyY(0)
                }
                else {
                    props.setEnemyX(props.posEnemyX - 1)
                }

            }

            else {

                if (props.posEnemyXThird === 0 && props.posEnemyYThird === 1) {
                    props.setEnemyXThird(1);
                    props.setEnemyYThird(0);

                }
                else if (props.posEnemyXThird === 2 && props.posEnemyYThird === 1) {
                    props.setEnemyXThird(1)
                    props.setEnemyYThird(0)
                }
                else {
                    props.setEnemyXThird(props.posEnemyXThird - 1)

                }

            }
        }

    }






    function Player(props) {
        const positX = props.positX;
        const positY = props.positY;

        if (props.posPlayerX === positX && props.posPlayerY === positY) {
            return <span>X</span>;
        }
        return <h1> </h1>;
    }

    function Enemy(props) {
        const positX = props.positX;
        const positY = props.positY;


        if (props.posEnemyX === positX && props.posEnemyY === positY) {
            return <span>O</span>;
        }
        if (props.posEnemyXSecond === positX && props.posEnemyYSecond === positY) {
            return <span>O</span>;
        }
        if (props.posEnemyXThird === positX && props.posEnemyYThird === positY) {
            return <span>O</span>;
        }
        return <h1> </h1>;
    }


    function makeBox(x, y, boxType) {
        let text = '';

        return <div className={boxType}>
            <Player
                positX={x}
                positY={y}
                posPlayerX={props.posPlayerX}
                posPlayerY={props.posPlayerY}

                posEnemyX={props.posEnemyX}
                posEnemyY={props.posEnemyY}

                posEnemyXSecond={props.posEnemyXSecond}
                posEnemyYSecond={props.posEnemyYSecond}

                posEnemyXThird={props.posEnemyXThird}
                posEnemyYThird={props.posEnemyYThird}

            /><Enemy
                positX={x}
                positY={y}
                posPlayerX={props.posPlayerX}
                posPlayerY={props.posPlayerY}

                posEnemyX={props.posEnemyX}
                posEnemyY={props.posEnemyY}

                posEnemyXSecond={props.posEnemyXSecond}
                posEnemyYSecond={props.posEnemyYSecond}

                posEnemyXThird={props.posEnemyXThird}
                posEnemyYThird={props.posEnemyYThird}
            />{text}</div>
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


            {/* <button onClick={() => enemyMove(1, 2)}>up1</button>
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
            <button onClick={() => enemyMove(4, 3)}>lt3</button> */}



        </div>
    );
};
export default forwardRef(MapBoxes)