import { Header } from "../widgets/Header";
import pexelsFauxels from "../assets/img/pexelsFauxels.jpg";
import { Contact } from "../widgets/Contact";
import {useNavigate, Outlet} from "react-router-dom";
import appdev from "../assets/img/appdev.svg";
import webapp from "../assets/img/webapp.svg";
import appPerso from "../assets/img/appPerso.svg";
import product from "../assets/img/product.svg";
import marketing from "../assets/img/marketing.jpg";
import ui from "../assets/img/ui.jpg";
import { useState, useEffect } from "react";











export function Services () {

    let navigate = useNavigate();

    
    const[change, setIsChange]=useState(false);

    const[language, setLanguage] = useState("Français");

    const[other, setOther]= useState("Anglais");

    useEffect(()=>{

        const  languageSelected = localStorage.getItem("languageSelected");

        if(languageSelected === "English") {

            return  setLanguage("English"), setOther("French");

        }

    },[]);

    const handleDetails = ()=>{

        return navigate('/services/detail');


    }

    const handleOtherLanguage = ()=>{

        if(other === "French") {

            setOther("Anglais");

            localStorage.setItem("languageSelected", "Français");
            
            return setLanguage("Français"), setIsChange(false);

        }


        setLanguage("English");

        localStorage.setItem("languageSelected", "English");

        setOther("French");

        return setIsChange(false);

    }

    const handleChange = ()=>{

        return  setIsChange(!change);
  
      }

    const arryServices = [{service:"Application mobile"},{service:"Application Web"}, {service:"site Web"}, {service:"Logiciel sur mesure"},
      {service:"Community Management "}, {service:"Référencement SEO"},]

      const arryServicesEnglish = [{service:"Mobile application"},{service:"Web application"}, {service:"Website"}, {service:"Custom software"},
      {service:"Community Management "}, {service:"SEO Search Engine"}, {service:"Optimization"}]



    return (


        <>

            <Header pageTitle= {language === "English" ? "Custom software development" : "Développement de logiciels personnalisés" } contact={language === "English" ? "CONTACT US" : "CONTACTEZ-NOUS" }  srcImg={pexelsFauxels} activeServices="activeServices" handleChange={handleChange} language={language} handleOtherLanguage={handleOtherLanguage} change={change} other={other} 
        accueil= {language === "English" ? "HOME" : "ACCUEIL"}  propos={language === "English" ? "ABOUT US" : "A PROPOS"} />

               <section className="body-content">

                    <h2 className="section-title">{language === "English" ? "Commitment to the quality of our IT services" : "Engagement envers la qualité de nos prestations informatiques"}</h2>
                    <h3 className="sub-section-title">{language === "English" ? "The solutions we offer" : "Les solutions que nous vous offrons"}</h3> 

                    <p className="value-txt">{language === "English" ? "Through the various digital solutions we design, you can get closer to your customers, understand them better, identify their needs, interact with them, increase their commitment and build loyalty." : "À travers les différentes solutions digitales que nous concevons, vous avez la possibilité de renforcer votre proximité avec vos clients, de mieux les comprendre, de cerner leurs besoins, d’interagir avec eux, d’augmenter leur engagement et de les fidéliser."}</p>

                    <div className="card-items">

                        <div className="card-item">

                            <img src={appdev} className="card-img"/>

                            <h2 className="card-title">{language === "English" ? "mobile Applications" : "applications mobiles"}</h2>

                            <span className="card-text">{language === "English" ? "Mobile applications have revolutionized the way we interact with technology, giving us fast, personalized access to a wide range of services, and features tailored to our individual needs." : "Les applications mobiles ont révolutionné la manière dont nous interagissons avec la technologie en nous offrant un accès rapide et personnalisé à une vaste gamme de services, et de fonctionnalités adaptées à nos besoins individuels."}</span>

                            <span className="plus" onClick={handleDetails}>{language === "English" ? "Read more" : "En savoir plus"}</span>

                        </div>

                        <div className="card-item">

                            <img src={webapp} className="card-img"/>

                            <h2 className="card-title">{language === "English" ? "web Applications" : "application web"}</h2>

                            <span className="card-text">{language === "English" ? "A web application is a software program or service accessible via an Internet browser, offering a range of functions and services without requiring download or installation on the user's device." : "Une application web est un logiciel ou un service accessible via un navigateur internet, offrant diverses fonctionnalités et services sans nécessiter de téléchargement ou d’installation sur l’appareil de l’utilisateur."}</span>

                            <span className="plus"  onClick={handleDetails}>{language === "English" ? "Read more" : "En savoir plus"}</span>

                        </div>

                        <div className="card-item">

                            <img src={appPerso} className="card-img"/>

                            <h2 className="card-title">{language === "English" ? "webSites" : "sites web"}</h2>

                            <span className="card-text">{language === "English" ? "A website is a valuable ally for any company. It provides an online presence, increased visibility, ease of communication and the opportunity to generate revenue, while building credibility and trust with customers." : "Un site web est un allié de choix pour une entreprise. En effet il lui apporte une présence en ligne, une visibilité accrue, une facilité de communication et la possibilité de générer des revenus, tout en renforçant la crédibilité et la confiance des clients."}</span>

                            <span className="plus"  onClick={handleDetails}>{language === "English" ? "Read more" : "En savoir plus"}</span>

                        </div>

                         <div className="card-item">

                            <img src={product} className="card-img"/>

                            <h2 className="card-title">{language === "English" ? "Custom software" : "logiciels sur mesure"} </h2>

                            <span className="card-text">{language === "English" ? "Custom software is software developed specifically to meet the particular needs of a company or individual. Unlike off-the-shelf software, custom software is designed with the precise needs and unique specifications of the end-user in mind." : "Un logiciel sur mesure est un logiciel développé spécifiquement pour répondre à des besoins particuliers d’une entreprise ou d’un individu. Contrairement aux logiciels prêts à l’emploi disponibles sur le marché, les logiciels sur mesure sont conçus en tenant compte des besoins précis et des spécifications uniques de l’utilisateur final"}</span>

                            <span className="plus"  onClick={handleDetails}>{language === "English" ? "Read more" : "En savoir plus"}</span>

                        </div>


                        <div className="card-item">

                            <img src={marketing} className="card-img"/>

                            <h2 className="card-title">community management</h2>

                            <span className="card-text">{language === "English" ? "Community Management is the essential tool for strengthening a company's online presence, increasing customer engagement, managing reputation and using community interactions to improve products and services, while boosting visibility and sales. It helps foster user engagement and maximize the impact of the company's activities on social networks." : "L’objectif principal du référencement SEO (Search Engine Optimization) est d’augmenter la quantité et la qualité du trafic vers un site web en augmentant sa visibilité pour les utilisateurs effectuant des recherches pertinentes sur des moteurs de recherche comme Google, Bing, Yahoo, etc."}</span>

                            <span className="plus"  onClick={handleDetails}>{language === "English" ? "Read more" : "En savoir plus"}</span>

                        </div>

                        <div className="card-item">

                            <img src={ui} className="card-img"/>

                            <h2 className="card-title">{language === "English" ? "SEO referencing" : "référencement seo"}</h2>

                            <span className="card-text">{language === "English" ? "The main aim of SEO (Search Engine Optimization) is to increase the quantity and quality of traffic to a website by increasing its visibility to users performing relevant searches on search engines such as Google, Bing, Yahoo, etc." : "Notre équipe utilise la conception centrée sur l'humain pour donné vie à votre vision, en s'appuyant sur la recherche, les parcours clients, les wireframes, le développement de guides de style, et bien plus encore...  "} </span>

                            <span className="plus"  onClick={handleDetails}>{language === "English" ? "Read more" : "En savoir plus"}</span>

                        </div>

                    </div>

               </section>
               
              

               <Contact arryServices= {language === "English" ? arryServicesEnglish  : arryServices } textContact={language === "English" ? "Do you have a project to complete, questions about our rates, suggestions or any other concerns, questions or requests? Leave us a message and we'll get back to you within 24 hours." : "Vous avez un projet à réaliser, des questions sur nos tarifs, des suggestions ou toute préoccupation, question ou demande? Laissez-nous un message, nous vous répondons sous 24 heures."} nom ={language === "English" ? "Name*" : "Nom*"} prenom={language === "English" ? "First name" : "Prénom*"}  telephone={language === "English" ? "Phone" : "Téléphone*"} interest={language === "English" ? "The service you're interested in*" : "Le service qui vous interesse*"} need={language === "English" ? "Your needs*" : "Votre besoin*"} send={language === "English" ? "SEND MESSAGE" : "Envoyer"}  
            textFooter1= {language === "English" ? "Take the plunge into the digital world! Why should you? Because betting on digital technology is a sure-fire way to win." : "Franchissez le pas, faites le grand saut dans l’univers du numérique! Pourquoi? Parce que parier sur le numérique c’est gagner à coup sûr."}
            textFooter2= {language === "English" ? "At ELYFT, we believe in one thing: technology has the power to facilitate and improve the quality of your processes in every aspect of your business. We work with you to design solutions that meet your real needs. Tailor-made, innovative solutions to make your life easier" : "Chez ELYFT nous croyons en une chose : la technologie a le pouvoir de faciliter, d’améliorer la qualité de vos processus dans tous les aspects de votre activité. Nous vous accompagnons dans la conception de solutions répondant à vos besoins réels. Des solutions sur mesure et innovantes qui vous faciliterons la vie"}
            mention= {language === "English" ? "Legal Notice" : "Mentions Légales"} adress={ language === "English" ? "Address" : "Adresse"} reservation={language === "English" ? "BOOK AN INTERVIEW"  : "Réserver une entrevue"}
            accueil= {language === "English" ? "HOME" : "ACCUEIL"}  propos={language === "English" ? "ABOUT US" : "A PROPOS"}/>
        
            {/* <Outlet/> */}
        
        
        
        </>





    )











}