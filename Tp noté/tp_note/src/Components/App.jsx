import '../Style/App.css';
import Footer from './Footer';
import NavBar from './NavBar';
import Home from './Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Skills from './Skills';
import Projects from './Projects';
import fond from '../Assets/fond.jpg';
import fondblanc from '../Assets/fondblanc.jpg';
import Blog from './Blog';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("Theme"))
  const [backColor, setBackColor] = useState(localStorage.getItem("Theme") === "dark" ? `url(${fond}) fixed` : `url(${fondblanc}) fixed`);

  function changeColor() {
    if(theme === "dark"){
      setBackColor(`url(${fondblanc}) fixed`)
      localStorage.setItem("Theme", "light")
    }else{
      setBackColor(`url(${fond}) fixed`)
      localStorage.setItem("Theme", "dark")
    }
    setTheme(localStorage.getItem("Theme"))
  }

  const [langueIMG, setLangueIMG] = useState(localStorage.getItem("Language"))

  const changeLanguage = (langue) => {
    localStorage.setItem("Language", langue)
    setLangueIMG(langue)
  }

  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh",background: backColor }} data-bs-theme={theme}>
      <NavBar changeColor={changeColor} changeLanguage={changeLanguage} langue={langueIMG} />
      <div className='flex-grow-1 d-flex'>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home langue={langueIMG} />} />
            <Route path="/skills" element={<Skills langue={langueIMG} />} />
            <Route path="/projects" element={<Projects langue={langueIMG} />} />
            <Route path="/blog" element={<Blog langue={langueIMG} />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
