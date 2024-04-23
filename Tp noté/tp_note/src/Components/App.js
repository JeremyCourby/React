import '../Style/App.css';
import Footer from './Footer';
import NavBar from './NavBar';
import Home from './Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div class="bg-body-tertiary" data-bs-theme='dark'>
        <NavBar />
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
