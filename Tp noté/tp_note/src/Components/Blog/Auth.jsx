import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Auth(props) {

  const [buttonAuthResult, setButtonAuthResult] = useState({})
  const [libAuthResult, setLibAuthResult] = useState({})
  const [libIdAuthResult, setLibIdAuthResult] = useState({})
  const [libMdpAuthResult, setLibMdpAuthResult] = useState({})

  const [userInput, setUserInput] = useState()
  const [passInput, setPassInput] = useState()

  useEffect(() => {
    if (props.langue === "FRA") {
      setButtonAuthResult({
        Type: "Button",
        Text: "Se connecter",
        Lang: "FRA"
      })
      setLibAuthResult({
        Type: "Lib",
        Text: "Connexion",
        Lang: "FRA"
      })
      setLibIdAuthResult({
        Type: "LibId",
        Text: "Identifiant",
        Lang: "FRA"
      })
      setLibMdpAuthResult({
        Type: "LibMdp",
        Text: "Mot de passe",
        Lang: "FRA"
      })
    } else {
      setButtonAuthResult({
        Type: "Button",
        Text: "Log In",
        Lang: "ENG"
      })
      setLibAuthResult({
        Type: "Lib",
        Text: "Connection",
        Lang: "ENG"
      })
      setLibIdAuthResult({
        Type: "LibId",
        Text: "Username",
        Lang: "ENG"
      })
      setLibMdpAuthResult({
        Type: "LibMdp",
        Text: "Password",
        Lang: "ENG"
      })
    }
  }, [props.langue])


  const [tokenResult, setTokenResult] = useState('')

  function login() {
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: userInput,
        password: passInput,
        expiresInMins: 24,
      })
    })
      .then(res => res.json())
      .then(data => {
        localStorage.setItem("Token", data.token)
        localStorage.setItem("UserID", data.id)
        setTokenResult(localStorage.getItem("Token"))
      });
  }

  useEffect(() => {
    if (tokenResult !== "") {
      window.location.href = '/blog';
    }
  }, [tokenResult])

  return (<>
    <div className="text-body align-items-center h-100 w-100 center" style={{ marginTop: "250px" }}>
      <div className="bg-body-secondary post2 w-25 carte">
        <h2 className="center border-bottom border-2 pb-4">{libAuthResult.Text}</h2>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon="fa-solid fa-user" /></span>
          <input type="text" className="form-control" value={userInput} onChange={(event) => setUserInput(event.target.value)} placeholder={libIdAuthResult.Text}></input>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon="fa-solid fa-key" /></span>
          <input type="password" className="form-control" value={passInput} onChange={(event) => setPassInput(event.target.value)} placeholder={libMdpAuthResult.Text}></input>
        </div>
        <div className="d-flex justify-content-center">
          <button className="btn center border border-2" type="button" onClick={() => login()}>{buttonAuthResult.Text} &nbsp;&nbsp;<FontAwesomeIcon icon="fa-solid fa-right-to-bracket" /></button>
        </div>
      </div>
    </div>
  </>);
}

export default Auth;
