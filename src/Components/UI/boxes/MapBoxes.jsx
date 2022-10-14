import React from 'react';
import classes from './MapBoxes.module.css';
import { useState } from 'react';
import EnterWindow from '../../../Pages/EnterWindow';
const MapBoxes = () => {

    const [posPlayerX, setPlayerX] = useState(1);
    const [posPlayerY, setPlayerY] = useState(2);


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


    function Player(props) {
        const positX = props.positX;
        const positY = props.positY;

        if (posPlayerX === positX && posPlayerY === positY) {
            return <span>X</span>;
        }
        return <h1> </h1>;
    }

    return (
        <div>
            <div className={classes.box}><Player positX={1} positY={0} /></div>

            <div className={classes.flexBoxMap}>
                <div className={classes.boxCell}><Player positX={0} positY={1} /></div>
                <div className={classes.boxCell}><Player positX={1} positY={1} /></div>
                <div className={classes.boxCell}><Player positX={2} positY={1} /></div>
                <div className={classes.boxCellEmp}></div>
            </div>

            <div className={classes.flexBoxMap}>
                <div className={classes.boxCell}><Player positX={0} positY={2} /></div>
                <div className={classes.boxCell}><Player positX={1} positY={2} /></div>
                <div className={classes.boxCell}><Player positX={2} positY={2} /></div>
                <div className={classes.boxCellEmp}></div>

            </div>

            <div className={classes.flexBoxMap}>
                <div className={classes.boxCell}><Player positX={0} positY={3} />O</div>
                <div className={classes.boxCell}><Player positX={1} positY={3} /></div>
                <div className={classes.boxCell}><Player positX={2} positY={3} />O</div>
                <div className={classes.boxCellEmp}></div>


            </div>
            <div className={classes.box}><Player positX={1} positY={4} />O</div>
            <div >
                <button onClick={upMove} >up</button>
                <button onClick={downMove} >down</button>
                <button onClick={leftMove} >left</button>
                <button onClick={rightMove} >right</button>
            </div>

        </div>
    );
};

export default MapBoxes;