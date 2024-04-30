import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Auth() {

  const [tokenResult, setTokenResult] = useState('')

  function login() {
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: 'kminchelle',
        password: '0lelplR',
        expiresInMins: 30,
      })
    })
      .then(res => res.json())
      .then(data => {
        localStorage.setItem("Token", data.token)
        setTokenResult(localStorage.getItem("Token"))
      });
  }
  
  useEffect(() => {
    if(tokenResult !== ""){
      window.location.href = '/blog';
    }
  }, [tokenResult])

  return (<>
    <div className="text-body align-items-center h-100 w-100 center" style={{ marginTop: "250px" }}>
      <div className="bg-body-secondary post2 w-25">
        <h2 className="center border-bottom border-2 pb-4">Connexion</h2>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon="fa-solid fa-user" /></span>
          <input type="text" className="form-control" placeholder="Identifiant" aria-label="Username" aria-describedby="basic-addon1"></input>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon="fa-solid fa-key" /></span>
          <input type="text" className="form-control" placeholder="Mot de passe" aria-label="Username" aria-describedby="basic-addon1"></input>
        </div>
        <div className="d-flex justify-content-center">
          <button className="btn center border border-2" type="button" onClick={() => login()}>Se connecter &nbsp;&nbsp;<FontAwesomeIcon icon="fa-solid fa-right-to-bracket" /></button>
        </div>
      </div>
    </div>
  </>);
}

export default Auth;
