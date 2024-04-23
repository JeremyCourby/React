import '../Style/App.css';
import Footer from './Footer';
import NavBar from './NavBar';
import Home from './Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState("dark")

  function changeColor(){
    theme === "dark"?setTheme("light"):setTheme("dark")
  }

  return (
    <div className="bg-body-tertiary" data-bs-theme={theme}>
        <NavBar changeColor={changeColor} />
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                {/* <Route path='/2' element={<Page2 />} /> */}
            </Routes>
        </BrowserRouter>
        <Footer />
    </div>
  );
}

export default App;
