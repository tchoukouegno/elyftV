import homeHeader from "../assets/img/homeHeader.jpeg"
import LogoElyft from "../assets/logo/LogoElyft.jpg"
import "../styles/home.css";
import linkedin from "../assets/icons/linkedin.svg";
import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";







export function Header() {




    return(


        <header className="header-content" id="bloc-page">

            <img src={homeHeader} className="home-header" alt="home-header"/>

            <div className="nav-bar-content">

                {/* <img src={LogoElyft} alt="logo-elyft" className="logo"/> */}
                <div className="logo-text">LOGO</div>

                <nav>

                    <ul className="nav-bar">

                        <li><a href="#services">SERVICES</a></li>
                        <li>TECHNOLOGIES</li>
                        <li>A PROPOS</li>
                        <li>BLOG</li>

                    </ul>

                </nav>

            </div>

            <h1 className="home-title">Construire des Technologies qui Transforment Votre Business</h1>
            
            <div className="header-contact">

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