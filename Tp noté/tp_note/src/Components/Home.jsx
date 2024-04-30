import { useEffect, useState } from 'react';
import logo from '../Assets/logo.svg';
import photo from '../Assets/photo.png';

function Home(props) {

  const [titleResult, setTitleResult] = useState({})
  const [photoResult, setPhotoResult] = useState({})
  const [aboutResult, setAboutResult] = useState({})
  const [expResult, setExpResult] = useState({})

  useEffect(() => {
    if (props.langue === "FRA") {
      setTitleResult({
        Type: "Title",
        Text: "Bienvenue sur mon Portfolio",
        Lang: "FRA"
      })
      setPhotoResult({
        url: photo
      })
      setAboutResult({
        Type: "À propos de moi",
        Text: "Je m'appelle Jérémy Courby. Diplômé d'un BTS SIO (Services Informatiques aux Organisations) dans l'option SLAM (Solutions Logicielles et Applications Métiers) qui consiste à concevoir des programmes / sites WEB destinés à la gestion d'une organisation et d'un diplôme BAC+3 : Bachelor Développement Web et Mobile, j'étudie actuellement à Esimed pour le diplôme BAC+5 : Expert en développement logiciel.",
        Lang: "FRA"
      })
      setExpResult({
        Type: "Expériences",
        Text: "Les Etudes : BAC S, BTS SIO, ESIMED BAC+3, ESIMED BAC+5 \n Entreprises : Stages dans l'association Avilab, Alternance dans l'entreprise LSI",
        Lang: "FRA"
      })
    } else {
      setTitleResult({
        Type: "Title",
        Text: "Welcome to my Portfolio",
        Lang: "ENG"
      })
      setPhotoResult({
        url: photo
      })
      setAboutResult({
        Type: "About Me",
        Text: "My name is Jérémy Courby. Graduate of a BTS SIO (IT Services for Organizations) in the SLAM option (Software Solutions and Business Applications) which consists of designing programs / WEB sites intended for the management of an organization and a BAC+3 diploma: Bachelor Web and Mobile Development, I am currently studying at Esimed for the BAC+5 diploma: Expert in software development.",
        Lang: "ENG"
      })
      setExpResult({
        Type: "Experiences",
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
    <div className=" text-body align-items-center h-100" style={{paddingTop: "100px"}}>
      <div className='d-flex justify-content-center typewriter pt-4'><h1>{titleResult.Text}</h1></div>
      <div className='d-flex justify-content-center pt-4'><img className="img-rectangle border border-info border-4 rounded-circle aff-up-img" style={{minWidth:"300px", minHeight:"300px" }} src={photoResult.url} ></img></div>
      <div className='d-flex justify-content-center aff-up'>
        <div className='d-flex flex-column justify-content-start align-items-center pt-4' style={{ width: "40%" }}>
          <div className=' border-top border-3 pt-4'><h3>{aboutResult.Type}</h3></div>
          <div className='m-4'>{aboutResult.Text}</div>
        </div>
        <div className='d-flex flex-column justify-content-start align-items-center pt-4' style={{ width: "40%" }}>
          <div className='d-flex justify-content-center border-top border-3 pt-4'><h3>{expResult.Type}</h3></div>
          <div className='m-4' style={{ whiteSpace: 'pre-line' }}>{expResult.Text}</div>
        </div>
      </div>

    </div>
  );
}

export default Home;
