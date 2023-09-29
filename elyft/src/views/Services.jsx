import { Header } from "../widgets/Header";
import pexelsFauxels from "../assets/img/pexelsFauxels.jpg";
import { Contact } from "../widgets/Contact";
import {useNavigate, Outlet} from "react-router-dom";











export function Services () {

    let navigate = useNavigate();

    const handleDetails = ()=>{

        return navigate('/services/detail');


    }


    return (


        <>
        
            <Header pageTitle="Votre Transformation Numérique Commence Ici." srcImg={pexelsFauxels} headerDescription="Réimaginez Votre business avec des technologies sur-mesure, améliorer l'expérience client" activeServices="activeServices" />

               <section className="body-content">

                    <span className="section-title">NOS Services</span>
                    <h2 className="sub-section-title">Nous Pouvons Vous Aider</h2> 

                    <p className="value-txt">Vous cherchez peut-etre à mettre sur pied une nouvelle solution numérique pour vous rapprocher de vos clients,
                        ou a construire une technologie pour soutenir votre entreprise? Nous sommes là pour vous aider. Du developement d'une application mobile
                        à la refonte.
                    </p>

                    <div className="card-items">

                        <div className="card-item">

                            <div className="card-img"></div>

                            <span className="card-title">Développement D'Appli Mobile</span>

                            <span className="card-text">Une application web intuitive et conviviale peut aider votre équipe à devenir plus éfficace, stimuler l'engagement
                            des utilisateurs, vous différencier de la concurrence, et bien plus encore...  </span>

                            <span className="plus" onClick={handleDetails}>En savoir plus</span>

                        </div>

                        <div className="card-item">

                            <div className="card-img"></div>

                            <span className="card-title">Développement D'Appli Web</span>

                            <span className="card-text">Créez des applications mobiles et des sites web adaptés aux appareils avec lesquels nous interagissons le plus.
                            Notre approche unique permet de commercialiser votre application en 50% moins de temps que les autres agences...</span>

                            <span className="plus">En savoir plus</span>

                        </div>

                        <div className="card-item">

                            <div className="card-img"></div>

                            <span className="card-title">Logiciels Personnalisés</span>

                            <span className="card-text">Notre équipe utilise la conception centrée sur l'humain pour donné vie à votre vision, en s'appuyant
                            sur la recherche, les parcours clients, les wireframes, le développement de guides de style, et bien plus encore...  </span>

                            <span className="plus">En savoir plus</span>

                        </div>

                         <div className="card-item">

                            <div className="card-img"></div>

                            <span className="card-title">Stratégie de Produit</span>

                            <span className="card-text">Une stratégie déterminante pour le succès de votre produit. Notre équipe vous aide à construire  
                            un produit qui sera adopté par votre cible... </span>

                            <span className="plus">En savoir plus</span>

                        </div>


                        <div className="card-item">

                            <div className="card-img"></div>

                            <span className="card-title">Stratégie de Marketing </span>

                            <span className="card-text">Créez des applications mobiles et des sites web adaptés aux appareils avec lesquels nous interagissons le plus.
                            Notre approche unique permet de commercialiser votre application en 50% moins de temps que les autres agences... </span>

                            <span className="plus">En savoir plus</span>

                        </div>

                        <div className="card-item">

                            <div className="card-img"></div>

                            <span className="card-title">UX/UI Design</span>

                            <span className="card-text">Notre équipe utilise la conception centrée sur l'humain pour donné vie à votre vision, en s'appuyant
                            sur la recherche, les parcours clients, les wireframes, le développement de guides de style, et bien plus encore...   </span>

                            <span className="plus">En savoir plus</span>

                        </div>

                    </div>

               </section>
               
              

            <Contact/>
        
        
            {/* <Outlet/> */}
        
        
        
        </>





    )











}