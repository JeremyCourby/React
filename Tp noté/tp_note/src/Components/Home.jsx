import { useEffect, useState } from 'react';
import logo from '../Assets/logo.svg';
import photo from '../Assets/photo.png';
import '../Style/home.css';

function Home(props) {

  const [titleResult, setTitleResult] = useState({
    Type: "Title",
    Text: "Bienvenue sur mon Portfolio",
    Lang: "FRA"
  }) // Texte par défaut en Français
  const [subTitleResult, setSubTitleResult] = useState({
    Type: "SubTitle",
    Text: "À propos de moi",
    Lang: "FRA"
  })
  const [subTitleResult2, setSubTitleResult2] = useState({
    Type: "SubTitle2",
    Text: "Expériences",
    Lang: "FRA"
  }) // Texte par défaut en Français
  const [descResult, setDescResult] = useState({
    Type: "Description",
    Text: "Je m'appelle Jérémy Courby. Diplômé d'un BTS SIO (Services Informatiques aux Organisations) dans l'option SLAM (Solutions Logicielles et Applications Métiers) qui consiste à concevoir des programmes / sites WEB destinés à la gestion d'une organisation et d'un diplôme BAC+3 : Bachelor Développement Web et Mobile, j'étudie actuellement à Esimed pour le diplôme BAC+5 : Expert en développement logiciel.",
    Lang: "FRA"
  }) // Texte par défaut en Français
  const [descResult2, setDescResult2] = useState({
    Type: "Description2",
    Text: "Les Etudes : BAC S, BTS SIO, ESIMED BAC+3, ESIMED BAC+5 \n Entreprises : Stages dans l'association Avilab, Alternance dans l'entreprise LSI",
    Lang: "FRA"
  }) // Texte par défaut en Français

  useEffect(() => {
    if (props.langue === "FRA") {
      setTitleResult({
        Type: "Title",
        Text: "Bienvenue sur mon Portfolio",
        Lang: "FRA"
      })
      setSubTitleResult({
        Type: "SubTitle",
        Text: "À propos de moi",
        Lang: "FRA"
      })
      setSubTitleResult2({
        Type: "SubTitle2",
        Text: "Expériences",
        Lang: "FRA"
      })
      setDescResult({
        Type: "Description",
        Text: "Je m'appelle Jérémy Courby. Diplômé d'un BTS SIO (Services Informatiques aux Organisations) dans l'option SLAM (Solutions Logicielles et Applications Métiers) qui consiste à concevoir des programmes / sites WEB destinés à la gestion d'une organisation et d'un diplôme BAC+3 : Bachelor Développement Web et Mobile, j'étudie actuellement à Esimed pour le diplôme BAC+5 : Expert en développement logiciel.",
        Lang: "FRA"
      })
      setDescResult2({
        Type: "Description2",
        Text: "Les Etudes : BAC S, BTS SIO, ESIMED BAC+3, ESIMED BAC+5 \n Entreprises : Stages dans l'association Avilab, Alternance dans l'entreprise LSI",
        Lang: "FRA"
      })
    } else {
      setTitleResult({
        Type: "Title",
        Text: "Welcome to my Portfolio",
        Lang: "ENG"
      })
      setSubTitleResult({
        Type: "SubTitle",
        Text: "About Me",
        Lang: "ENG"
      })
      setSubTitleResult2({
        Type: "SubTitle2",
        Text: "Experiences",
        Lang: "ENG"
      })
      setDescResult({
        Type: "Description",
        Text: "My name is Jérémy Courby. Graduate of a BTS SIO (IT Services for Organizations) in the SLAM option (Software Solutions and Business Applications) which consists of designing programs / WEB sites intended for the management of an organization and a BAC+3 diploma: Bachelor Web and Mobile Development, I am currently studying at Esimed for the BAC+5 diploma: Expert in software development.",
        Lang: "ENG"
      })
      setDescResult2({
        Type: "Description2",
        Text: "Studies: BAC S, BTS SIO, ESIMED BAC+3, ESIMED BAC+5 \n Companies: Internships in the Avilab association, Work-study program in the LSI company",
        Lang: "ENG"
      })
    }
  }, [props.langue])
  // useEffect(() => {

  //   fetch(`https://api/home/title?lang=${props.langue}`)
  //   .then(response => response.json())
  //   .then(data => {
  //     setTitleResult(data.Text);
  //   })
  //   .catch(error => {
  //     setTitleResult(titleResult);
  //   });

  //   fetch(`https://api/home/subtitle?lang=${props.langue}`)
  //   .then(response => response.json())
  //   .then(data => {
  //     setSubTitleResult(data.Text);
  //   })
  //   .catch(error => {
  //     setSubTitleResult(subTitleResult);
  //   });

  //   fetch(`https://api/home/desc?lang=${props.langue}`)
  //   .then(response => response.json())
  //   .then(data => {
  //     setDescResult(data.Text);
  //   })
  //   .catch(error => {
  //     setDescResult(descResult);
  //   });
  // })

  return (
    <div className="bg-body-secondary text-body align-items-center h-100" style={{ paddingTop: "3%" }}>
      <div className='center'><h1>{titleResult.Text}</h1></div>
      <div className='center'><img src={photo} className="img-rectangle border border-info border-4 rounded-circle"></img></div>
      <div className='d-flex justify-content-center'>
        <div className='d-flex flex-column justify-content-start align-items-center' style={{ width: "40%" }}>
          <div className='center border-top border-3 pt-4'><h3>{subTitleResult.Text}</h3></div>
          <div className='m-4'>{descResult.Text}</div>
        </div>
        <div className='d-flex flex-column justify-content-start align-items-center' style={{ width: "40%" }}>
          <div className='center border-top border-3 pt-4'><h3>{subTitleResult2.Text}</h3></div>
          <div className='m-4' style={{ whiteSpace: 'pre-line' }}>{descResult2.Text}</div>
        </div>
      </div>

    </div>
  );
}

export default Home;
