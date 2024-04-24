import '../Style/App.css';
import Footer from './Footer';
import NavBar from './NavBar';
import Home from './Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Skills from './Skills';
import Projects from './Projects';

function App() {
  const [theme, setTheme] = useState("dark")

  function changeColor() {
    theme === "dark" ? setTheme("light") : setTheme("dark")
  }

  const [langueIMG, setLangueIMG] = useState(localStorage.getItem("Language"))

  const [buttonHomeResult, setButtonHomeResult] = useState({
    Type: "Button",
    Text: "Accueil",
    Lang: "FRA"
  }) // Texte par défaut en Français

  const changeLanguage = (langue) => {
    localStorage.setItem("Language", langue)
    setLangueIMG(langue)
  }

  return (
    <div className="bg-body-tertiary d-flex flex-column" style={{ height: "100vh" }} data-bs-theme={theme}>
      <NavBar changeColor={changeColor} changeLanguage={changeLanguage} langue={langueIMG} />
      <div className='flex-grow-1'>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home langue={langueIMG} />} />
            <Route path="/skills" element={<Skills langue={langueIMG} />} />
            <Route path="/projects" element={<Projects langue={langueIMG} />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
