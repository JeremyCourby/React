import { useEffect, useState } from 'react';
import '../Style/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FRA from '../Assets/FRA.png';
import ENG from '../Assets/ENG.png';

function NavBar(props) {

    const [buttonHomeResult, setButtonHomeResult] = useState({
        Type: "Button",
        Text: "Accueil",
        Lang: "FRA"
    }) // Texte par défaut en Français

    const [buttonSkillsResult, setButtonSkillResult] = useState({
        Type: "Button",
        Text: "Compétences",
        Lang: "FRA"
    }) // Texte par défaut en Français

    const [buttonProjectsResult, setButtonProjectsResult] = useState({
        Type: "Button",
        Text: "Projets",
        Lang: "FRA"
    }) // Texte par défaut en Français

    const [buttonBlogResult, setButtonBlogResult] = useState({
        Type: "Button",
        Text: "Blog",
        Lang: "FRA"
    }) // Texte par défaut en Français

    useEffect(() => {
        if (props.langue === "FRA") {
            setButtonHomeResult({
                Type: "Button",
                Text: "Accueil",
                Lang: "FRA"
            })
            setButtonSkillResult({
                Type: "Button",
                Text: "Compétences",
                Lang: "FRA"
            })
            setButtonProjectsResult({
                Type: "Button",
                Text: "Projets",
                Lang: "FRA"
            })
            setButtonBlogResult({
                Type: "Button",
                Text: "Blog",
                Lang: "FRA"
            })
        } else {
            setButtonHomeResult({
                Type: "Button",
                Text: "Home",
                Lang: "ENG"
            })
            setButtonSkillResult({
                Type: "Button",
                Text: "Skills",
                Lang: "ENG"
            })
            setButtonProjectsResult({
                Type: "Button",
                Text: "Projects",
                Lang: "ENG"
            })
            setButtonBlogResult({
                Type: "Button",
                Text: "Blog",
                Lang: "ENG"
            })
        }
    }, [props.langue])

    const [scrollPosition, setScrollPosition] = useState(0);
    const [navColor, setNavColor] = useState("transparent");

    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (scrollPosition > 20) {
            setNavColor("blur(10px)");
        } else {
            setNavColor("blur(0px)");
        }
    }, [scrollPosition]);

    return (<>
        {/* NavBar bootstrap */}
        <nav className="navbar navbar-expand-lg fixed-top border-bottom border-2" style={{
            transition: "background-color 0.3s ease",
            backdropFilter: navColor
        }}>
            <div className="container-fluid">
                <div className="dropdown mx-3">
                    <button className="btn dropdownlangue" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src={props.langue === "FRA" ? FRA : ENG} className="imgLangue"></img>
                    </button>
                    <ul className="dropdown-menu">
                        <li className='hover' onClick={() => props.changeLanguage("FRA")}><img src={FRA} className="imgLangue ms-3 m-2"></img> Français</li>
                        <li className='hover' onClick={() => props.changeLanguage("ENG")}><img src={ENG} className="imgLangue ms-3 m-2"></img> English</li>
                    </ul>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a href='/' className='nav-link'><button className="nav-link active border-start px-4 border-2" aria-current="page"><FontAwesomeIcon icon="fa-solid fa-house" className='me-3' />{buttonHomeResult.Text}</button></a>
                        </li>
                        <li className="nav-item">
                            <a href='/skills' className='nav-link'><button className="nav-link active border-start px-4 border-2" aria-current="page"><FontAwesomeIcon icon="fa-solid fa-brain" className='me-3' />{buttonSkillsResult.Text}</button></a>
                        </li>
                        <li className="nav-item">
                            <a href='/projects' className='nav-link'><button className="nav-link active border-start px-4 border-2" aria-current="page"><FontAwesomeIcon icon="fa-solid fa-list-check" className='me-3' />{buttonProjectsResult.Text}</button></a>
                        </li>
                        <li className="nav-item">
                            <a href='/blog' className='nav-link'><button className="nav-link active border-start px-4 border-2" aria-current="page"><FontAwesomeIcon icon="fa-solid fa-blog" className='me-3' />{buttonBlogResult.Text}</button></a>
                        </li>
                    </ul>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <button className="nav-link active mx-4 text-body border-start ps-4 border-2" aria-current="page" onClick={props.changeColor}><FontAwesomeIcon icon="fa-solid fa-moon" /></button>
                </div>
            </div>
        </nav>
    </>);
}

export default NavBar;
