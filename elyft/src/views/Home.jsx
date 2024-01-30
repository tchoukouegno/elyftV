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

    const [isInitialPosition, setIsInitialPosition] = useState(true)

    useEffect(() => {
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

    return(


        <>

       
        
        
        <Header pageTitle="DEVELOPPEMENT D’APPLICATIONS MOBILES POUR ANDROID ET IOS" srcImg={homeHeader} active="active" />

        <div className="bloc-page">

            <section className="body-content">

                <h2>Des solutions digitales qui vous facilitent la vie</h2>

                <p>Les logiciels personnalisés sont devenus incontournables dans un monde tourné vers le numérique et concurrentiel</p>

                <div className="help-customer-content">

                    <div className="help-customer-items">

                        <div className="help-customer">

                            <img src={chartSimpleSolid} alt="icon-illustrator" className="icon-illustrator"/>
                            <span>Conception de logiciels professionnels et personnalisés</span>

                        </div>

                        <div className="help-customer">

                            <img src={usersSolid} alt="icon-illustrator" className="icon-illustrator"/>
                            <span>Approche axée sur le client pour des solutions sur mesure</span>

                        </div>

                        <div className="help-customer">

                            <img src={trophySolid} alt="icon-illustrator" className="icon-illustrator"/>
                            <span>Equipe hautement qualifiée et expérimentée</span>

                        </div>

                    </div>

                    <div className="proximity-customer">

                        <img src={yougCoupleWork} alt="proximity-customer" />
                        <span>Gagnez de la notoriété, prenez de l’avance sur vos concurrents !</span>
                        <div className="filtre"></div>

                    </div>

                </div>

                <>
                    <h2 className="section-title">Innovation constante dans nos solutions informatiques</h2> 
                    <span className="sub-section-title">Ce qui nous animes</span>   
                    <p className="value-txt">Vous simplifier la vie, vous fournir une prestation digitale dont vous serez fier(e). Bref, vous rendre le digital simple et accessible. Chez ELYFT nous faisons du bon travail, et nous y mettons du coeur. Cet engagement dans la qualité et l’innovation, nous pousse à concevoir des solutions logicielles sur mesure.</p>
                    <p className="value-txt">Mettre l’humain au centre de nos activités, c’est ce qui nous permet de batir des relations de confiance avec nos clients. Les aider à développer une présence en ligne enviée par leurs concurrents</p>         
                
                    <div className="values-items">

                        <div className="value-bx">

                            <img src={icons8BalanceScale} alt="equité" className="value-item" />
                            <span>Réactivité</span>

                        </div>

                        <div className="value-bx">

                            <img src={icons8Respect} alt="respect" className="value-item" />
                            <span>Innovation</span>

                        </div>

                        <div className="value-bx">

                            <img src={icons8GraduationCap} alt="excellence" className="value-item" />
                            <span>Qualité</span>

                        </div>


                    </div>
                </>

                <>
                
                    <h2 className="section-title" id="services">Formation et développement continu des compétences</h2>
                    <span className="sub-section-title">Ce que nous proposons</span> 
                    <p className="description">Rien n’est prévu à l’avance, nous nous adaptons à vous, à votre problématique, à votre besoin. L’objectif est de vous fournir une solution digitale adaptée à votre situation, facile à prendre en main et qui apporte une plus-value à votre entreprise.</p>  
                
                <div className="values-items">

                        <div className="service">

                            <img src={icons8Android} alt="application mobile" className="value-item" />
                            <h3>Application Mobile</h3>

                        </div>

                        <div className="service">

                            <img src={icons8WebSite} alt="application web" className="value-item" />
                            <h3>Application web</h3>

                        </div>

                        <div className="service">

                            <img src={icons8ImacSettings} alt="excellence" className="value-item" />
                            <h3>Logiciel sur mesure</h3>

                        </div>

                        <div className="service">

                            <img src={icons8Design} alt="excellence" className="value-item" />
                            <h3>site web</h3>

                        </div>

                            
                    </div>
                    
                    <div className="slider-indicator">

                        {/* <span>...</span> */}

                        

                        <button onClick={handleServices} className="services">Voir les services</button>

                    </div>
                
                </>

                <div className="offshore-content">

                    <h2>Des développeurs pour vos gros projets</h2>
                    <span className="sub-section-title">Saisissez l’opportunité de ...</span> 
                    <p>Trouver des développeurs vraiment compétents et professionnels, lorsque vous avez un projet ambitieux peut s’avérer être un véritable chemin de croix.</p>

                    <div className="offshore-sub-content">

                        <div className="offshore-content-text-picture">

                            <div>

                                <p>Vous avez besoin de faire développer un logiciel sur mesure ou une application mobile ? ELYFT vous permet de travailler avec des développeurs chevronnés en France ou en offshore, selon votre convenance, et de profiter des avantages liés aux deux différents cas de figure.</p>
                                <p>travailler avec des professionnels vous fait économiser du temps, de l’énergie, et vous met à l’abri d’une architecture logicielle mal pensée, ou d’erreurs coûteuses. </p>


                            </div>

                            <img src={girlCode} alt="" className="offshore-picture" />

                            <div >

                               



                            </div>


                        </div>

                        <div className="offshore-other-text">

                        <span className="offshore-text">Profitez de nos équipes de développeurs (frontend et backend) réactifs et agiles qui communiquent avec vous de manière constante tout au long du projet jusqu’à sa mise en production.</span>
                        <span className="offshore-text" id="offshore-text-service">Les services proposés :</span>

                        <ul className="offshore-text">

                            <li>Développement d’applications sur mesure</li>
                            <li>Développement d’applications mobiles</li>
                            <li>Développement d’applications web</li>

                        </ul>

                        <span className="offshore-text" id="offshore-contact">Intéressé(e) par ce service ? Contactez-nous pour en discuter.</span>


                        <a className="btn-contact" href="#contact">CONTACTEZ-NOUS</a>

                        </div>





                    </div>




                </div>

                <div className="team-content" >

                    <div className="team-pd">

                        <div className="team-work">

                            <div>

                                <img src={girlCode} alt="" className="img-team-bg"/>
                                <img src={teamWork}  alt="" className="img-team-bg" id="img-team"/>

                            </div>

                            <div className="description-work">

                                <h2>UNE EQUIPE AGILE</h2>
                                <span className="description-title">Ce que nous vous proposons</span>
                                <ul className="description-point">

                                    <li>Une communication et une collaboration fluides entre les membres de nos équipes et nos clients tout au long du processus de développement.</li>
                                    <li>La capacité à s’adapter rapidement aux changements, une équipe flexible, un travail ajusté en fonction des retours, des nouvelles exigences et des évolutions du projet.</li>

                                </ul>

                            </div>


                        </div>

                        <div>

                            <ul className="description-point">

                                <li>Un feedback continu des utilisateurs et des membres de l’équipe pour améliorer les processus de travail.</li>
                                <li>Une gestion transparente des tâches grâce à des outils de gestion de projets.</li>
                                <li>Une amélioration continue des processus de travail.</li>

                            </ul>

                        
                        </div>

                    </div>

                </div>

                <h2 className="section-title">Ecoutez nos clients</h2>
                <span className="sub-section-title">Ils nous font confiance</span> 

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
                            {images.map((image, index) => (

                                <span key={index}>{index === slide ? '●' : '○'}</span>

                            ))} 

                            </div> 

                           

                            {/* <span className="indicator-slide">...</span>            */}
                            
                        
                        </div>       
                    
                    
                    </div>                        
                
                </div> 
            
            </section> 


        </div>

            <Contact/>

            
            
            
            
            
        

    </>

    )





}