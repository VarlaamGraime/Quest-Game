import React from 'react';
import Timer from './../Components/Timer';
import MapBoxes from '../Components/UI/boxes/MapBoxes';
import { useRef, useState, useEffect } from 'react';



const EnterWindow = (props) => {

    const [enemyOnTheDown, setEnemyOnTheDown] = useState(false);
    const [enemyOnTheUp, setEnemyOnTheUp] = useState(false);
    const [enemyOnTheLeft, setEnemyOnTheLeft] = useState(false);
    const [enemyOnTheRight, setEnemyOnTheRight] = useState(false);
    const [enemyAboveYou, setEnemyAboveYou] = useState(0);








    let posPlayerX = props.posPlayerX;
    let posPlayerY = props.posPlayerY;
    let posEnemyX = props.posEnemyX;
    let posEnemyY = props.posEnemyY;
    let posEnemyXSecond = props.posEnemyXSecond;
    let posEnemyYSecond = props.posEnemyYSecond;
    let posEnemyXThird = props.posEnemyXThird;
    let posEnemyYThird = props.posEnemyYThird;





    useEffect(() => {


        console.log("__________________")
        console.log(posPlayerX, posPlayerY, "позиция игрока")
        console.log(posEnemyX, posEnemyY, "позиция 1 врага")
        console.log(posEnemyXSecond, posEnemyYSecond, "позиция 2 врага")
        console.log(posEnemyXThird, posEnemyYThird, "позиция 3 врага")
        console.log("__________________")


        if (posPlayerY === posEnemyY || posPlayerY === posEnemyYSecond || posPlayerY === posEnemyYThird) {

            if (
                (posPlayerX == posEnemyX && posPlayerY !== posEnemyY + 1)
                ||
                (posPlayerX == posEnemyXSecond && posPlayerY !== posEnemyYSecond + 1)
                ||
                (posPlayerX == posEnemyXThird && posPlayerY !== posEnemyYThird + 1)
            ) {
                setEnemyOnTheDown(false)
                console.log('сверху никого')
            }
        } else {
            setEnemyOnTheDown(false)
            console.log('сверху никого')

        }

        if (
            (posPlayerX == posEnemyX && posPlayerY == posEnemyY + 1)
            ||
            (posPlayerX == posEnemyXSecond && posPlayerY == posEnemyYSecond + 1)
            ||
            (posPlayerX == posEnemyXThird && posPlayerY == posEnemyYThird + 1)
            ||
            ((posPlayerX == 0 && posPlayerY == 1) && (posEnemyX == 1 && posPlayerY == 0))
            ||
            ((posPlayerX == 0 && posPlayerY == 1) && (posEnemyXSecond == 1 && posEnemyYSecond == 0))
            ||
            ((posPlayerX == 0 && posPlayerY == 1) && (posEnemyXThird == 1 && posEnemyYThird == 0))
            ||
            ((posPlayerX == 2 && posPlayerY == 1) && (posEnemyXSecond == 1 && posEnemyYSecond == 0))



        ) {
            setEnemyOnTheUp(true)
            console.log('враг рядом (сверху) ')
        }



        if (posPlayerY === posEnemyY || posPlayerY === posEnemyYSecond || posPlayerY === posEnemyYThird || posPlayerX === posEnemyXThird || posPlayerX === posEnemyXSecond || posPlayerX === 0) {

            if (
                (posPlayerX == posEnemyX && posPlayerY !== posEnemyY - 1)
                ||
                (posPlayerX == posEnemyXSecond && posPlayerY !== posEnemyYSecond - 1)
                ||
                (posPlayerX == posEnemyXThird && posPlayerY !== posEnemyYThird - 1)

            ) {
                setEnemyOnTheDown(false)
                console.log('снизу никого')
            }
        } else {
            setEnemyOnTheDown(false)
            console.log('снизу никого')
            setEnemyAboveYou(0)

        }



        if ((posPlayerX == posEnemyX && posPlayerY == posEnemyY - 1)

        ) {
            setEnemyOnTheDown(true)
            setEnemyAboveYou(1)
            console.log('враг рядом (снизу) ', enemyAboveYou, 'стейт')
        }

        if ((posPlayerX == posEnemyXSecond && posPlayerY == posEnemyYSecond - 1)

        ) {
            setEnemyOnTheDown(true)
            setEnemyAboveYou(2)
            console.log('враг рядом (снизу) ', enemyAboveYou, 'стейт')
        }

        if ((posPlayerX == posEnemyXThird && posPlayerY == posEnemyYThird - 1)

        ) {
            setEnemyOnTheDown(true)
            setEnemyAboveYou(3)
            console.log('враг рядом (снизу) ', enemyAboveYou, 'стейт')
        }




        if (posPlayerY === posEnemyY || posPlayerY === posEnemyYSecond || posPlayerY === posEnemyYThird) {
            if (
                (posPlayerY == posEnemyY && posPlayerX !== posEnemyX - 1)
                ||
                (posPlayerY == posEnemyYSecond && posPlayerX !== posEnemyXSecond - 1)
                ||
                (posPlayerY == posEnemyYThird && posPlayerX !== posEnemyXThird - 1)
                ||
                ((posPlayerX == 1 && posPlayerY == 0) && (posEnemyXThird !== 2 && posEnemyYThird !== 1))
            ) {
                setEnemyOnTheRight(false)
                console.log('справа никого')
            }
        }
        else {
            setEnemyOnTheRight(false)
            console.log('справа никого')
        }

        if (
            (posPlayerX == posEnemyX - 1 && posPlayerY == posEnemyY)
            ||
            (posPlayerX == posEnemyXSecond - 1 && posPlayerY == posEnemyYSecond)
            ||
            (posPlayerX == posEnemyXThird - 1 && posPlayerY == posEnemyYThird)
            ||
            ((posPlayerX == 1 && posPlayerY == 0) && (posEnemyXThird == 2 && posEnemyYThird == 1))


        ) {
            setEnemyOnTheRight(true)
            console.log('враг рядом (справа) ')
        }


        if (posPlayerY === posEnemyY || posPlayerY === posEnemyYSecond || posPlayerY === posEnemyYThird) {
            if (
                (posPlayerY == posEnemyY && posPlayerX !== posEnemyX + 1)
                ||
                (posPlayerY == posEnemyYSecond && posPlayerX !== posEnemyXSecond + 1)
                ||
                (posPlayerY == posEnemyYThird && posPlayerX !== posEnemyXThird + 1)
                ||
                ((posPlayerX == 1 && posPlayerY == 0) && (posEnemyX !== 0 && posPlayerY !== 1))

            ) {
                setEnemyOnTheLeft(false)
                console.log('слева никого')
            }
        }
        else {
            setEnemyOnTheLeft(false);
            console.log('слева никого');
        }


        if (
            (posPlayerX == posEnemyX + 1 && posPlayerY == posEnemyY)
            ||
            (posPlayerX == posEnemyXSecond + 1 && posPlayerY == posEnemyYSecond)
            ||
            (posPlayerX == posEnemyXThird + 1 && posPlayerY == posEnemyYThird)
            ||
            ((posPlayerX == 1 && posPlayerY == 0) && (posEnemyX == 0 && posEnemyY == 1))
        ) {
            setEnemyOnTheLeft(true)
            console.log('враг рядом (слева) ')
        }




        if ((posPlayerX == posEnemyX && posPlayerY == posEnemyY)
            ||
            (posPlayerX == posEnemyXSecond && posPlayerY == posEnemyYSecond)
            ||
            (posPlayerX == posEnemyXThird && posPlayerY == posEnemyYThird)
        ) { console.log('вас обнаружили') }




    }, [enemyAboveYou, enemyOnTheDown, enemyOnTheUp, enemyOnTheLeft, enemyOnTheRight, props.posPlayerX, props.posPlayerY, props.posEnemyX, props.posEnemyY, props.posEnemyXSecond, props.posEnemyYSecond, props.posEnemyXThird, props.posEnemyYThird]);




    const childRef = useRef();

    const [counter, setCounter] = useState(1);


    useEffect(() => {

        let randomPathеTrinar = Math.round(Math.random() * 2)
        let randomPathеBinar = Math.round(Math.random() * 1)

        if (counter === 2) {

            if ((posPlayerX === 0 && posPlayerY === 2) &&
                (posEnemyXSecond === 1 && posEnemyYSecond === 3) &&
                (posEnemyXThird === 2 && posEnemyYThird === 3)) {
                if (randomPathеBinar === 0) {
                    childRef.current.centralMoveSecond()// движение центрального
                    console.log(randomPathеBinar, 'бинарный рандом')
                }
                if (randomPathеBinar === 1) {
                    childRef.current.centralMoveFirst() // движение правого
                    console.log(randomPathеBinar, 'бинарный рандом')
                }
            }

            if ((posPlayerX === 1 && posPlayerY === 1) &&
                (posEnemyX === 0 && posEnemyY === 3) &&
                (posEnemyXSecond === 1 && posEnemyYSecond === 3) &&
                (posEnemyXThird === 2 && posEnemyYThird === 3)
            ) {
                if (randomPathеTrinar === 0) {
                    childRef.current.centralMoveSecond()// движение центрального
                }
                if (randomPathеTrinar === 1) {
                    childRef.current.centralMoveFirst() // движение правого
                }
                if (randomPathеTrinar === 2) {
                    childRef.current.centralMoveThird()// движение левого
                }
            }

            if ((posPlayerX === 2 && posPlayerY === 2) &&
                (posEnemyX === 0 && posEnemyY === 3) &&
                (posEnemyXSecond === 1 && posEnemyYSecond === 3)
            ) {
                if (randomPathеBinar === 0) {
                    childRef.current.centralMoveSecond()// движение центрального
                }
                if (randomPathеBinar === 1) {
                    childRef.current.centralMoveThird()// движение левого

                }
            }
        }

        if (counter === 3) {

            if ((posPlayerX === 0 && posPlayerY === 1) &&
                (posEnemyX === 0 && posEnemyY === 3) &&
                (posEnemyXThird === 2 && posEnemyYThird === 3)
            ) {
                if (randomPathеBinar === 0) {
                    childRef.current.centralMoveFirst() // движение правого
                }
                if (randomPathеBinar === 1) {
                    childRef.current.centralMoveThird()// движение левого
                }
            }


            if ((posPlayerX === 0 && posPlayerY === 1) &&
                (posEnemyX === 0 && posEnemyY === 3) &&
                (posEnemyXSecond === 1 && posEnemyYSecond === 3)
            ) {
                if (randomPathеBinar === 0) {
                    childRef.current.centralMoveSecond()// движение центрального
                }
                if (randomPathеBinar === 1) {
                    childRef.current.centralMoveThird()// движение левого
                }
            }


            if ((posPlayerX === 2 && posPlayerY === 1) &&
                (posEnemyXThird === 2 && posEnemyYThird === 3) &&
                (posEnemyX === 0 && posEnemyY === 3)
            ) {
                if (randomPathеBinar === 0) {
                    childRef.current.centralMoveThird()// движение левого
                }
                if (randomPathеBinar === 1) {
                    childRef.current.centralMoveFirst() // движение правого
                }
            }



            if ((posPlayerX === 2 && posPlayerY === 1) &&
                (posEnemyXThird === 2 && posEnemyYThird === 3) &&
                (posEnemyXSecond === 1 && posEnemyYSecond === 3)
            ) {
                if (randomPathеBinar === 0) {
                    childRef.current.centralMoveSecond()// движение центрального
                }
                if (randomPathеBinar === 1) {
                    childRef.current.centralMoveFirst() // движение правого
                }
            }

            if ((posPlayerX === 1 && posPlayerY === 2) &&
                (posEnemyX === 0 && posEnemyY === 3)
            ) {
                childRef.current.centralMoveThird()// движение левого
            }


            if ((posPlayerX === 2 && posPlayerY === 1) &&
                (posEnemyX === 0 && posEnemyY === 3) &&
                (posEnemyXSecond === 1 && posEnemyYSecond === 3)
            ) {
                if (randomPathеBinar === 0) {
                    childRef.current.centralMoveSecond()// движение центрального
                }
                if (randomPathеBinar === 1) {
                    childRef.current.centralMoveThird()// движение левого

                }
            }

            if ((posPlayerX === 0 && posPlayerY === 1) &&
                (posEnemyX === 0 && posEnemyY === 3) &&
                (posEnemyXSecond === 1 && posEnemyYSecond === 3)
            ) {
                if (randomPathеBinar === 0) {
                    childRef.current.centralMoveSecond()// движение центрального
                }
                if (randomPathеBinar === 1) {
                    childRef.current.centralMoveThird()// движение левого

                }
            }

            if ((posPlayerX === 1 && posPlayerY === 0) &&
                (posEnemyX === 0 && posEnemyY === 3) &&
                (posEnemyXSecond === 1 && posEnemyYSecond === 3)
            ) {
                if (randomPathеBinar === 0) {
                    childRef.current.centralMoveSecond()// движение центрального
                }
                if (randomPathеBinar === 1) {
                    childRef.current.centralMoveThird()// движение левого

                }
            }



            if ((posPlayerX === 1 && posPlayerY === 2) &&
                (posEnemyXThird === 2 && posEnemyYThird === 3)
            ) {
                childRef.current.centralMoveFirst() // движение правого
            }


            if ((posPlayerX === 0 && posPlayerY === 1) &&
                (posEnemyXThird === 2 && posEnemyYThird === 3) &&
                (posEnemyXSecond === 1 && posEnemyYSecond === 3)
            ) {
                if (randomPathеBinar === 0) {
                    childRef.current.centralMoveSecond()// движение центрального
                }
                if (randomPathеBinar === 1) {
                    childRef.current.centralMoveFirst() // движение правого


                }
            }

            if ((posPlayerX === 1 && posPlayerY === 0) &&
                (posEnemyXThird === 2 && posEnemyYThird === 3) &&
                (posEnemyXSecond === 1 && posEnemyYSecond === 3)
            ) {
                if (randomPathеBinar === 0) {
                    childRef.current.centralMoveSecond()// движение центрального
                }
                if (randomPathеBinar === 1) {
                    childRef.current.centralMoveFirst() // движение правого
                }
            }

            if ((posPlayerX === 1 && posPlayerY === 0) &&
                (posEnemyX === 0 && posEnemyY === 3) &&
                (posEnemyXThird === 2 && posEnemyYThird === 3)
            ) {
                if (randomPathеBinar === 0) {
                    childRef.current.centralMoveFirst() // движение правого
                }
                if (randomPathеBinar === 1) {
                    childRef.current.centralMoveThird()// движение левого

                }
            }
        }


        if (counter === 4) {
            if (((posPlayerX === 0 && posPlayerY === 1) ||
                (posPlayerX === 1 && posPlayerY === 1) ||
                (posPlayerX === 2 && posPlayerY === 1))
                &&
                (posEnemyXSecond === 1 && posEnemyYSecond === 3)
            ) {
                childRef.current.centralMoveSecond()// движение центрального
            }

            if (((posPlayerX === 0 && posPlayerY === 1) ||
                (posPlayerX === 1 && posPlayerY === 1) ||
                (posPlayerX === 2 && posPlayerY === 1))
                &&
                (posEnemyX === 0 && posEnemyY === 3)
            ) {
                childRef.current.centralMoveThird()// движение левого
            }

            if (((posPlayerX === 1 && posPlayerY === 0) ||
                (posPlayerX === 1 && posPlayerY === 1))
                &&
                (posEnemyXSecond === 1 && posEnemyYSecond === 3)
            ) {
                childRef.current.centralMoveSecond()// движение центрального

            }

            if ((posPlayerX === 0 && posPlayerY === 2)
                &&
                (posEnemyXThird === 2 && posEnemyYThird === 2)
            ) {
                childRef.current.centralMoveFirst() // движение правого
            }


            if ((posPlayerX === 1 && posPlayerY === 0)
                &&
                (posEnemyX === 0 && posEnemyY === 3)
            ) {
                childRef.current.centralMoveThird()// движение левого
            }

            if (((posPlayerX === 1 && posPlayerY === 0) ||
                (posPlayerX === 1 && posPlayerY === 1))
                &&
                (posEnemyXThird === 2 && posEnemyYThird === 3)
            ) {
                childRef.current.centralMoveFirst() // движение правого
            }


            if ((posPlayerX === 2 && posPlayerY === 1)
                &&
                (posEnemyXThird === 2 && posEnemyYThird === 3)
            ) {
                childRef.current.centralMoveFirst() // движение правого
            }

            if ((posPlayerX === 2 && posPlayerY === 2)
                &&
                (posEnemyX === 0 && posEnemyY === 2)
            ) {
                childRef.current.centralMoveThird()// движение левого
            }



        }

        if (counter === 5) {
            if ((posPlayerX === 1 && posPlayerY === 1) &&
                (posEnemyX === 0 && posEnemyY === 2) &&
                (posEnemyXThird === 2 && posEnemyYThird === 2)
            ) {
                if (randomPathеBinar === 0) {
                    childRef.current.centralMoveFirst() // движение правого
                }
                if (randomPathеBinar === 1) {
                    childRef.current.centralMoveThird()// движение левого

                }
            }



            if ((posPlayerX === 0 && posPlayerY === 1) &&
                (posEnemyXSecond === 1 && posEnemyYSecond === 2) &&
                (posEnemyXThird === 2 && posEnemyYThird === 2)
            ) {
                if (randomPathеBinar === 0) {
                    childRef.current.centralMoveFirst() // движение правого
                }
                if (randomPathеBinar === 1) {
                    childRef.current.centralMoveSecond()// движение центрального
                }
            }

            if ((posPlayerX === 2 && posPlayerY === 1) &&
                (posEnemyXSecond === 1 && posEnemyYSecond === 2) &&
                (posEnemyX === 0 && posEnemyY === 2)
            ) {
                if (randomPathеBinar === 0) {
                    childRef.current.centralMoveThird()// движение левого
                }
                if (randomPathеBinar === 1) {
                    childRef.current.centralMoveSecond()// движение центрального
                }
            }

            if ((posPlayerX === 0 && posPlayerY === 1)
                &&
                (posEnemyX === 0 && posEnemyY === 3)
            ) {
                childRef.current.centralMoveThird()// движение левого
            }


            if ((posPlayerX === 2 && posPlayerY === 1)
                &&
                (posEnemyXThird === 2 && posEnemyYThird === 3)
            ) {
                childRef.current.centralMoveFirst() // движение правого
            }



            if ((posPlayerX === 1 && posPlayerY === 0) &&
                (posEnemyX === 0 && posEnemyY === 2) &&
                (posEnemyXSecond === 1 && posEnemyYSecond === 2) &&
                (posEnemyXThird === 2 && posEnemyYThird === 2)
            ) {
                if (randomPathеTrinar === 0) {
                    childRef.current.centralMoveSecond()// движение центрального
                }
                if (randomPathеTrinar === 1) {
                    childRef.current.centralMoveFirst() // движение правого
                }
                if (randomPathеTrinar === 2) {
                    childRef.current.centralMoveThird()// движение левого
                }
            }
        }


        if (counter === 6) {

            if ((posPlayerX === 1 && posPlayerY === 1)
                &&
                (posEnemyX === 0 && posEnemyY === 2)
            ) {
                childRef.current.centralMoveThird()// движение левого
            }

            if ((posPlayerX === 0 && posPlayerY === 1)
                &&
                (posEnemyXSecond === 1 && posEnemyYSecond === 2)
            ) {
                childRef.current.centralMoveSecond()// движение центрального
            }


            if ((posPlayerX === 0 && posPlayerY === 1)
                &&
                (posEnemyXThird === 2 && posEnemyYThird === 2)
            ) {
                childRef.current.centralMoveFirst() // движение правого
            }


            if ((posPlayerX === 2 && posPlayerY === 1)
                &&
                (posEnemyX === 0 && posEnemyY === 2)
            ) {
                childRef.current.centralMoveThird()// движение левого

            }


            if ((posPlayerX === 1 && posPlayerY === 1)
                &&
                (posEnemyXThird === 2 && posEnemyYThird === 2)
            ) {
                childRef.current.centralMoveFirst() // движение правого
            }


            if ((posPlayerX === 2 && posPlayerY === 1)
                &&
                (posEnemyXSecond === 1 && posEnemyYSecond === 2)
            ) {
                childRef.current.centralMoveSecond()// движение центрального
            }


            if ((posPlayerX === 1 && posPlayerY === 0) &&
                (posEnemyX === 0 && posEnemyY === 2) &&
                (posEnemyXThird === 2 && posEnemyYThird === 2)
            ) {
                if (randomPathеBinar === 0) {
                    childRef.current.centralMoveFirst() // движение правого
                }
                if (randomPathеBinar === 1) {
                    childRef.current.centralMoveThird()// движение левого
                }
            }

            if ((posPlayerX === 1 && posPlayerY === 0) &&
                (posEnemyX === 0 && posEnemyY === 2) &&
                (posEnemyXSecond === 1 && posEnemyYSecond === 2)
            ) {
                if (randomPathеBinar === 0) {
                    childRef.current.centralMoveThird()// движение левого
                }
                if (randomPathеBinar === 1) {
                    childRef.current.centralMoveSecond()// движение центрального
                }
            }

            if ((posPlayerX === 1 && posPlayerY === 0) &&
                (posEnemyXThird === 2 && posEnemyYThird === 2) &&
                (posEnemyXSecond === 1 && posEnemyYSecond === 2)
            ) {
                if (randomPathеBinar === 0) {
                    childRef.current.centralMoveFirst() // движение правого
                }
                if (randomPathеBinar === 1) {
                    childRef.current.centralMoveSecond()// движение центрального
                }
            }
        }

        if (counter === 7) {

            if ((posPlayerX === 0 && posPlayerY === 1)
                &&
                (posEnemyXSecond === 1 && posEnemyYSecond === 1)
            ) {
                childRef.current.centralMoveSecond()// движение центрального
            }



            if ((posPlayerX === 1 && posPlayerY === 0)
                &&
                (posEnemyXSecond === 1 && posEnemyYSecond === 2)
            ) {
                childRef.current.centralMoveSecond()// движение центрального
            }




            if ((posPlayerX === 1 && posPlayerY === 0)
                &&
                (posEnemyX === 0 && posEnemyY === 2)
            ) {
                childRef.current.centralMoveThird()// движение левого
            }

            if ((posPlayerX === 1 && posPlayerY === 0)
                &&
                (posEnemyXThird === 2 && posEnemyYThird === 2)
            ) {
                childRef.current.centralMoveFirst() // движение правого
            }

            if ((posPlayerX === 2 && posPlayerY === 1)
                &&
                (posEnemyXSecond === 1 && posEnemyYSecond === 1)
            ) {
                childRef.current.centralMoveSecond()// движение центрального
            }

            if ((posPlayerX === 1 && posPlayerY === 1)
                &&
                (posEnemyX === 0 && posEnemyY === 1)
            ) {
                childRef.current.centralMoveThird()// движение левого
            }

        }
        if (counter === 8) {
            if ((posPlayerX === 0 && posPlayerY === 1)
                &&
                (posEnemyXSecond === 1 && posEnemyYSecond === 2)
            ) {
                childRef.current.centralMoveSecond()// движение центрального
            }


            if ((posPlayerX === 1 && posPlayerY === 1)
                &&
                (posEnemyX === 0 && posEnemyY === 2)
            ) {
                childRef.current.centralMoveThird()// движение левого

            }

            if ((posPlayerX === 1 && posPlayerY === 1)
                &&
                (posEnemyXThird === 2 && posEnemyYThird === 2)
            ) {
                childRef.current.centralMoveFirst() // движение правого
            }

        }




















    }, [counter, enemyAboveYou, enemyOnTheDown, enemyOnTheUp, enemyOnTheLeft, enemyOnTheRight, props.posPlayerX, props.posPlayerY, props.posEnemyX, props.posEnemyY, props.posEnemyXSecond, props.posEnemyYSecond, props.posEnemyXThird, props.posEnemyYThird]);








    function ButtonInVisible(props) {
        return <h1></h1>;
    }


    /* Скрытие кнопки вверх*/
    function ButtonUpVisible(props) {
        return <button className='btnPick' onClick={() => {
            // childRef.current.RandomEnemyMove()
            childRef.current.upMove();
            nextStep();
        }} >Вверх по карте</button>
    }
    function RenderButtonUp() {

        if ((props.posPlayerX == 1 && props.posPlayerY == 0)
            ||
            enemyOnTheUp === true) {
            return <ButtonInVisible />;
        }
        return <ButtonUpVisible />;
    }

    /* Рендер кнопки вниз*/
    function ButtonDownVisible() {
        return <button className='btnPick' onClick={() => {
            // childRef.current.RandomEnemyMove()
            childRef.current.downMove();
            nextStep();
        }} >Вниз по карте</button>
    }

    function RenderButtonDown() {

        if (enemyOnTheDown === true) {
            return <ButtonInVisible />;
        }
        else {
            return <ButtonDownVisible />;
        }
    }

    /* Скрытие кнопки влево*/
    function ButtonLeftVisible(props) {
        return <button className='btnPick' onClick={() => {
            // childRef.current.RandomEnemyMove()
            childRef.current.leftMove();
            nextStep();
        }} >Влево по карте</button>
    }
    function RenderButtonLeft() {

        if ((props.posPlayerX == 0 && props.posPlayerY == 1) ||
            (props.posPlayerX == 0 && props.posPlayerY == 2) ||
            (props.posPlayerX == 0 && props.posPlayerY == 3) ||
            enemyOnTheLeft === true) {
            return <ButtonInVisible />;
        }
        return <ButtonLeftVisible />;
    }


    /* Скрытие кнопки вправо*/
    function ButtonRightVisible(props) {
        return <button className='btnPick' onClick={() => {
            // childRef.current.RandomEnemyMove()
            childRef.current.rightMove();
            nextStep();
        }} >Вправо по карте</button>

    }
    function RenderButtonRight() {

        if ((props.posPlayerX == 2 && props.posPlayerY == 1) ||
            (props.posPlayerX == 2 && props.posPlayerY == 2) ||
            (props.posPlayerX == 2 && props.posPlayerY == 3) ||
            enemyOnTheRight === true) {
            return <ButtonInVisible />;
        }

        return <ButtonRightVisible />;
    }


    function nextStep() {
        setCounter(counter + 1)
        if (counter % 2 == 1) {
        }
    }




    return (
        <div>
            <div className='flexBox'>

                <div className='loginWindow'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consectetur accumsan arcu eget vehicula. Duis faucibus varius magna fermentum pulvinar. Nullam arcu ex, congue ut pulvinar in, aliquet non turpis. In consequat mauris in justo semper imperdiet. Pellentesque porttitor cursus augue, et placerat mi dignissim et. Sed vestibulum justo at sapien gravida, sed auctor odio porttitor. Morbi ac bibendum diam, in elementum eros. Duis commodo lacus eu nisi aliquam elementum in a sapien. Nunc tincidunt varius lorem, eu lacinia lacus vulputate eget. Aenean eu ligula id est lobortis facilisis sed sit amet ante. Aliquam pretium imperdiet neque vel euismod. Vivamus erat quam, varius eu odio vitae, malesuada placerat velit. Sed quis orci id urna porta vestibulum. Aenean metus orci, venenatis et erat fringilla, volutpat faucibus magna. Aenean tellus leo, volutpat quis facilisis a, euismod ac odio.
                </div>

                <div className='pictureWindow'>
                    <Timer />
                    <h1>{counter} - Текущий ход</h1>

                </div>

            </div>
            <div className='flexBox'>

                <div className='choiceWindow'>
                    <RenderButtonUp />
                    <RenderButtonDown enemyDown={false} />
                    <RenderButtonLeft />
                    <RenderButtonRight />
                </div>

                <div className='statusWindow'>
                    <MapBoxes
                        ref={childRef}

                        posPlayerX={props.posPlayerX}
                        posPlayerY={props.posPlayerY}

                        posEnemyX={props.posEnemyX}
                        posEnemyY={props.posEnemyY}

                        posEnemyXSecond={props.posEnemyXSecond}
                        posEnemyYSecond={props.posEnemyYSecond}

                        posEnemyXThird={props.posEnemyXThird}
                        posEnemyYThird={props.posEnemyYThird}

                        setPlayerX={props.setPlayerX}
                        setPlayerY={props.setPlayerY}
                        setEnemyX={props.setEnemyX}
                        setEnemyY={props.setEnemyY}
                        setEnemyXSecond={props.setEnemyXSecond}
                        setEnemyYSecond={props.setEnemyYSecond}
                        setEnemyXThird={props.setEnemyXThird}
                        setEnemyYThird={props.setEnemyYThird}

                    ></MapBoxes>


                </div>

            </div>
        </div>
    );
};

export default EnterWindow;