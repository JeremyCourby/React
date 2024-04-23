import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import App from './App';

function TP2() {

  const [rotate, setRotate] = useState('rotate(0)')

  function changeRotation(){
    setRotate(`rotate(${Math.floor(Math.random() * 360)}deg)`)
  }

  return (<>
      <App></App>
      <button onClick={changeRotation}>Change Rotation</button>
      <div className="App">
        <header className="App-header">
          <img src="https://starwalk.space/gallery/images/what-is-space/1140x641.jpg" style={{ transform: rotate }}/>
        </header>
      </div>
    </>);
}

export default TP2;
