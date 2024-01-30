
import LogoElyft from "../assets/logo/LogoElyft.png";
import "../styles/home.css";
import linkedin from "../assets/icons/linkedin.svg";
import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import {useNavigate} from "react-router-dom";
import chevronDownSolid from "../assets/icons/chevronDownSolid.svg";
import { useState } from 'react';







export function Header({pageTitle, srcImg, headerDescription, textUp, active, activeServices, activeTech, activePropos, ancre, activeBlog}) {


    let navigate = useNavigate();

    const[change, setIsChange]=useState(false);

    const[language, setLanguage] = useState("Français");

    const[other, setOther]= useState("Anglais")


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

    const handleChange = ()=>{

      return  setIsChange(!change);

    }

    const handleOtherLanguage = ()=>{

        if(other === "French") {

            setOther("Anglais")

            return setLanguage("Français"), setIsChange(false);

        }


        setLanguage("English");

        setOther("French");

        return setIsChange(false);

    }




    return(


        <header className="header-content" id="bloc-page">

            <img src={srcImg} className="home-header" alt="home-header"/>

            <div className="nav-bar-content">

                <img src={LogoElyft} alt="logo-elyft" onClick={handleHome} className="logo"/>
               

                <nav>

                    <ul className="nav-bar">
                        <li className={active}><a onClick={handleHome}>ACCUEIL</a></li>
                        <li className={activeServices}><a onClick={handleServices} id={ancre}>SERVICES</a></li>
                        <li className={activeTech} onClick={handleTechno}>TECHNOLOGIES</li>
                        <li className={activePropos} onClick={handlePropos}>A PROPOS</li>
                        <li className="multi-langue" id="multi-langue" onClick={handleChange}>{language} <img src={chevronDownSolid} className="chevron-down"/></li>
                        

                    </ul>

                    <span onClick={handleOtherLanguage} className={change === true ?"change-language": "hidden"}>{other}</span>

                </nav>

            </div>

            <h1 className="home-title">{pageTitle}</h1>
            {/* <span className="header-text-description" id={textUp}>{headerDescription}</span> */}
            
            <div className="header-contact">

                <a className="btn-contact" href="#contact">CONTACTEZ-NOUS</a>

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