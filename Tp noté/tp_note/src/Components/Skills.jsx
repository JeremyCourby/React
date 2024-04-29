import { useEffect, useState } from 'react';
import logo from '../Assets/logo.svg';
import photo from '../Assets/photo.png';
import '../Style/home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Skills(props) {

  const [titleResult, setTitleResult] = useState({
    Type: "Title",
    Text: "Compétences",
    Lang: "FRA"
  }) // Texte par défaut en Français

  const [skillResult, setSkillResult] = useState([{}])
  const [skillLangLib, setLangLib] = useState([{}])
  const [skillAppLib, setSkillAppLib] = useState([{}])
  const [skillBDDLib, setSkillBDDLib] = useState([{}])
  const [skillAppResult, setSkillAppResult] = useState([{}])
  const [skillBDDResult, setSkillBDDResult] = useState([{}])

  useEffect(() => {
    if (props.langue === "FRA") {
      setTitleResult({
        Type: "TitleComp",
        Text: "Compétences",
        Lang: "FRA"
      })
      setLangLib({
        Type: "TitleLang",
        Text: "Langages",
        Lang: "FRA"
      })
      setSkillAppLib({
        Type: "TitleApp",
        Text: "Logiciels et applications",
        Lang: "FRA"
      })
      setSkillBDDLib({
        Type: "TitleApp",
        Text: "Gestion des données",
        Lang: "FRA"
      })
      setSkillResult([
        {
          Type: "Skills",
          Title: "JavaScript",
          Desc: "fa-brands fa-js",
          id: "1",
          Lang: "FRA"
        },
        {
          Type: "Skills",
          Title: "NodeJS",
          Desc: "fa-brands fa-node",
          id: "2",
          Lang: "FRA"
        },
        {
          Type: "Skills",
          Title: "REACT",
          Desc: "fa-brands fa-react",
          id: "30",
          Lang: "FRA"
        },
        {
          Type: "Skills",
          Title: "HTML",
          Desc: "fa-brands fa-html5",
          id: "3",
          Lang: "FRA"
        },
        {
          Type: "Skills",
          Title: "CSS",
          Desc: "fa-brands fa-css3-alt",
          id: "4",
          Lang: "FRA"
        },
        {
          Type: "Skills",
          Title: "PHP",
          Desc: "fa-brands fa-php",
          id: "5",
          Lang: "FRA"
        },
        {
          Type: "Skills",
          Title: "SQL",
          Desc: "fa-solid fa-database",
          id: "6",
          Lang: "FRA"
        },
        {
          Type: "Skills",
          Title: "Python",
          Desc: "fa-brands fa-python",
          id: "7",
          Lang: "FRA"
        },
        {
          Type: "Skills",
          Title: "C#",
          Desc: "fa-solid fa-c",
          id: "8",
          Lang: "FRA"
        },
        {
          Type: "Skills",
          Title: "Java",
          Desc: "fa-brands fa-java",
          id: "9",
          Lang: "FRA"
        },
        {
          Type: "Skills",
          Title: "WLangage",
          Desc: "fa-solid fa-w",
          id: "10",
          Lang: "FRA"
        }])
      setSkillAppResult([
        {
          Type: "Skills",
          Title: "VS 2019",
          id: "11",
          Lang: "FRA"
        },
        {
          Type: "Skills",
          Title: "VS Code",
          id: "12",
          Lang: "FRA"
        },
        {
          Type: "Skills",
          Title: "Android Studio",
          id: "13",
          Lang: "FRA"
        },
        {
          Type: "Skills",
          Title: "WAMP",
          id: "14",
          Lang: "FRA"
        },
        {
          Type: "Skills",
          Title: "LAMP",
          id: "15",
          Lang: "FRA"
        },
        {
          Type: "Skills",
          Title: "LEMP",
          id: "16",
          Lang: "FRA"
        },
        {
          Type: "Skills",
          Title: "WordPress",
          id: "17",
          Lang: "FRA"
        },
        {
          Type: "Skills",
          Title: "Filezilla",
          id: "18",
          Lang: "FRA"
        },
        {
          Type: "Skills",
          Title: "GitHub",
          id: "19",
          Lang: "FRA"
        },
        {
          Type: "Skills",
          Title: "Gdevelop 5",
          id: "20",
          Lang: "FRA"
        },
        {
          Type: "Skills",
          Title: "Godot",
          id: "21",
          Lang: "FRA"
        },
        {
          Type: "Skills",
          Title: "Windev",
          id: "22",
          Lang: "FRA"
        }])
      setSkillBDDResult([
        {
          Type: "Skills",
          Title: "MySQL",
          id: "23",
          Lang: "FRA"
        },
        {
          Type: "Skills",
          Title: "MariaDB",
          id: "24",
          Lang: "FRA"
        },
        {
          Type: "Skills",
          Title: "SQL serveur",
          id: "25",
          Lang: "FRA"
        },
        {
          Type: "Skills",
          Title: "Access",
          id: "26",
          Lang: "FRA"
        },
        {
          Type: "Skills",
          Title: "HFSQL",
          id: "27",
          Lang: "FRA"
        },
        {
          Type: "Skills",
          Title: "PostgreSQL",
          id: "28",
          Lang: "FRA"
        },
        {
          Type: "Skills",
          Title: "Oracle",
          id: "29",
          Lang: "FRA"
        }])
    } else {
      setTitleResult({
        Type: "Title",
        Text: "Skills",
        Lang: "ENG"
      })
      setLangLib({
        Type: "Title",
        Text: "Languages",
        Lang: "ENG"
      })
      setSkillAppLib({
        Type: "TitleApp",
        Text: "Software and applications",
        Lang: "ENG"
      })
      setSkillBDDLib({
        Type: "TitleApp",
        Text: "Data managment",
        Lang: "ENG"
      })
      setSkillResult([
        {
          Type: "Skills",
          Title: "JavaScript",
          Desc: "fa-brands fa-js",
          id: "1",
          Lang: "ENG"
        },
        {
          Type: "Skills",
          Title: "NodeJS",
          Desc: "fa-brands fa-node",
          id: "2",
          Lang: "ENG"
        },
        {
          Type: "Skills",
          Title: "REACT",
          Desc: "fa-brands fa-react",
          id: "30",
          Lang: "ENG"
        },
        {
          Type: "Skills",
          Title: "HTML",
          Desc: "fa-brands fa-html5",
          id: "3",
          Lang: "ENG"
        },
        {
          Type: "Skills",
          Title: "CSS",
          Desc: "fa-brands fa-css3-alt",
          id: "4",
          Lang: "ENG"
        },
        {
          Type: "Skills",
          Title: "PHP",
          Desc: "fa-brands fa-php",
          id: "5",
          Lang: "ENG"
        },
        {
          Type: "Skills",
          Title: "SQL",
          Desc: "fa-solid fa-database",
          id: "6",
          Lang: "ENG"
        },
        {
          Type: "Skills",
          Title: "Python",
          Desc: "fa-brands fa-python",
          id: "7",
          Lang: "ENG"
        },
        {
          Type: "Skills",
          Title: "C#",
          Desc: "fa-solid fa-c",
          id: "8",
          Lang: "ENG"
        },
        {
          Type: "Skills",
          Title: "Java",
          Desc: "fa-brands fa-java",
          id: "9",
          Lang: "ENG"
        },
        {
          Type: "Skills",
          Title: "WLangage",
          Desc: "fa-solid fa-w",
          id: "10",
          Lang: "ENG"
        }])
      setSkillAppResult([
        {
          Type: "Skills",
          Title: "VS 2019",
          id: "11",
          Lang: "ENG"
        },
        {
          Type: "Skills",
          Title: "VS Code",
          id: "12",
          Lang: "ENG"
        },
        {
          Type: "Skills",
          Title: "Android Studio",
          id: "13",
          Lang: "ENG"
        },
        {
          Type: "Skills",
          Title: "WAMP",
          id: "14",
          Lang: "ENG"
        },
        {
          Type: "Skills",
          Title: "LAMP",
          id: "15",
          Lang: "ENG"
        },
        {
          Type: "Skills",
          Title: "LEMP",
          id: "16",
          Lang: "ENG"
        },
        {
          Type: "Skills",
          Title: "WordPress",
          id: "17",
          Lang: "ENG"
        },
        {
          Type: "Skills",
          Title: "Filezilla",
          id: "18",
          Lang: "ENG"
        },
        {
          Type: "Skills",
          Title: "GitHub",
          id: "19",
          Lang: "ENG"
        },
        {
          Type: "Skills",
          Title: "Gdevelop 5",
          id: "20",
          Lang: "ENG"
        },
        {
          Type: "Skills",
          Title: "Godot",
          id: "21",
          Lang: "ENG"
        },
        {
          Type: "Skills",
          Title: "Windev",
          id: "22",
          Lang: "ENG"
        }])
      setSkillBDDResult([
        {
          Type: "Skills",
          Title: "MySQL",
          id: "23",
          Lang: "ENG"
        },
        {
          Type: "Skills",
          Title: "MariaDB",
          id: "24",
          Lang: "ENG"
        },
        {
          Type: "Skills",
          Title: "SQL serveur",
          id: "25",
          Lang: "ENG"
        },
        {
          Type: "Skills",
          Title: "Access",
          id: "26",
          Lang: "ENG"
        },
        {
          Type: "Skills",
          Title: "HFSQL",
          id: "27",
          Lang: "ENG"
        },
        {
          Type: "Skills",
          Title: "PostgreSQL",
          id: "28",
          Lang: "ENG"
        },
        {
          Type: "Skills",
          Title: "Oracle",
          id: "29",
          Lang: "ENG"
        }])
    }
  }, [props.langue])

  return (<>
    <div className="text-body d-flex flex-column align-items-center h-100" style={{ paddingTop: "100px" }}>
      <div><h1 className='aff-up'>{titleResult.Text}</h1></div>
      <div className='mt-5 border-top border-2 w-75'></div>
      <div className='mt-4 aff-up'><h2>{skillLangLib.Text}</h2></div>
      <div className='d-flex flex-wrap flex-row text-tertiary justify-content-center'>
        {skillResult.map((elem, index) => {
          return (
            <div key={index} className='bg-body-secondary border m-4 p-4 border-3 mx-4 d-flex flex-column align-items-center zoom carte' style={{ height: "180px", width: "200px" }}>
              <div><FontAwesomeIcon icon={elem.Desc} size='xl' /></div>
              <div><h3>{elem.Title}</h3></div>
            </div>
          )
        })}
      </div>
      <div className='mt-4 border-top border-2 w-75'></div>
      <div className='mt-4 aff-up'><h2>{skillAppLib.Text}</h2></div>
      <div className='d-flex flex-wrap flex-row text-tertiary justify-content-center'>
        {skillAppResult.map((elem, index) => {
          return (
            <div key={index} className='bg-body-secondary border m-4 p-4 border-3 mx-4 d-flex flex-column justify-content-center align-items-center zoom2 text-center carte' style={{ height: "180px", width: "200px" }}>
              {elem.Title}
            </div>
          )
        })}
      </div>
      <div className='mt-4 border-top border-2 w-75'></div>
      <div className='mt-4 aff-up'><h2>{skillBDDLib.Text}</h2></div>
      <div className='d-flex flex-wrap flex-row text-tertiary justify-content-center'>
        {skillBDDResult.map((elem, index) => {
          return (
            <div key={index} className='bg-body-secondary border m-4 p-4 border-3 mx-4 d-flex flex-column justify-content-center align-items-center zoom2 text-center carte' style={{ height: "180px", width: "200px" }}>
              {elem.Title}
            </div>
          )
        })}
      </div>
    </div>

  </>);
}

export default Skills;
