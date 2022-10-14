import React, { useState, useEffect } from 'react';
import { getPadTime } from '../Helpers/getPadTime';

const Timer = () => {

    const [timeLeft, setTimeLeft] = useState(1 * 60);
    const [isCounting, setIsCounting] = useState(false);

    const minutes = getPadTime(Math.floor(timeLeft / 60));
    const seconds = getPadTime(timeLeft - minutes * 60);

    useEffect(() => {
        const interval = setInterval(() => {
            isCounting &&
                setTimeLeft((timeLeft) => timeLeft >= 1 ? timeLeft - 1 : 0)
        }, 1000)
        if (timeLeft === 0) setIsCounting(false)
        return () => {
            clearInterval(interval);
        }
    }, [timeLeft, isCounting])
    const handleStart = () => {
        setIsCounting(true)
        if (timeLeft === 0) setTimeLeft(1 * 60)

    };
    const handleStop = () => {
        setIsCounting(false)
    };
    const handleReset = () => {
        setIsCounting(false)
        setTimeLeft(1 * 60)
    };

    return (
        <div>
            <div>
                <span className='timerText'>{minutes}</span>
                <span className='timerText'>:</span>
                <span className='timerText'>{seconds}</span>
            </div>
            <div>
                <button onClick={handleStart}>start</button>
                <button onClick={handleStop}>stop</button>
                <button onClick={handleReset}>reset</button>

            </div>
        </div>
    );
};

export default Timer;