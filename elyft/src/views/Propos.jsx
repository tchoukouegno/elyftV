import { Header } from "../widgets/Header";
import pexelsPropos from "../assets/img/pexelsPropos.jpg"
import { Contact } from "../widgets/Contact";
import chartSimpleSolid from "../assets/icons/chartSimpleSolid.svg";
import humanCenter from "../assets/icons/humanCenter.png";
import technology from "../assets/icons/technology.png";
import icons8BalanceScale from "../assets/icons/icons8BalanceScale.png";
import authentic from "../assets/icons/authentic.png";




export function Propos () {



    return (

        <>
        
            <Header pageTitle="A propos de Elyft" srcImg={pexelsPropos} headerDescription="Depuis 2022, nous accompagnons les entreprises et leurs propriétaires en Afrique
            et en occident en construisant des applications qui boostent leurs croissances, créent de la proximité avec leurs collaborteurs
            et clients et améliorent l'expérience client et utilisateur." textUp="text-translate" activePropos="activePropos" />

            <section className="body-content">

                
                <h2 className="sub-section-title">UNIS AUTOUR D'UN PRINCIPE COMMUN</h2>
                
                <p className="apropos-text">Alignée sur nos constantes d'entreprise, notre équipe est constitué d'un groupe diversifié de développeurs, de designers et de créateurs de produits.
                    Certains membres de notre équipe ont toujours su que le developement de produits était fait pour eux; d'autres ont eu recours à une reconversion professionnelle 
                    en suivant des formations de codage et design chez nous. 
                </p>

                <div className="values-items">

                    <div className="value-bx">

                        <img src={humanCenter} alt="equité" className="value-item" />
                        <span className="value-team">L'humain au centre</span>

                    </div>

                    <div className="value-bx">

                         <img src={technology} alt="respect" className="value-item" />
                         <span className="value-team">Veille Technologique</span>

                    </div>

                    <div className="value-bx">

                         <img src={icons8BalanceScale} alt="excellence" className="value-item" />
                         <span className="value-team">L'équité prime</span>

                    </div >

                     <div className="value-bx">

                         <img src={authentic} alt="excellence" className="value-item" />
                         <span className="value-team">Authenticité</span>

                    </div>



                </div>

                <span className="section-title">Décrouvrer Une Equipe Dynamique</span>
                <h2 className="sub-section-title">Notre équipe</h2>
                <p className="team-word">Afin d'aider nos clients à atteindre leurs objectifs marketing et commerciaux, nous mettons à leurs disposition des solutions sur mesure...</p>


                <div className="slider-team">

                    <div className="person-name">

                        <div className="img-person"></div>
                        <span>prénom nom</span>

                    </div>

                    <div className="person-name">

                        <div className="img-person"></div>
                        <span>prénom nom</span>

                    </div>

                    <div className="person-name">

                        <div className="img-person"></div>
                        <span>prénom nom</span>

                    </div>

                    <div className="person-name">

                        <div className="img-person"></div>
                        <span>prénom nom</span>

                    </div>




                </div>

                <span className="indicator">...</span>



            </section>

            <Contact/>
        
        
        
        </>



    )



}