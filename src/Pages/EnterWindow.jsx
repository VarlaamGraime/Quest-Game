import React from 'react';
import Timer from './../Components/Timer';
import MapBoxes from '../Components/UI/boxes/MapBoxes';
import { useRef } from 'react';



const EnterWindow = (props) => {

    const childRef = useRef()

    /* Скрытие кнопки вверх*/
    function ButtonUpVisible(props) {
        return <button className='btnPick' onClick={() => {
            childRef.current.upMove()
        }} >Вверх по карте</button>
    }

    function ButtonUpUnVisible(props) {
        return <h1></h1>;
    }

    function RenderButtonUp() {

        if (props.posPlayerX == 1 && props.posPlayerY == 0) {
            return <ButtonUpUnVisible />;
        }
        return <ButtonUpVisible />;
    }

    /* Рендер кнопки вниз*/
    function RenderButtonDown() {
        return <button className='btnPick' onClick={() => {
            childRef.current.downMove()
        }} >Вниз по карте</button>
    }

    /* Скрытие кнопки влево*/
    function ButtonLeftVisible(props) {
        return <button className='btnPick' onClick={() => {
            childRef.current.leftMove()
        }} >Влево по карте</button>
    }

    function ButtonLeftUnVisible(props) {
        return <h1></h1>;
    }

    function RenderButtonLeft() {

        if (props.posPlayerX == 0 && props.posPlayerY == 1 ||
            props.posPlayerX == 0 && props.posPlayerY == 2 ||
            props.posPlayerX == 0 && props.posPlayerY == 3) {
            return <ButtonLeftUnVisible />;
        }
        return <ButtonLeftVisible />;
    }


    /* Скрытие кнопки вправо*/
    function ButtonRightVisible(props) {
        return <button className='btnPick' onClick={() => {
            childRef.current.rightMove()
        }} >Вправо по карте</button>

    }

    function ButtonRightUnVisible(props) {
        return <h1></h1>;
    }

    function RenderButtonRight() {
        console.log(props.posPlayerX, props.posPlayerY)

        if (props.posPlayerX == 2 && props.posPlayerY == 1 ||
            props.posPlayerX == 2 && props.posPlayerY == 2 ||
            props.posPlayerX == 2 && props.posPlayerY == 3) {
            return <ButtonRightUnVisible />;
        }

        return <ButtonRightVisible />;
    }





    return (
        <div>
            <div className='flexBox'>

                <div className='loginWindow'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consectetur accumsan arcu eget vehicula. Duis faucibus varius magna fermentum pulvinar. Nullam arcu ex, congue ut pulvinar in, aliquet non turpis. In consequat mauris in justo semper imperdiet. Pellentesque porttitor cursus augue, et placerat mi dignissim et. Sed vestibulum justo at sapien gravida, sed auctor odio porttitor. Morbi ac bibendum diam, in elementum eros. Duis commodo lacus eu nisi aliquam elementum in a sapien. Nunc tincidunt varius lorem, eu lacinia lacus vulputate eget. Aenean eu ligula id est lobortis facilisis sed sit amet ante. Aliquam pretium imperdiet neque vel euismod. Vivamus erat quam, varius eu odio vitae, malesuada placerat velit. Sed quis orci id urna porta vestibulum. Aenean metus orci, venenatis et erat fringilla, volutpat faucibus magna. Aenean tellus leo, volutpat quis facilisis a, euismod ac odio.
                </div>

                <div className='pictureWindow'>
                    <Timer />
                </div>

            </div>
            <div className='flexBox'>

                <div className='choiceWindow'>
                    <RenderButtonUp />
                    <RenderButtonDown />
                    <RenderButtonLeft />
                    <RenderButtonRight />
                </div>

                <div className='statusWindow'>
                    <MapBoxes ref={childRef}
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