
import LogoElyft from "../assets/logo/LogoElyft.png";
import "../styles/home.css";
import linkedin from "../assets/icons/linkedin.svg";
import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import {useNavigate} from "react-router-dom";
import chevronDownSolid from "../assets/icons/chevronDownSolid.svg";
import { useState } from 'react';
import barsSolid from "../assets/icons/barsSolid.svg";







export function Header({pageTitle, contact, srcImg, headerDescription, textUp, active, activeServices, activeTech, activePropos, ancre, handleChange, language, handleOtherLanguage, change, other, accueil, propos}) {


    let navigate = useNavigate();

    

    const[menuBar, setIsmenuBar]=useState(false);

  

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

    

   

    const handleMenu = ()=>{

        setIsmenuBar(!menuBar);

    }




    return(


        <header className="header-content" id="bloc-page">

            <img src={srcImg} className="home-header" alt="home-header" id="LegalNotice"/>

            <div className="nav-bar-content">

                <img src={LogoElyft} alt="logo-elyft" onClick={handleHome} className="logo" id={ancre}/>
                <img src={barsSolid} alt="menu bars" onClick={handleMenu} className="menu-bars"/>
               
                {menuBar === true ? 

                <nav >

                    <ul className="nav-bar">
                        <li className={active}><a onClick={handleHome}>{accueil}</a></li>
                        <li className={activeServices}><a onClick={handleServices} id={ancre}>SERVICES</a></li>
                        <li className={activeTech} onClick={handleTechno}>TECHNOLOGIES</li>
                        <li className={activePropos} onClick={handlePropos}>{propos}</li>
                        <li className="multi-langue"  onClick={handleChange}>{language} <img src={chevronDownSolid} className="chevron-down"/></li>
                        

                    </ul>

                    <span onClick={handleOtherLanguage} className={change === true ?"change-language": "hidden"}>{other}</span>

                </nav>

                :
                
                <nav className="desktop-version">

                    <ul className="nav-bar">
                        <li className={active}><a onClick={handleHome}>{accueil}</a></li>
                        <li className={activeServices}><a onClick={handleServices} >SERVICES</a></li>
                        <li className={activeTech} onClick={handleTechno}>TECHNOLOGIES</li>
                        <li className={activePropos} onClick={handlePropos}>{propos}</li>
                        <li className="multi-langue" id="multi-langue" onClick={handleChange}>{language} <img src={chevronDownSolid} className="chevron-down"/></li>
                        

                    </ul>

                    <span onClick={handleOtherLanguage} className={change === true ?"change-language": "hidden"}>{other}</span>

                </nav>}


                

            </div>

            <h1 className="home-title">{pageTitle}</h1>
            {/* <span className="header-text-description" id={textUp}>{headerDescription}</span> */}
            
            <div className="header-contact">

                <a className="btn-contact" href="#contact">{contact}</a>

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