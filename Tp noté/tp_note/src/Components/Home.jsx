import { useEffect, useState } from 'react';
import logo from '../Assets/logo.svg';
import '../Style/App.css';

function Home() {

  // const [homeResult, setHomeResult] = useState([{text : "Bienvenue sur mon Site"}]) // Texte par défaut en Français
  const [langueInput, setLangueInput] = useState('FRA')

  const [titleResult, setTitleResult] = useState({
    Type : "Title",
    Text : "Bienvenue sur mon Site",
    Lang : "FRA"
  }) // Texte par défaut en Français
  const [descResult, setDescResult] = useState({
    Type : "Description",
    Text : "SHEEEESH",
    Lang : "FRA"
  }) // Texte par défaut en Français


  // const [skillResult, setSkillResult] = useState([{
  //   Type : "Skills",
  //   Desc : "Skill1",
  //   Lang : "FRA"
  // },
  // {
  //   Type : "Skills",
  //   Desc : "Skill2",
  //   Lang : "FRA"
  // },
  // {
  //   Type : "Skills",
  //   Desc : "Skill3",
  //   Lang : "FRA"
  // }]) // Texte par défaut en Français
  

    useEffect(() => {

      fetch(`https://api/home/title=${langueInput}`)
      .then(response => response.json())
      .then(data => {
        setTitleResult(data.Text);
      })
      .catch(error => {
        //setTitleResult([{text : "Bienvenue sur mon Site"}]); // Sans API
        setTitleResult([{text : "Pas de données"}]); // Avec API
      });

      fetch(`https://api/home/desc=${langueInput}`)
      .then(response => response.json())
      .then(data => {
        setDescResult(data.Text);
      })
      .catch(error => {
        //setDescResult([{text : "Bienvenue sur mon Site"}]); // Sans API
        setDescResult([{text : "Pas de données"}]); // Avec API
      });
    })

  return (
    <div className="navbar navbar-expand-lg bg-body-secondary d-flex justify-content-center" style={{height: "1080px"}}>
      <div>
        <header>
          <div style={{height: 300}}>
            {/* {homeResult.map(element => {return element.text; })} */}
            {titleResult.Text}
          </div>
          <div style={{height: 300}}>
            {/* {homeResult.map(element => {return element.text; })} */}
            {descResult.Text}
          </div>
        </header>
      </div>
    </div>
  );
}

export default Home;
