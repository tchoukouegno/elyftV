import { Header } from "../widgets/Header";
import pexelsLukas from "../assets/img/pexelsLukas.jpg";
import professional from "../assets/img/professional.jpg";
import { Contact } from "../widgets/Contact";
import reactJs from "../assets/icons/reactJs.png";
import nodeJs from "../assets/icons/nodeJs.png";
import laravel from "../assets/icons/laravel.png";
import { useState, useEffect } from "react";




export function Techno () {

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

            <Header pageTitle= {language === "English" ? "Tailor-made software for companies" : "Des logiciels sur mesure pour les entreprises" } contact={language === "English" ? "CONTACT US" : "CONTACTEZ-NOUS" }  srcImg={pexelsLukas} activeTech="activeTech" handleChange={handleChange} language={language} handleOtherLanguage={handleOtherLanguage} change={change} other={other} 
                    accueil= {language === "English" ? "HOME" : "ACCUEIL"}  propos={language === "English" ? "ABOUT US" : "A PROPOS"} />
        
            <section className="body-content">

                <h2 className="section-title">{language === "English" ? "proven technologies" : "des technologies qui ont fait leurs preuves"}</h2>
                <h3 className="sub-section-title">{language === "English" ? "Tailor-made software is becoming essential as our society turns increasingly digital" : "Les logiciels sur mesure deviennent incontournables dans un contexte où la société se tourne progressivement vers le numérique "}</h3>

                <div className="techno-work">

                    <img src={professional} alt="professional man" className="techno-man"/>

                    <div>
                        
                        <span>{language === "English" ? "A mobile application, website or custom software are interfaces that present your company, products or services. They reflect your accessibility, flexibility and connectivity." : "Une application mobile, un site web ou un logiciel sur mesure sont des interfaces qui présentent votre entreprise, vos produits ou services. Ils traduisent votre accessibilité, votre flexibilité et votre connectivité. "}</span>
                        <span>{language === "English" ? "We use the most robust and appropriate technologies for each project. We regularly monitor technological developments to ensure that you benefit from the latest improvements in the technologies we use." : "Nous utilisons les technologies les plus robustes et les plus adaptées en fonction de chaque projet. Nous effectuons une veille technologique régulière pour vous faire profiter des améliorations les plus récentes dans les technologies employées."}</span>
                        
                    </div>
                    
                </div>

                <h2>{language === "English" ? "The ideal programming language for your project" : "Le langage de programmation idéal pour votre projet"}</h2>
                <h3 className="sub-section-title">{language === "English" ? "The technologies used" : "Les technologies utilisées"}</h3>

                <p className="techno-text">{language === "English" ? "Discover our technology stack, which includes all the tools and programming languages we use to develop your customized software and applications." : "Découvrez notre stack technologique, elle comprend tous les outils et langages de programmation que nous utilisons pour développer vos logiciels et applications sur mesure."}</p>

                <div className="values-items">

                    <div>

                        <img src={reactJs} alt="equité" className="values-item" />
                        <span>React JS</span>

                    </div>

                    <div>

                         <img src={nodeJs} alt="respect" className="values-item" />
                         <span>Node JS</span>

                    </div>

                    <div>

                         <img src={laravel} alt="excellence" className="values-item" />
                         <span>Laravel</span>

                    </div>

                     <div>

                         <img src={reactJs} alt="excellence" className="values-item" />
                         <span>React Native</span>

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