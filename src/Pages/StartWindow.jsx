import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import MapBoxes from '../Components/UI/boxes/MapBoxes';
import { useRef } from 'react';





const StartWindow = (props) => {
    const ref = React.createRef();
    const childRef = useRef()

    return (
        <div>
            <div className='flexBox'>

                <div className='loginWindow'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consectetur accumsan arcu eget vehicula. Duis faucibus varius magna fermentum pulvinar. Nullam arcu ex, congue ut pulvinar in, aliquet non turpis. In consequat mauris in justo semper imperdiet. Pellentesque porttitor cursus augue, et placerat mi dignissim et. Sed vestibulum justo at sapien gravida, sed auctor odio porttitor. Morbi ac bibendum diam, in elementum eros. Duis commodo lacus eu nisi aliquam elementum in a sapien. Nunc tincidunt varius lorem, eu lacinia lacus vulputate eget. Aenean eu ligula id est lobortis facilisis sed sit amet ante. Aliquam pretium imperdiet neque vel euismod. Vivamus erat quam, varius eu odio vitae, malesuada placerat velit. Sed quis orci id urna porta vestibulum. Aenean metus orci, venenatis et erat fringilla, volutpat faucibus magna. Aenean tellus leo, volutpat quis facilisis a, euismod ac odio.
                </div>

                <div className='pictureWindow'>
                    Duis commodo lacus eu nisi aliquam elementum in a sapien. Nunc tincidunt varius lorem, eu lacinia lacus vulputate eget. Aenean eu ligula id est lobortis facilisis sed sit amet ante.
                </div>

            </div>
            <div className='flexBox'>

                <div className='choiceWindow'>
                    <Link to="/start" className='btnPick'
                        onClick={() => { childRef.current.firstEnemyMove() }}
                    >Начать</Link>


                    <button className='btnPick'
                        onClick={() => {
                            childRef.current.firstEnemyMove()
                        }}
                    >  {props.children}Тест</button>


                </div>

                <div className='statusWindow'>
                    <MapBoxes ref={childRef} ></MapBoxes>


                </div>

            </div>
        </div>
    );

};

export default StartWindow;