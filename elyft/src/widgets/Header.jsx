
import LogoElyft from "../assets/logo/LogoElyft.jpg"
import "../styles/home.css";
import linkedin from "../assets/icons/linkedin.svg";
import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import {useNavigate} from "react-router-dom";







export function Header({pageTitle, srcImg, headerDescription, textUp, active, activeServices, activeTech, activePropos, activeBlog}) {


    let navigate = useNavigate();

    const handleHome = ()=>{

      return  navigate('/home');

    }

    const handleTechno = ()=>{

        return navigate('/technologie');

    }

    const handlePropos = ()=>{

        return navigate('/apropos');

    }

    const handleBlog = ()=>{

        return navigate('/blog');

    }

    const handleServices = ()=>{

        return navigate('/services');

    }





    return(


        <header className="header-content" id="bloc-page">

            <img src={srcImg} className="home-header" alt="home-header"/>

            <div className="nav-bar-content">

                {/* <img src={LogoElyft} alt="logo-elyft" className="logo"/> */}
                <div onClick={handleHome} className="logo-text">LOGO</div>

                <nav>

                    <ul className="nav-bar">
                        <li className={active}><a onClick={handleHome}>ACCUEIL</a></li>
                        <li className={activeServices}><a onClick={handleServices}>SERVICES</a></li>
                        <li className={activeTech} onClick={handleTechno}>TECHNOLOGIES</li>
                        <li className={activePropos} onClick={handlePropos}>A PROPOS</li>
                        <li className={activeBlog} onClick={handleBlog}>BLOG</li>

                    </ul>

                </nav>

            </div>

            <h1 className="home-title">{pageTitle}</h1>
            
            <div className="header-contact">

                <span className="header-text-description" id={textUp}>{headerDescription}</span>

                <a className="btn-contact" href="#contact">Nous Contactez</a>

                <div className="social-media">

                    <img src={linkedin} alt="icon linkedin" className="likdn"/>
                    <img src={facebook} alt="icon facebook" className="fcbk"/>
                    <img src={instagram} alt="icon instagram" className="insta"/>

                </div>

            </div>

            <div className="filtre"></div>

        </header>


    )







}