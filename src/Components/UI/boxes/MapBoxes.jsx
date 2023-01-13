import React, { useEffect, useState, useRef, useImperativeHandle, forwardRef } from 'react'
import classes from './MapBoxes.module.css';

const MapBoxes = (props, ref) => {

    const [randomIdEnemy, setRandomIdEnemy] = useState(0);






    useImperativeHandle(ref, () => ({

        upMove: () => { upMove() },
        downMove: () => { downMove() },
        rightMove: () => { rightMove() },
        leftMove: () => { leftMove() },
        firstEnemyMove: () => { enemyMove(1, 1) },
        RandomEnemyMove: () => { enemyMove(1, Math.round(Math.random() * 2)); },
        // alternate movement
        centralMoveFirst: () => { enemyMove(1, 0) },
        centralMoveSecond: () => { enemyMove(1, 1) },
        centralMoveThird: () => { enemyMove(1, 2) }


    }))


    let posPlayerX = props.posPlayerX;
    let posPlayerY = props.posPlayerY;
    let posEnemyX = props.posEnemyX;
    let posEnemyY = props.posEnemyY;
    let posEnemyXSecond = props.posEnemyXSecond;
    let posEnemyYSecond = props.posEnemyYSecond;
    let posEnemyXThird = props.posEnemyXThird;
    let posEnemyYThird = props.posEnemyYThird;

    function moveDirectionVertical(x, y, axis, direct) {
        if (props.posPlayerX === 0 && props.posPlayerY === 1) {
            props.setPlayerX(x);
            posPlayerX = x;
            props.setPlayerY(y);
            posPlayerY = y;
        }
        else if (props.posPlayerX === 2 && props.posPlayerY === 1) {
            props.setPlayerX(x)
            posPlayerX = x;
            props.setPlayerY(y)
            posPlayerY = y;
        }
        else {
            props.setPlayerY(axis + direct)
            posPlayerY = axis + direct;
        }
    }

    function upMove() {
        moveDirectionVertical(1, 0, props.posPlayerY, -1)
    }

    function downMove() {
        moveDirectionVertical(1, 4, props.posPlayerY, +1)
    }

    function moveDirectionHorizon(x, y, axis, direct) {
        if (props.posPlayerX === 1 && props.posPlayerY === 0) {
            props.setPlayerX(x);
            posPlayerX = x;
            props.setPlayerY(y);
            posPlayerY = y;
        }

        else {
            props.setPlayerX(axis + direct)
            posPlayerX = axis + direct;
        }
    }

    function leftMove() {
        moveDirectionHorizon(0, 1, props.posPlayerX, -1)
    }

    function rightMove() {
        moveDirectionHorizon(2, 1, props.posPlayerX, +1)
    }


    function changeEnemyPosition(enemyX, enemyY, setEnemyX, setEnemyY, direction, xOry) {
        if (enemyX === 0 && enemyY === 1) {
            setEnemyX(1);
            enemyX = 1;
            setEnemyY(0);
            enemyY = 0;
        }
        else if (enemyX === 2 && enemyY === 1) {
            setEnemyX(1);
            enemyX = 1;
            setEnemyY(0);
            enemyY = 0;

        }
        else {
            setEnemyY(direction - 1);
            direction = props.direction + xOry;
        }
    }


    function enemyMove(route, enemyID) {


        if (route === 1) {
            if (enemyID === 1)
                changeEnemyPosition(props.posEnemyXSecond, props.posEnemyYSecond, props.setEnemyXSecond, props.setEnemyYSecond, props.posEnemyYSecond, -1);
            else if (enemyID === 2)
                changeEnemyPosition(props.posEnemyX, props.posEnemyY, props.setEnemyX, props.setEnemyY, props.posEnemyY, -1);
            else
                changeEnemyPosition(props.posEnemyXThird, props.posEnemyYThird, props.setEnemyXThird, props.setEnemyYThird, props.posEnemyYThird, -1);
        }



        else if (route == 2) {
            if (enemyID === 1)
                changeEnemyPosition(props.posEnemyXSecond, props.posEnemyYSecond, props.setEnemyXSecond, props.setEnemyYSecond, props.posEnemyXSecond, -1);
            else if (enemyID === 2)
                changeEnemyPosition(props.posEnemyX, props.posEnemyY, props.setEnemyX, props.setEnemyY, props.posEnemyX, -1);
            else
                changeEnemyPosition(props.posEnemyXThird, props.posEnemyYThird, props.setEnemyXThird, props.setEnemyYThird, props.posEnemyXThird, -1);
        }



        else if (route == 3) {
            if (enemyID === 1)
                changeEnemyPosition(props.posEnemyXSecond, props.posEnemyYSecond, props.setEnemyXSecond, props.setEnemyXSecond, props.posEnemyYSecond, +1);
            else if (enemyID === 2)
                changeEnemyPosition(props.posEnemyX, props.posEnemyY, props.setEnemyX, props.setEnemyY, props.posEnemyX, +1);
            else
                changeEnemyPosition(props.posEnemyXThird, props.posEnemyYThird, props.setEnemyXThird, props.setEnemyYThird, props.posEnemyXThird, +1);

        }
        else {
            if (enemyID === 1)
                changeEnemyPosition(props.posEnemyXSecond, props.posEnemyYSecond, props.setEnemyXSecond, props.setEnemyYSecond, props.posEnemyXSecond, -1);
            else if (enemyID === 2)
                changeEnemyPosition(props.posEnemyX, props.posEnemyY, props.setEnemyX, props.setEnemyY, props.posEnemyX, -1);
            else
                changeEnemyPosition(props.posEnemyXThird, props.posEnemyYThird, props.setEnemyXThird, props.setEnemyYThird, props.posEnemyXThird, -1);
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
            <div className={classes.flexBoxMap} >
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

            {/* <button onClick={backlightStart} >test</button>  тест со сменой цвета при движении*/}


        </div>
    );
};
export default forwardRef(MapBoxes)