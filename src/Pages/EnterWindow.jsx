import React from 'react';
import Timer from './../Components/Timer';
import ButtonPick from '../Components/UI/Button/ButtonPick';
import MapBoxes from '../Components/UI/boxes/MapBoxes';
import { useRef } from 'react';



const EnterWindow = () => {

    const childRef = useRef()


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
                    <button className='btnPick' onClick={() => {
                        childRef.current.upMove()
                    }} >Вверх по карте</button>
                    <button className='btnPick' onClick={() => {
                        childRef.current.downMove()
                    }} >Вниз по карте</button>
                    <button className='btnPick' onClick={() => {
                        childRef.current.leftMove()
                    }} >Влево по карте</button>
                    <button className='btnPick' onClick={() => {
                        childRef.current.rightMove()
                    }} >Вправо по карте</button>
                </div>

                <div className='statusWindow'>
                    <MapBoxes ref={childRef}  ></MapBoxes>


                </div>

            </div>
        </div>
    );
};

export default EnterWindow;