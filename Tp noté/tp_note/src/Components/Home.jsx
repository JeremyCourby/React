import { useEffect, useState } from 'react';
import logo from '../Assets/logo.svg';
import photo from '../Assets/photo.jpg';
import '../Style/home.css';

function Home() {

  // const [homeResult, setHomeResult] = useState([{text : "Bienvenue sur mon Site"}]) // Texte par défaut en Français
  const [langueInput, setLangueInput] = useState('FRA')

  const [titleResult, setTitleResult] = useState({
    Type : "Title",
    Text : "Bienvenue sur mon Portfolio",
    Lang : "FRA"
  }) // Texte par défaut en Français
  const [subTitleResult, setSubTitleResult] = useState({
    Type : "SubTitle",
    Text : "À propos de moi",
    Lang : "FRA"
  }) // Texte par défaut en Français
  const [descResult, setDescResult] = useState({
    Type : "Description",
    Text : "Je m'appelle Jérémy Courby. Diplômé d'un BTS SIO (Services Informatiques aux Organisations) dans l'option SLAM (Solutions Logicielles et Applications Métiers) qui consiste à concevoir des programmes / sites WEB destinés à la gestion d'une organisation et d'un diplôme BAC+3 : Bachelor Développement Web et Mobile, j'étudie actuellement à Esimed pour le diplôme BAC+5 : Expert en développement logiciel.",//"Étudiant à Esimed, une école d'informatique, je me nomme Jérémy Courby",
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

      fetch(`https://api/home/title?lang=${langueInput}`)
      .then(response => response.json())
      .then(data => {
        setTitleResult(data.Text);
      })
      .catch(error => {
        setTitleResult(titleResult);
      });

      fetch(`https://api/home/subtitle?lang=${langueInput}`)
      .then(response => response.json())
      .then(data => {
        setSubTitleResult(data.Text);
      })
      .catch(error => {
        setSubTitleResult(subTitleResult);
      });

      fetch(`https://api/home/desc?lang=${langueInput}`)
      .then(response => response.json())
      .then(data => {
        setDescResult(data.Text);
      })
      .catch(error => {
        setDescResult(descResult);
      });
    })

  return (
    <div className="bg-body-secondary align-items-center" style={{minHeight: "1000px", paddingTop: "8%"}}>
        <div className='center'><h1>{titleResult.Text}</h1></div>
        <div className='center'><img src={photo} className="img-rectangle"></img></div>
        <div className='center border-top pt-4 w-25 '><h3>{subTitleResult.Text}</h3></div>
        <div className='center'>{descResult.Text}</div>
    </div>
  );
}

export default Home;
