import { Header } from "../widgets/Header";
import pexelsPropos from "../assets/img/pexelsPropos.jpg"
import { Contact } from "../widgets/Contact";
import chartSimpleSolid from "../assets/icons/chartSimpleSolid.svg";
import humanCenter from "../assets/icons/humanCenter.png";
import technology from "../assets/icons/technology.png";
import icons8BalanceScale from "../assets/icons/icons8BalanceScale.png";
import authentic from "../assets/icons/authentic.png";
import developer1 from "../assets/img/developer1.jpg";
import developer2 from "../assets/img/developer2.jpg";
import appdev from "../assets/img/appdev.svg";
import { useState, useEffect } from "react";



export function Propos () {

    const[change, setIsChange]=useState(false);

    const[language, setLanguage] = useState("Français");

    const[other, setOther]= useState("Anglais");

    useEffect(()=>{

        const  languageSelected = localStorage.getItem("languageSelected");

        if(languageSelected === "English") {

            return  setLanguage("English"), setOther("French");

        }

    },[]);

    const handleOtherLanguage = ()=>{

        if(other === "French") {

            setOther("Anglais")

            localStorage.setItem("languageSelected", "Français");

            return setLanguage("Français"), setIsChange(false);

        };


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
        
            

            <Header pageTitle= {language === "English" ? "Our commitment to quality" : "Notre engagement envers la qualité des services fournis" } contact={language === "English" ? "CONTACT US" : "CONTACTEZ-NOUS" }  srcImg={pexelsPropos} activePropos="activePropos" handleChange={handleChange} language={language} handleOtherLanguage={handleOtherLanguage} change={change} other={other} 
        accueil= {language === "English" ? "HOME" : "ACCUEIL"}  propos={language === "English" ? "ABOUT US" : "A PROPOS"} />

            <section className="body-content">

                
                <h2 className="sub-section-title">{language === "English" ? "Transparency, communication and listening" : "Transparence, communication et écoute"}</h2>
                <h3 className="sub-section-title">{language === "English" ? "United by shared values" : "Unis autour de valeurs communes"}</h3>

                <div className="body-content-apropos">

                    <img src={appdev} alt="excellence"  />

                    <div>

                        <span className="apropos-text">{language === "English" ? "We are committed to creating digital solutions that humanize your online services. " : "Nous avons à cœur de créer des solutions digitales qui humanisent vos services en ligne. "}</span>

                        <span className="apropos-text">{language === "English" ? "Our mission is to accompany your company from point A to point B in its growth through the digitalization of its services." : "Notre mission est d’accompagner votre entreprise d’un point A à un point B dans sa croissance au travers de la digitalisation de ses services. "}</span>

                        <span className="apropos-text">{language === "English" ? "Our raison d'être is to guide and enlighten you towards a successful transition." : "Notre raison d’être est de vous guider et vous éclairer vers une transition réussie."}</span>

                        <span className="apropos-text">{language === "English" ? "ELYFT was created to provide robust digital solutions that solve business problems." : "ELYFT a été créée dans le but de fournir des solutions digitales robustes qui résolvent les problèmes des entreprises."}</span>

                    </div>

                </div>

                <h2 className="section-title">{language === "English" ? "A dynamic, agile team" : "Une équipe dynamique et agile"}</h2>
                <h3 className="sub-section-title">{language === "English" ? "The reason for our commitment" : "La raison de notre engagement"}</h3>
                <p className="team-word">{language === "English" ? "We believe that a digital solution should add value to your business. That's why we create tailor-made solutions that take your goals to the next level." : "Nous sommes convaincus qu’une solution digitale doit apporter de la valeur ajoutée à votre entreprise. C’est la raison pour laquelle nous réalisons pour vous des solutions sur-mesure qui vous permettront de franchir une étape supplémentaire dans vos objectifs."}</p>
                <p className="team-words">{language === "English" ? "We don't just create web and mobile applications, we create an extension of your company, a virtual dismemberment of your services." : "Nous ne créons pas juste des applications web et mobiles, nous créons une extension de votre entreprise, un démembrement virtuel de vos services."}</p>


                <div className="slider-team">

                    <div className="person-name">

                        <img src={developer1} className="img-person"/>
                        <span>prénom nom</span>

                    </div>

                    <div className="person-name">

                        <img src={developer2} className="img-person"/>
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


            </section>

            <Contact arryServices= {language === "English" ? arryServicesEnglish  : arryServices } textContact={language === "English" ? "Do you have a project to complete, questions about our rates, suggestions or any other concerns, questions or requests? Leave us a message and we'll get back to you within 24 hours." : "Vous avez un projet à réaliser, des questions sur nos tarifs, des suggestions ou toute préoccupation, question ou demande? Laissez-nous un message, nous vous répondons sous 24 heures."} nom ={language === "English" ? "Name*" : "Nom*"} prenom={language === "English" ? "First name" : "Prénom*"}  telephone={language === "English" ? "Phone" : "Téléphone*"} interest={language === "English" ? "The service you're interested in*" : "Le service qui vous interesse*"} need={language === "English" ? "Your needs*" : "Votre besoin*"} send={language === "English" ? "SEND MESSAGE" : "Envoyer"}  
            textFooter1= {language === "English" ? "Take the plunge into the digital world! Why should you? Because betting on digital technology is a sure-fire way to win." : "Franchissez le pas, faites le grand saut dans l’univers du numérique! Pourquoi? Parce que parier sur le numérique c’est gagner à coup sûr."}
            textFooter2= {language === "English" ? "At ELYFT, we believe in one thing: technology has the power to facilitate and improve the quality of your processes in every aspect of your business. We work with you to design solutions that meet your real needs. Tailor-made, innovative solutions to make your life easier" : "Chez ELYFT nous croyons en une chose : la technologie a le pouvoir de faciliter, d’améliorer la qualité de vos processus dans tous les aspects de votre activité. Nous vous accompagnons dans la conception de solutions répondant à vos besoins réels. Des solutions sur mesure et innovantes qui vous faciliterons la vie"}
            mention= {language === "English" ? "Legal Notice" : "Mentions Légales"} adress={ language === "English" ? "Address" : "Adresse"} reservation={language === "English" ? "BOOK AN INTERVIEW"  : "Réserver une entrevue"}
            accueil= {language === "English" ? "HOME" : "ACCUEIL"}  propos={language === "English" ? "ABOUT US" : "A PROPOS"}/>
        
        
        
        </>



    )



}