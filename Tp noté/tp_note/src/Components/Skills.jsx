import { useEffect, useState } from 'react';
import logo from '../Assets/logo.svg';
import photo from '../Assets/photo.png';
import '../Style/home.css';

function Skills(props) {

  const [titleResult, setTitleResult] = useState({
    Type: "Title",
    Text: "Compétences",
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

  const [skillResult, setSkillResult] = useState([{
    Type: "Skills",
    Title: "Compétence 1",
    Desc: "Compétence 1",
    id: "1",
    Lang: "FRA"
  },
  {
    Type: "Skills",
    Title: "Compétence 2",
    Desc: "Compétence 2",
    id: "2",
    Lang: "FRA"
  },
  {
    Type: "Skills",
    Title: "Compétence 3",
    Desc: "Compétence 3",
    id: "3",
    Lang: "FRA"
  }]) // Texte par défaut en Français

  useEffect(() => {
    if (props.langue === "FRA") {
      setTitleResult({
        Type: "Title",
        Text: "Compétences",
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
      setSkillResult([{
        Type: "Skills",
        Title: "Compétence 1",
        Desc: "Compétence 1",
        id: "1",
        Lang: "FRA"
      },
      {
        Type: "Skills",
        Title: "Compétence 2",
        Desc: "Compétence 2",
        id: "2",
        Lang: "FRA"
      },
      {
        Type: "Skills",
        Title: "Compétence 3",
        Desc: "Compétence 3",
        id: "3",
        Lang: "FRA"
      },
      {
        Type: "Skills",
        Title: "Compétence 3",
        Desc: "Compétence 3",
        id: "3",
        Lang: "FRA"
      },
      {
        Type: "Skills",
        Title: "Compétence 3",
        Desc: "Compétence 3",
        id: "3",
        Lang: "FRA"
      },
      {
        Type: "Skills",
        Title: "Compétence 3",
        Desc: "Compétence 3",
        id: "3",
        Lang: "FRA"
      }])
    } else {
      setTitleResult({
        Type: "Title",
        Text: "Skills",
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
      setSkillResult([{
        Type: "Skills",
        Title: "Skills 1",
        Desc: "Skills 1",
        id: "1",
        Lang: "ENG"
      },
      {
        Type: "Skills",
        Title: "Skills 2",
        Desc: "Skills 2",
        id: "2",
        Lang: "ENG"
      },
      {
        Type: "Skills",
        Title: "Skills 3",
        Desc: "Skills 3",
        id: "3",
        Lang: "ENG"
      }])
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
      <div>
        {[...skillResult].map((elem) => {
          return (
            <div className='mx-4'>
              <div className='border-top border-3 pt-4'><h3>{elem.Title}</h3></div>
              <div className='m-4'>{elem.Desc}</div>
            </div>
          )
        })}
        
      </div>
    </div>
  );
}

export default Skills;
