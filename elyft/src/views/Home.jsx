import { Header } from "../widgets/Header";
import chartSimpleSolid from "../assets/icons/chartSimpleSolid.svg";
import yougCoupleWork from "../assets/img/yougCoupleWork.jpg";
import girlCode from "../assets/img/girlCode.jpg";
import teamWork from "../assets/img/teamWork.jpg";
import pexelsDarlene from "../assets/img/pexelsDarlene.jpg";
import chevronRight from "../assets/icons/chevronRight.svg";
import usersSolid from "../assets/icons/usersSolid.svg";
import trophySolid from "../assets/icons/trophySolid.svg"
import { Contact } from "../widgets/Contact";
import {useNavigate,} from "react-router-dom";
import homeHeader from "../assets/img/homeHeader.jpg";
import icons8BalanceScale from "../assets/icons/icons8BalanceScale.png";
import icons8Respect from "../assets/icons/icons8Respect.png";
import icons8GraduationCap from "../assets/icons/icons8GraduationCap.png";
import icons8Android from "../assets/icons/icons8Android.png";
import icons8WebSite from "../assets/icons/icons8WebSite.png";
import icons8ImacSettings from "../assets/icons/icons8ImacSettings.png";
import icons8Design from "../assets/icons/icons8Design.png";
import { useState, useEffect } from "react";







export function Home() {


   

    const images = [pexelsDarlene, yougCoupleWork, girlCode];

    const textImages = ["Confier notre application à Elyft a été un vrai plaisir. Leur approche collaborative nous a permis de suivre l’avancement du projet et nous a beaucoup rassuré. Leurs développeurs ont une expertise technique avérée, nous n’avons pas eu de modifications à effectuer.",
"J’ai souvent eu recours aux services de Elyft en tant que développeur indépendant pour des collaborations ponctuelles. Leur savoir-faire, et leur maitrise de la méthodologie Agile ont été déterminants dans la réussite de mes projets.","Nous disposions d’un délai serré pour mettre sur pieds la 1ère version de notre produit, qui devait être présenté à des investisseurs pour une levée de fonds. L’équipe de développeurs de Elyft a dépassé nos attentes, en termes de respect des délais, de qualité du travail et de flexibilité. Leur efficacité a été cruciale et a contribué au bon lancement de notre produit."];

    const nameComment=["Diane Boissel","Michel Tagne","Sylvestre Barreau"];

    const postCustomer=["Directrice Technique chez Xaana","Freelance Développeur Front-end ","Responsable des Systèmes d’Information de la Startup Laby"];


    const [slide, setSlide] = useState(0);

    const [slideText, setSlideText] = useState(0);

    const [slideName, setSlideName] = useState(0);

    const [slidePost, setSlidePost] = useState(0);

    const[change, setIsChange]=useState(false);

    const[language, setLanguage] = useState("Français");

    const[other, setOther]= useState("Anglais");


    const [isInitialPosition, setIsInitialPosition] = useState(true)

 

    useEffect(() => {

        const  languageSelected = localStorage.getItem("languageSelected");

        if(languageSelected === "English") {

            return  setLanguage("English"), setOther("French");

        }

        const interval = setInterval(() => {


            if (isInitialPosition === true) {

                setSlide((prevImage) => (prevImage + 1) % images.length);
                setSlideText((prevImage) => (prevImage + 1) % images.length);
                setSlideName((prevImage) => (prevImage + 1) % images.length);
                setSlidePost((prevImage) => (prevImage + 1) % images.length);


            }



               

         
          
        }, 10000); // Change image every 10 seconds
    
        return () => clearInterval(interval);
      }, [isInitialPosition, images.length]);


    

    const nextImage = () => {

        setIsInitialPosition(false);
        setSlide((prevImage) => (prevImage + 1) % images.length);
        setSlideText((prevImage) => (prevImage + 1) % images.length);
        setSlideName((prevImage) => (prevImage + 1) % images.length);
        setSlidePost((prevImage) => (prevImage + 1) % images.length);
      };

     

   


    let navigate = useNavigate();

    const handleServices = ()=>{

      return  navigate('/services');

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

    return(


        <>

       
        
        
        <Header pageTitle= {language === "English" ? "MOBILE APPLICATION DEVELOPMENT FOR ANDROID AND IOS" : "DEVELOPPEMENT D’APPLICATIONS MOBILES POUR ANDROID ET IOS" } contact={language === "English" ? "CONTACT US" : "CONTACTEZ-NOUS" }  srcImg={homeHeader} active="active" handleChange={handleChange} language={language} handleOtherLanguage={handleOtherLanguage} change={change} other={other} 
        accueil= {language === "English" ? "HOME" : "ACCUEIL"}  propos={language === "English" ? "ABOUT US" : "A PROPOS"}/>

         <div className="bloc-page">

           <section className="body-content">

                <h2>{language === "English" ? "Digital solutions that make your life easier" : "Des solutions digitales qui vous facilitent la vie"}</h2>

                <p>{language === "English" ? "Custom software has become essential in today's competitive, digitally-oriented world." : "Les logiciels personnalisés sont devenus incontournables dans un monde tourné vers le numérique et concurrentiel"}</p>

                <div className="help-customer-content">

                    <div className="help-customer-items">

                        <div className="help-customer">

                            <img src={chartSimpleSolid} alt="icon-illustrator" className="icon-illustrator"/>
                            <span>{language === "English" ? "Professional and customized software design" : "Conception de logiciels professionnels et personnalisés"}</span>

                        </div>

                        <div className="help-customer">

                            <img src={usersSolid} alt="icon-illustrator" className="icon-illustrator"/>
                            <span>{language === "English" ? "Customer-focused approach for tailor-made solutions" : "Approche axée sur le client pour des solutions sur mesure"}</span>

                        </div>

                        <div className="help-customer">

                            <img src={trophySolid} alt="icon-illustrator" className="icon-illustrator"/>
                            <span>{language === "English" ? "Highly qualified and experienced team" : "Equipe hautement qualifiée et expérimentée"}</span>

                        </div>

                    </div>

                    <div className="proximity-customer">

                        <img src={yougCoupleWork} alt="proximity-customer" />
                        <span>{language === "English" ? "Gain notoriety, get ahead of your competitors!" : "Gagnez de la notoriété, prenez de l’avance sur vos concurrents !"}</span>
                        <div className="filtre"></div>

                    </div>

                </div>
       
                <>
                    <h2 className="section-title">{language === "English" ? "Constant innovation in our IT solutions" : "Innovation constante dans nos solutions informatiques"}</h2> 

                    <div className="sub-section">

                        <h3 className="sub-section-title">{language === "English" ? "What drives us" : "Ce qui nous animes"}</h3> 
                        <span className="sub-section-underline"></span>  

                    </div>

                    <p className="value-txt">{language === "English" ? "To simplify your life and provide you with a digital service you'll be proud of. In short, to make digital simple and accessible. At ELYFT, we do good work, and we put our hearts into it. This commitment to quality and innovation drives us to design tailor-made software solutions." : "Vous simplifier la vie, vous fournir une prestation digitale dont vous serez fier(e). Bref, vous rendre le digital simple et accessible. Chez ELYFT nous faisons du bon travail, et nous y mettons du coeur. Cet engagement dans la qualité et l’innovation, nous pousse à concevoir des solutions logicielles sur mesure."}</p>
                    <p className="value-txt">{language === "English" ? "Putting people at the heart of what we do is what enables us to build trusting relationships with our customers. Helping them develop an online presence envied by their competitors." : "Mettre l’humain au centre de nos activités, c’est ce qui nous permet de batir des relations de confiance avec nos clients. Les aider à développer une présence en ligne enviée par leurs concurrents"}</p>         
                
                    <div className="values-items">

                        <div className="value-bx">

                            <img src={icons8BalanceScale} alt="equité" className="value-item" />
                            <span>{language === "English" ? "responsiveness" : "Réactivité"}</span>

                        </div>

                        <div className="value-bx">

                            <img src={icons8Respect} alt="respect" className="value-item" />
                            <span>{language === "English" ? "Innovation" : "Innovation"}</span>

                        </div>

                        <div className="value-bx">

                            <img src={icons8GraduationCap} alt="excellence" className="value-item" />
                            <span>{language === "English" ? "Quality" : "Qualité"}</span>

                        </div>


                    </div>
                </>

                <>
                
                    <h2 className="section-title" id="services">{language === "English" ? "Training and continuous skills development" : "Formation et développement continu des compétences"}</h2>

                    <div className="sub-section">

                        <h3 className="sub-section-title">{language === "English" ? "What we offer" : "Ce que nous proposons"}</h3> 
                        <span className="sub-section-underline"></span>

                    </div>

                    <p className="description">{language === "English" ? "Nothing is planned in advance : we adapt to you, your issues and your needs. Our aim is to provide you with a digital solution that's adapted to your situation, easy to use and that adds value to your business." : "Rien n’est prévu à l’avance, nous nous adaptons à vous, à votre problématique, à votre besoin. L’objectif est de vous fournir une solution digitale adaptée à votre situation, facile à prendre en main et qui apporte une plus-value à votre entreprise."}</p>  
                
                    <div className="values-items">

                        <div className="service">

                            <img src={icons8Android} alt="application mobile" className="value-item" />
                            <h3>{language === "English" ? "mobile Applications" : "Application Mobile"}</h3>

                        </div>

                        <div className="service">

                            <img src={icons8WebSite} alt="application web" className="value-item" />
                            <h3>{language === "English" ? "web Applications" : "Application web"}</h3>

                        </div>

                        <div className="service">

                            <img src={icons8ImacSettings} alt="excellence" className="value-item" />
                            <h3>{language === "English" ? "custom software" : "Logiciel sur mesure"}</h3>

                        </div>

                        <div className="service">

                            <img src={icons8Design} alt="excellence" className="value-item" />
                            <h3>{language === "English" ? "websites" : "site web"}</h3>

                        </div>

                            
                    </div>
                    
                    <div className="slider-indicator">

                        <button onClick={handleServices} className="services"><a href="#service">{language === "English" ? "view services" : "Voir les services"}</a></button>

                    </div>
                
                </>

                <div className="offshore-content">

                    <h2>{language === "English" ? "Developers for your major projects" : "Des développeurs pour vos gros projets"}</h2>

                    <div className="sub-section">

                        <span className="sub-section-title">{language === "English" ? "Seize the opportunity to ..." : "Saisissez l’opportunité de ..."}</span>  
                        <span className="sub-section-underline" id="section-underline"></span>

                    </div>

                    <p>{language === "English" ? "Finding truly competent and professional developers for your ambitious project can be a real challenge." : "Trouver des développeurs vraiment compétents et professionnels, lorsque vous avez un projet ambitieux peut s’avérer être un véritable chemin de croix."}</p>

                    <div className="offshore-sub-content">

                        <div className="offshore-content-text-picture">

                            <div>

                                <p>{language === "English" ? "Do you need to develop custom software or a mobile application? ELYFT lets you work with experienced developers in France or offshore, as you prefer, and enjoy the benefits of both." : "Vous avez besoin de faire développer un logiciel sur mesure ou une application mobile ? ELYFT vous permet de travailler avec des développeurs chevronnés en France ou en offshore, selon votre convenance, et de profiter des avantages liés aux deux différents cas de figure."}</p>
                                <p>{language === "English" ? "Working with professionals saves you time and energy, and protects you from poorly thought-out software architecture and costly errors." : "travailler avec des professionnels vous fait économiser du temps, de l’énergie, et vous met à l’abri d’une architecture logicielle mal pensée, ou d’erreurs coûteuses."} </p>


                            </div>

                            <img src={girlCode} alt="" className="offshore-picture" />

                            <div >

                               



                            </div>


                        </div>

                        <div className="offshore-other-text">

                        <span className="offshore-text">{language === "English" ? "Take advantage of our responsive and agile teams of developers (frontend and backend), who communicate with you constantly throughout the project, right up to production launch." : "Profitez de nos équipes de développeurs (frontend et backend) réactifs et agiles qui communiquent avec vous de manière constante tout au long du projet jusqu’à sa mise en production."}</span>
                        <span className="offshore-text" id="offshore-text-service">{language === "English" ? "Our services:" : "Les services proposés :"}</span>

                        <ul className="offshore-text">

                            <li>{language === "English" ? "Custom application development" : "Développement d’applications sur mesure"}</li>
                            <li>{language === "English" ? "Mobile application development" : "Développement d’applications mobiles"}</li>
                            <li>{language === "English" ? "Web application development" : "Développement d’applications web"}</li>

                        </ul>

                        <span className="offshore-text" id="offshore-contact">{language === "English" ? "Interested in this service? Contact us to discuss your requirements." : "Intéressé(e) par ce service ? Contactez-nous pour en discuter."}</span>


                        <a className="btn-contact" href="#contact">{language === "English" ? "contact us" : "CONTACTEZ-NOUS"}</a>

                        </div>





                    </div>




                </div>
 
                <div className="team-content" >

                    <div className="team-pd">

                        <div className="team-work">

                            <div>

                                <img  src={teamWork} alt="" className="img-team-bg"/>
                                <img src={girlCode}  alt="" className="img-team-bg" id="img-team"/>

                            </div>

                            <div className="description-work">

                                <h2>{language === "English" ? "An agile team" : "UNE EQUIPE AGILE"}</h2>
                                <span className="description-title">{language === "English" ? "What we offer" : "Ce que nous vous proposons"}</span>
                                <ul className="description-point">

                                    <li>{language === "English" ? "Smooth communication and collaboration between our team members and our customers throughout the development process" : "Une communication et une collaboration fluides entre les membres de nos équipes et nos clients tout au long du processus de développement."}</li>
                                    <li>{language === "English" ? "The ability to adapt quickly to changes, a flexible team, work adjusted according to feedback, new requirements and project developments." : "La capacité à s’adapter rapidement aux changements, une équipe flexible, un travail ajusté en fonction des retours, des nouvelles exigences et des évolutions du projet."}</li>

                                </ul>

                            </div>


                        </div>

                        <div>

                            <ul className="description-point">

                                <li>{language === "English" ? "Continuous feedback from users and team members to improve work processes." : "Un feedback continu des utilisateurs et des membres de l’équipe pour améliorer les processus de travail."}</li>
                                <li>{language === "English" ? "Transparent task management using project management tools." : "Une gestion transparente des tâches grâce à des outils de gestion de projets."}</li>
                                <li>{language === "English" ? "Continuous improvement of work processes." : "Une amélioration continue des processus de travail."}</li>

                            </ul>

                        
                        </div>

                    </div>

                </div>

                <h2 className="section-title">{language === "English" ? "Customer testimonials" : "Ecoutez nos clients"}</h2>
                <h3 className="sub-section-title">{language === "English" ? "They trust us" : "Ils nous font confiance"}</h3> 

                <div>
                    
                    <div className="customer-slider">

                        <div className="slider-content">

                        <div></div>

                        <div>

                                <img src={images[slide]} alt="" className="img-customer"/>

                        </div>

                        <div className="next-slider">

                            <img src={chevronRight} alt="" onClick={nextImage} className="chevron-right"/>

                        </div>
                        
                        
                        
                        </div>                                    
                        
                    
                    </div>  

                    <div>
                        
                        <div className="customer-avis">
                            
                            <p className="customer-comment">{textImages[slideText]}</p>

                            <div className="customer-post">
                                
                                <span>{nameComment[slideName]}</span> 

                                <span>{postCustomer[slidePost]}</span>   
                                
                            
                            </div> 

                            <div className="img-indicator">
                            {images.map((_image, index) => (

                                <span key={index}>{index === slide ? '●' : '○'}</span>

                            ))} 

                            </div> 
                            
                        
                        </div>       
                    
                    
                    </div>                        
                
                </div>  
            
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