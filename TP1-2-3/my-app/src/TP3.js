import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import App from './App';

function TP3() {

  const [searchResult, setSearchResult] = useState('')
  const [searchInput, setSearchInput] = useState('')
  
  const search = () => {
    fetch(`https://api.thecatapi.com/v1/images/search?api_key=live_1nfBNtjJNiDtrZBRAMaiL7zXDvRZY080JBS9O2PIX5eEYvWAmBFIP6wYja6yHeqz&breed_ids=${searchInput}&limit=1`)
        .then(response => response.json())
        .then(data => {
            setSearchResult(data[0].url);
        })
        .catch(error => {
            setSearchResult("Pas de chat");
        });
  }

  return (<>
      <div className="App">
        <header className="App-header">
          <textarea value={"test"}></textarea>
          <div><input value={ searchInput } onChange={(event) => setSearchInput(event.target.value)}></input><button onClick={search}>Rechercher</button></div>
          <div style={{height: 300}}><img style={{width: 400}} src={ searchResult }/></div>
        </header>
      </div>
    </>);
}

export default TP3;
