import { React, useState } from 'react';
import EnterWindow from './Pages/EnterWindow';
import { Routes, Route, Link } from 'react-router-dom'
import StartWindow from './Pages/StartWindow';


function App() {


  const [posPlayerX, setPlayerX] = useState(1);
  const [posPlayerY, setPlayerY] = useState(2);
  const [posEnemyX, setEnemyX] = useState(0);
  const [posEnemyY, setEnemyY] = useState(3);
  const [posEnemyXSecond, setEnemyXSecond] = useState(1);
  const [posEnemyYSecond, setEnemyYSecond] = useState(4);
  const [posEnemyXThird, setEnemyXThird] = useState(2);
  const [posEnemyYThird, setEnemyYThird] = useState(3);


  return (
    <div>
      <Routes>
        <Route path='' element=<StartWindow
          posPlayerX={posPlayerX}
          posPlayerY={posPlayerY}
          posEnemyX={posEnemyX}
          posEnemyY={posEnemyY}
          posEnemyXSecond={posEnemyXSecond}
          posEnemyYSecond={posEnemyYSecond}
          posEnemyXThird={posEnemyXThird}
          posEnemyYThird={posEnemyYThird}

          setPlayerX={setPlayerX}
          setPlayerY={setPlayerY}
          setEnemyX={setEnemyX}
          setEnemyY={setEnemyY}
          setEnemyXSecond={setEnemyXSecond}
          setEnemyYSecond={setEnemyYSecond}
          setEnemyXThird={setEnemyXThird}
          setEnemyYThird={setEnemyYThird}

        /> />
        <Route path='start' element=<EnterWindow
          posPlayerX={posPlayerX}
          posPlayerY={posPlayerY}
          posEnemyX={posEnemyX}
          posEnemyY={posEnemyY}
          posEnemyXSecond={posEnemyXSecond}
          posEnemyYSecond={posEnemyYSecond}
          posEnemyXThird={posEnemyXThird}
          posEnemyYThird={posEnemyYThird}

          setPlayerX={setPlayerX}
          setPlayerY={setPlayerY}
          setEnemyX={setEnemyX}
          setEnemyY={setEnemyY}
          setEnemyXSecond={setEnemyXSecond}
          setEnemyYSecond={setEnemyYSecond}
          setEnemyXThird={setEnemyXThird}
          setEnemyYThird={setEnemyYThird}
        /> />

      </Routes>

    </div>
  );
}

export default App;
