import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [couleur, setCouleur] = useState("white")

  function changeColor(){
    setCouleur(`rgb(${Math.random() * 256},${Math.random() * 256},${Math.random() * 256})`)
  }

  return (<>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p style={{ color: couleur}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button onClick={changeColor}>Change Color</button>
        </header>
      </div>
    </>);
}

export default App;
