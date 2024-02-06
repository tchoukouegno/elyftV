import { useState, useEffect } from "react";
import { Contact } from "../widgets/Contact";
import { Header } from "../widgets/Header";
import pexelsLukas from "../assets/img/pexelsLukas.jpg";
import professional from "../assets/img/professional.jpg";
import {useNavigate,} from "react-router-dom";











export function LegalNotice() {


    const[change, setIsChange]=useState(false);

    const[language, setLanguage] = useState("Français");

    const[other, setOther]= useState("Anglais");

    let navigate = useNavigate();


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



















    return(


        <>
        
        <Header pageTitle= {language === "English" ? "Our commitment to quality" : "Notre engagement envers la qualité des services fournis" } contact={language === "English" ? "CONTACT US" : "CONTACTEZ-NOUS" }  srcImg={pexelsLukas}  handleChange={handleChange} language={language} handleOtherLanguage={handleOtherLanguage} change={change} other={other} 
                    accueil= {language === "English" ? "HOME" : "ACCUEIL"}  propos={language === "English" ? "ABOUT US" : "A PROPOS"} />
        
        <div className="bloc-page">

            <section className="body-content">

                <h2>{language === "English" ? "Legal Notice" : "Mentions légales"}</h2>

                <p>{language === "English" ? "Effective December 1, 2023." : "En vigueur au 1er décembre 2023."}</p>

                <p>{language === "English" ? "In accordance with the provisions of articles 6-III and 19 of the French Law n°2004-575 of June 21, 2004 for Confidence in the Digital Economy, known as L.C.E.N., users and visitors, hereinafter the “User” of the website https://www.elyft.tech, hereinafter the Site, are hereby informed of the present legal notice." : "Conformément aux dispositions des articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la Confiance dans l’économie numérique, dite L.C.E.N., il est porté à la connaissance des utilisateurs et visiteurs, ci-après l’« Utilisateur » du site  https://www.elyft.tech ci-après le « Site », les présentes mentions légales."}</p>

                <p>{language === "English" ? "Connection to and browsing of the Site by the User implies full and unreserved acceptance of these legal notices." : "La connexion et la navigation sur le Site par l’Utilisateur implique acceptation intégrale et sans réserve des présentes mentions légales."}</p>

                <p>{language === "English" ? "These legal notices are accessible on the Site under the heading Legal Notices." : "Ces dernières sont accessibles sur le site dans la rubrique « Mentions Légales »."}</p>

                <h3>{language === "English" ? "The publisher" : "L’éditeur"}</h3>

                <p>{language === "English" ? "The publisher of the https://www.elyft.tech website is ELYFT, a simplified joint stock company with share capital of 1000 Euros, registered with the Paris Trade and Companies Register under number 97907460600018 979 074 606, whose registered office is located at 26 Rue Bosquet, 75007 Paris, France. Intracommunity VAT no.: FR 04 979 074 606. Its e-mail address is contact@elyft.tech and it can be reached at +33 7 56 89 35 15." : "L’Hébergeur du site web https://www.elyft.tech est la société LWS (Ligne Web Services), SAS au capital de 500 000 €, immatriculée au RCS de Paris B 851 993 683, dont le siège social est situé au 10 Rue Penthièvre, 75008 Paris, France. Joignable au numéro suivant : +33 177 62 30 03."}</p>

                <h3>{language === "English" ? "Access to the website" : "Accès au site web"}</h3>

                <p>{language === "English" ? "The Site is accessible from anywhere, 7 days a week, 24 hours a day, except in cases of force majeure, scheduled or unscheduled interruptions, which may result from maintenance needs. In the event of modification, interruption, or suspension of the Site, the Editor cannot be held responsible." : "Le Site est accessible en tout endroit, 7j/7, 24h/24 sauf cas de force majeure, interruption programmée ou non et pouvant découler d’une nécessité de maintenance.En cas de modification, interruption ou suspension du Site, l’Editeur ne saurait être tenu responsable."}</p>

                <h3>{language === "English" ? "Cookies" : "Cookies"}</h3>

                <p>{language === "English" ? "The website https://www.elyft.tech does not use any cookies." : "Le Site https://www.elyft.tech n’utilise pas de Cookies."}</p>

                 <h3>{language === "English" ? "Data collection" : "Collecte des données"}</h3>

                <p>{language === "English" ? "The Site ensures to the User the collection and processing of personal information while respecting privacy in accordance with the law n° 78-17 of January 16, 1978, relating to information technology, files, and freedoms." : "e Site assure à l’Utilisateur une collecte et un traitement d’informations personnelles dans le respect de la vie privée conformément à la loi n° 78-17 du 16 janvier 1978 relative à l’informatique, aux fichiers et aux libertés."}</p>

                 <h3>{language === "English" ? "Intellectual Property" : "Propriété intellectuelle"}</h3>

                <p>{language === "English" ? "All trademarks, photographs, texts, comments, illustrations, images, whether animated or not, video sequences, sounds, as well as all computer applications that may be used to operate the Site, and more generally all elements reproduced or used on the Site are protected by current laws regarding intellectual property." : "Toutes les marques, photographies, textes, commentaires, illustrations, images animées ou non, séquences vidéo, sons, ainsi que toutes les applications informatiques qui pourraient être utilisées pour faire fonctionner le Site et plus généralement tous les éléments reproduits ou utilisés sur le Site sont protégés par les lois en vigueur au titre de la propriété intellectuelle."}</p>

                <p>{language === "English" ? "They are the full and complete property of the Publisher or its partners, except where specifically stated. Any reproduction, representation, use, or adaptation, in any form whatsoever, of all or part of these elements, including computer applications, without the prior written consent of the Publisher, is strictly prohibited. The fact that the Publisher does not initiate proceedings upon becoming aware of such unauthorized uses does not imply acceptance of said uses nor waiver of legal action." : "Ils sont la propriété pleine et entière de l'Editeur ou de ses partenaires, sauf mentions particulières. Toute reproduction, représentation, utilisation ou adaptation, sous quelque forme que ce soit, de tout ou partie de ces éléments, y compris les applications informatiques, sans l'accord préalable et écrit de l'Editeur, sont strictement interdites. Le fait pour l'Editeur de ne pas engager de procédure dès la prise de connaissance de ces utilisations non autorisées ne vaut pas acceptation desdites utilisations et renonciation aux poursuites."}</p>

                <p>{language === "English" ? "Only use for private purposes within a family circle is authorized, and any other use constitutes infringement and/or violation of neighboring rights, punishable by the Intellectual Property Code. Reproduction of all or part of this content requires prior authorization from the Publisher or the rights holder of said content." : "Seule l'utilisation pour un usage privé dans un cercle de famille est autorisée et toute autre utilisation est constitutive de contrefaçon et/ou d'atteinte aux droits voisins, sanctionnées par Code de la propriété intellectuelle.La reprise de tout ou partie de ce contenu nécessite l'autorisation préalable de l'Editeur ou du titulaire des droits sur ce contenu."}</p>

                <p>{language === "English" ? "Any use, reproduction, distribution, commercialization, or modification of all or part of the site without the Publisher's authorization is prohibited and may result in legal actions and proceedings as provided for by the Intellectual Property Code and the Civil Code." : "Toute utilisation, reproduction, diffusion, commercialisation, modification de toute ou partie du site, sans autorisation de l’Editeur est prohibée et pourra entrainer des actions et poursuites judiciaires telles que notamment prévues par le Code de la propriété intellectuelle et le Code civil."}</p>

                <h3>{language === "English" ? "Limitation of Liability" : "Limitation de responsabilité"}</h3>

                <p>{language === "English" ? "The information contained on this site is as accurate as possible and is periodically updated. However, it may contain inaccuracies, omissions, or deficiencies. If you notice a deficiency, error, or what appears to be a malfunction, please report it via email, describing the issue as precisely as possible (problematic page, triggered action, type of computer and browser used, etc.)." : "Les informations contenues sur ce site sont aussi précises que possibles et le site est périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes. Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir le signaler par email en décrivant le problème de la manière la plus précise possible (page posant problème, action déclenchante, type d’ordinateur et de navigateur utilisé, …)."}</p>

                

            </section>







        </div>


        
        
        
        
        
        <Contact arryServices= {language === "English" ? arryServicesEnglish  : arryServices } textContact={language === "English" ? "Do you have a project to complete, questions about our rates, suggestions or any other concerns, questions or requests? Leave us a message and we'll get back to you within 24 hours." : "Vous avez un projet à réaliser, des questions sur nos tarifs, des suggestions ou toute préoccupation, question ou demande? Laissez-nous un message, nous vous répondons sous 24 heures."} nom ={language === "English" ? "Name*" : "Nom*"} prenom={language === "English" ? "First name" : "Prénom*"}  telephone={language === "English" ? "Phone" : "Téléphone*"} interest={language === "English" ? "The service you're interested in*" : "Le service qui vous interesse*"} need={language === "English" ? "Your needs*" : "Votre besoin*"} send={language === "English" ? "SEND MESSAGE" : "Envoyer"}  
            textFooter1= {language === "English" ? "Take the plunge into the digital world! Why should you? Because betting on digital technology is a sure-fire way to win." : "Franchissez le pas, faites le grand saut dans l’univers du numérique! Pourquoi? Parce que parier sur le numérique c’est gagner à coup sûr."}
            textFooter2= {language === "English" ? "At ELYFT, we believe in one thing: technology has the power to facilitate and improve the quality of your processes in every aspect of your business. We work with you to design solutions that meet your real needs. Tailor-made, innovative solutions to make your life easier" : "Chez ELYFT nous croyons en une chose : la technologie a le pouvoir de faciliter, d’améliorer la qualité de vos processus dans tous les aspects de votre activité. Nous vous accompagnons dans la conception de solutions répondant à vos besoins réels. Des solutions sur mesure et innovantes qui vous faciliterons la vie"}
            mention= {language === "English" ? "Legal Notice" : "Mentions Légales"} adress={ language === "English" ? "Address" : "Adresse"} reservation={language === "English" ? "BOOK AN INTERVIEW"  : "Réserver une entrevue"}
            accueil= {language === "English" ? "HOME" : "ACCUEIL"}  propos={language === "English" ? "ABOUT US" : "A PROPOS"}/>
        
        
        
        
        </>





    )










}