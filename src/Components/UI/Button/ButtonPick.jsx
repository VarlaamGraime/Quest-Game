import React from 'react';
import classes from './ButtonPick.module.css';

const ButtonPick = (props) => {
    return (
        <button className={classes.btnPick}>
            {props.children}
        </button>
    );
};

export default ButtonPick;