import { Header } from "../widgets/Header";
import pexelsFauxels from "../assets/img/pexelsFauxels.jpg";
import { Contact } from "../widgets/Contact";
import {useNavigate, Outlet} from "react-router-dom";
import girlCode from "../assets/img/girlCode.jpg";
import { useState, useEffect } from "react";






export function ServiceDetail () {

       
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


    


    return(

        <>

            <Header pageTitle= {language === "English" ? "SEO, web and mobile development agency" : "Agence de référencement SEO et de développement Web et mobile" } contact={language === "English" ? "CONTACT US" : "CONTACTEZ-NOUS" }  srcImg={pexelsFauxels} activeServices="activeServices" handleChange={handleChange} language={language} handleOtherLanguage={handleOtherLanguage} change={change} other={other} 
        accueil= {language === "English" ? "HOME" : "ACCUEIL"}  propos={language === "English" ? "ABOUT US" : "A PROPOS"} />


            <div className="bloc-page">

               <section className="body-content">

                <h2 className="section-title">{language === "English" ? "Your digital solutions" : "Vos solutions digitales"}</h2>

                <p>{language === "English" ? "Are you looking for a way to strengthen your ties with your customers, encourage communication and sharing, and improve your services?" : "Vous recherchez un moyen de renforcer vos liens avec vos clients, de favoriser la communication, le partage et d’améliorer vos services?"}</p>
                <p>{language === "English" ? "If your customers' satisfaction is important to you, and you want to offer them the very best, discover our tailor-made solutions, adaptable to your project and your business." : "Si la satisfaction de vos clients vous importe et que vous souhaitez leur offrir le meilleur, découvrez nos solutions sur mesure, adaptables à votre projet, à votre entreprise."}</p>

                <div className="app-mobile-title">

                    <div>

                        <img src={girlCode} alt="" className="app-mobile-picture" />

                    </div>


                    <div>

                        <h2>{language === "English" ? "Mobile applications for iOS and Android" : "Applications mobiles pour iOS et android"}</h2>
                        <span className="underline-title"></span>

                        <span className="app-mobile-description">{language === "English" ? "Mobile applications have revolutionized the way we interact with technology, giving us fast, personalized access to a wide range of services, and features tailored to our individual needs." : "Les applications mobiles ont révolutionné la manière dont nous interagissons avec la technologie en nous offrant un accès rapide et personnalisé à une vaste gamme de services, et de fonctionnalités adaptées à nos besoins individuels."}</span>
                        <span className="app-mobile-description">{language === "English" ? "Mobile applications offer companies an effective way of interacting with their customers, increasing their visibility and accessibility, while improving customer satisfaction and loyalty. They represent a powerful tool for staying competitive in an increasingly digital business environment." : "Les applications mobiles offrent aux entreprises un moyen efficace d’interagir avec leur clientèle, d’augmenter leur visibilité et leur accessibilité, tout en améliorant la satisfaction et la fidélité des clients. Elles représentent un outil puissant pour rester compétitif dans un environnement commercial de plus en plus numérique."}</span>




                    </div>               


                </div>

                <div>

                    <span className="app-description">{language === "English" ? "As a company or project owner, having your mobile application developed offers you a number of advantages, particularly in terms of :" : "En tant qu’entreprise ou porteur de projet, faire développer votre application mobile vous offre de nombreux avantages, notamment en termes :"}</span>

                    <ul className="items-description">

                        <li><span>{language === "English" ? "Accessibility :" : "D’accessibilité :"}</span> {language === "English" ? " smartphones enable users to access company services at any time of day, wherever they are." : "les smartphones permettent aux utilisateurs d’accéder aux services de l’entreprise à tout moment de la journée, où qu’ils soient."} </li>
                        <li><span>{language === "English" ? "Customer experience :" : "D’expérience client :"} </span>{language === "English" ? "mobile applications offer a personalized user experience, enabling customers to interact more fluidly with the company, benefiting from specific functionalities and an interface tailored to their needs." : "les applications mobiles offrent une expérience utilisateur personnalisée, permettant aux clients d’interagir de manière plus fluide avec l’entreprise, de bénéficier de fonctionnalités spécifiques et d’une interface adaptée à leurs besoins."}</li>
                        <li><span>{language === "English" ? "Targeted marketing and communication :" : "De marketing et communication ciblés :"}</span>{language === "English" ? "enabling you to communicate directly with users via push notifications, offering the possibility of targeting personalized messages, promotions and news tailored to customers' interests." : " vous permettre de communiquer directement avec les utilisateurs via des notifications push offrant la possibilité de cibler des messages personnalisés, des promotions et des actualités adaptés aux intérêts des clients."}</li>
                        <li><span>{language === "English" ? "Increased sales :" : "D’augmentation des ventes :"}</span>{language === "English" ? " some applications offer integrated e-commerce functionalities, facilitating online purchases, which can lead to increased sales and conversions for the company." : "certaines applications offrent des fonctionnalités de commerce électronique intégrés, facilitant les achats en ligne, ce qui peut entrainer une augmentation des ventes et des conversions pour l’entreprise."} </li>
                        <li><span>{language === "English" ? "Internal operational efficiency :" : "D’efficacité opérationnelle interne :"}</span>{language === "English" ? "they can be used internally to optimize processes, improve communication and collaboration between team members, which can increase operational efficiency." : " elles peuvent être utilisées en interne pour optimiser les processus, améliorer la communication et la collaboration entre les membres de l’équipe, ce qui peut augmenter l’efficacité opérationnelle."}</li>
                        <li><span>{language === "English" ? "Branding :" : "De création d’une image de marque :"}</span>{language === "English" ? "a well-designed app strengthens a company's brand image, demonstrating its commitment to innovation, technology and customer experience." : "une application bien conçue renforce l’image de marque de l’entreprise, démontrant son engagement envers l’innovation, la technologie et l’expérience client."} </li>

                    </ul>

                    <span className="app-description-end">{language === "English" ? "We develop custom mobile applications for Android and iOS that are intuitive and easy to use." : "Nous développons pour vous des applications mobiles sur mesure pour Android et iOS intuitives et faciles à prendre en main."}</span>

                </div>

                <div className="app-web-title">

                      <div>

                        <h2>{language === "English" ? "WEB Applications" : "Applications Web"}</h2>
                        <span className="underline-title-web"></span>

                        <span className="app-mobile-description">{language === "English" ? "A web application is a software program or service accessible via an Internet browser, offering a range of functions and services without requiring download or installation on the user's device." : "Une application web est un logiciel ou un service accessible via un navigateur internet, offrant diverses fonctionnalités et services sans nécessiter de téléchargement ou d’installation sur l’appareil de l’utilisateur."}</span>
                        <span className="app-mobile-description">{language === "English" ? "It has the advantage of being multiplatform, accessible from any device with an Internet connection and a browser, making it practical and flexible for users." : "Elle présente l’avantage d’être multiplateforme, accessible depuis n’importe quel appareil disposant d’une connexion internet et d’un navigateur, ce qui la rend pratique et flexible pour les utilisateurs."}</span>
                        <span className="app-mobile-description" >{language === "English" ? "It's a flexible, cost-effective and accessible solution for businesses looking to expand their online presence, offer high-performance services, and reach a diverse audience." : "C’est une solution flexible, économique et accessible pour les entreprises cherchant à élargir leur présence en ligne, à offrir des services performants, et à atteindre un public diversifié."}</span>


                    </div>               


                    <div>

                        <img src={girlCode} alt="" className="app-mobile-picture" />

                    </div>


                   

                </div>

                
                    <span  className="app-description">{language === "English" ? "Web applications offer the following advantages :" : "Les applications web présentent les avantages suivants :"}</span>

                    <ul className="items-description">

                    <li><span>{language === "English" ? "Cross-platform accessibility : " : "Accessibilité multiplateforme :"}</span>{language === "English" ? "web applications can be accessed from any web browser, on a variety of devices (computers, tablets, smartphones). They require no download, and are generally compatible with several operating systems." : " les applications web peuvent être accessibles depuis n’importe quel navigateur internet, sur différents appareils (ordinateurs, tablettes, smartphones). Elles n’exigent pas de téléchargement et sont généralement compatibles avec plusieurs systèmes d’exploitation."}</li>
                    <li><span>{language === "English" ? "Easy access and sharing :" : "Facilité d’accès et de partage :"}</span>{language === "English" ? " users can access the web application in just a few clicks via a browser, without requiring any specific installation. What's more, its URL can be easily shared, promoting wider distribution and accessibility." : "les utilisateurs peuvent accéder à l’application web en quelques clics via un navigateur, sans nécessiter d’installation spécifique. De plus, son URL peut être partagée facilement, favorisant une plus grande diffusion et accessibilité."}</li>
                    <li><span>{language === "English" ? "Instant updates :" : "Mise à jour instantanée :"}</span>{language === "English" ? "updates and modifications to a web application are immediately available to all users. This means faster responsiveness to changes and patches." : "les mises à jour et les modifications apportées à une application web sont immédiatement disponibles pour tous les utilisateurs. Cela permet une réactivité plus rapide aux changements et aux correctifs."}</li>
                    <li><span>{language === "English" ? "Compatibility with the latest technologies :" : "Compatibilité avec les dernières technologies :"}</span>{language === "English" ? "web applications can integrate recent technologies such as artificial intelligence, machine learning and advanced APIs to deliver innovative functionality without relying on device-specific features." : "les applications web peuvent intégrer des technologies récentes telles que l’intelligence artificielle, le machine learning et les API avancées pour offrir des fonctionnalités innovantes sans dépendre des caractéristiques spécifiques d’un appareil."}</li>
                    <li><span>{language === "English" ? "Easy to reference and share on the web :" : "Facilité de référencement et de partage sur le web :"}</span>{language === "English" ? "web applications are easier to reference on search engines, which improves their online visibility. They can be shared and discovered more easily through links or online searches." : "les applications web sont plus faciles à référencer sur les moteurs de recherche, ce qui améliore leur visibilité en ligne. Elles peuvent être partagées et découvertes plus facilement grâce à des liens ou à des recherches en ligne."}</li>
                    <li><span>{language === "English" ? "Security and control : " : "Sécurité et contrôle :"}</span>{language === "English" ? "web applications enable centralized management of data security, making it easier to implement security measures to protect user information." : "les applications web permettent une gestion centralisée de la sécurité des données, ce qui facilite la mise en place de mesures de sécurité pour protéger les informations des utilisateurs."}</li>
                        

                        <li className="item-list-end"><span>{language === "English" ? "Simplified analysis and data collection " : "Analyse et collecte de données simplifiées :"}</span>{language === "English" ? "web applications offer in-depth analysis capabilities, making it possible to track user behavior and collect valuable data to improve services, products or the company's marketing strategy." : " les applications web offrent des capacités d’analyse approfondie, permettant de suivre le comportement des utilisateurs et de collecter des données précieuses pour améliorer les services, produits ou la stratégie marketing de l’entreprise."}</li>

                    </ul>

                <div className="app-mobile-title">

                    <div>

                        <img src={girlCode} alt="" className="app-mobile-picture" />

                    </div>


                    <div>

                        <h2>{language === "English" ? "" : ""}Sites web responsive</h2>
                        <span className="underline-title"></span>

                        <span className="app-mobile-description">{language === "English" ? "" : ""}Un site web est un allié de choix pour une entreprise. En effet il lui apporte une présence en ligne, une visibilité accrue, une facilité de communication et la possibilité de générer des revenus, tout en renforçant la crédibilité et la confiance des clients.</span>
                        <span className="app-mobile-description">{language === "English" ? "" : ""}Les sites web peuvent varier en taille, en complexité et en objectifs. Ils peuvent servir à différentes fins, telles que la fourniture d’informations, la vente de produits ou services, le divertissement, la communication, l’éducation etc.</span>




                    </div>               


                </div>

                <span  className="app-description">{language === "English" ? "" : ""}Un site web présente les avantages suivants :</span>

                    <ul className="items-description">

                        <li>{language === "English" ? "" : ""}<span>Élargissement de la portée :</span> un site web permet de toucher un public plus large, même au-delà de la zone géographique dans laquelle l’entreprise est physiquement implantée, offrant ainsi de nouvelles opportunités de clientèle.</li>
                        <li>{language === "English" ? "" : ""}<span>Marketing et visibilité :</span> le site web constitue un outil de marketing efficace permettant de promouvoir les produits ou services de l’entreprise. Il peut être utilisé pour diffuser des informations, des offres spéciales, des promotions, etc., attirant ainsi de nouveaux clients.</li>
                        <li>{language === "English" ? "" : ""}<span>Vente en ligne :</span> pour les entreprises de commerce électronique, un site web permet la vente de produits ou services en ligne, ce qui augmente les opportunités de vente et de génération de revenus.</li>
                        <li>{language === "English" ? "" : ""}<span>Crédibilité et professionnalisme :</span> un site web bien conçu renforce la crédibilité de l’entreprise. Il est perçu comme un signe de professionnalisme, offrant une image positive de l’entreprise aux clients actuels et potentiels.</li>
                        <li>{language === "English" ? "" : ""}<span>Service client amélioré : </span>un site web peut inclure des sections FAQ, des formulaires de contact, des chats en direct, etc., pour offrir un service clientèle efficace et accessible, répondant ainsi aux besoins des clients de manière rapide et efficace.</li>
                        <li>{language === "English" ? "" : ""}<span>Collecte de données et analyses :</span> les sites web permettent de collecter des données sur les habitudes des visiteurs, offrant ainsi des informations précieuses pour comprendre les tendances, les intérêts et les besoins des clients.</li>
                        <li>{language === "English" ? "" : ""}<span>Réduction des coûts :</span> comparativement aux dépenses publicitaires traditionnelles, un site web peut être un investissement rentable pour l’entreprise. Il réduit les coûts liés à la publicité, à la distribution de supports imprimés, etc.</li>
                        <li className="item-list-end">{language === "English" ? "" : ""}<span>Communications et annonces mises à jour :</span> les annonces, les actualités et les mises à jour peuvent être facilement communiquées aux clients via le site web, offrant ainsi une plateforme pour tenir les clients informés.</li>
                    </ul>

                <div className="app-web-title">

                      <div>

                        <h2>{language === "English" ? "" : ""}Logiciels sur mesure</h2>
                        <span className="underline-title-web"></span>

                        <span className="app-mobile-description">{language === "English" ? "" : ""}Un logiciel sur mesure est un logiciel développé spécifiquement pour répondre à des besoins particuliers d’une entreprise ou d’un individu. Contrairement aux logiciels prêts à l’emploi disponibles sur le marché, les logiciels sur mesure sont conçus en tenant compte des besoins précis et des spécifications uniques de l’utilisateur final</span>
                        <span className="app-mobile-description">{language === "English" ? "" : ""}Les logiciels sur mesure peuvent être développés pour diverses industries et secteurs tels que la logistique, le commerce électronique, la santé, la finance, les ressources humaines, etc. ils sont créés répondre à des besoins précis, automatiser des processus, résoudre des problèmes complexes ou optimiser des opérations métier.</span>
                        


                    </div>               


                    <div>

                        <img src={girlCode} alt="" className="app-mobile-picture" />

                    </div>


                   

                </div>

                <span  className="app-description">{language === "English" ? "" : ""}Les logiciels sur mesure offrent les avantages suivants :</span>

                    <ul className="items-description">

                        <li>{language === "English" ? "" : ""}<span>Adaptation aux besoins spécifiques :</span> les logiciels sur mesure sont conçus pour répondre précisément aux besoins et exigences uniques d’une entreprise ou d’un utilisateur. Ils peuvent être adaptés pour s’intégrer parfaitement aux processus métier spécifiques et aux flux de travail existants.</li>
                        <li>{language === "English" ? "" : ""}<span>Fonctionnalités personnalisées :</span> ces logiciels offrent des fonctionnalités personnalisées, conçues pour répondre aux besoins spécifiques de l’utilisateur final. Cela permet une utilisation plus efficace et optimale du logiciel.</li>
                        <li>{language === "English" ? "" : ""}<span>Evolutivité et flexibilité :</span> les logiciels sur mesure sont évolutifs, ce qui signifie qu’ils peuvent être modifiés et étendus au fur et à mesure que les besoins évoluent, offrant une solution à long terme.</li>
                        <li>{language === "English" ? "" : ""}<span>Contrôle et propriété :</span> l’utilisateur final a un contrôle total sur le développement du logiciel, ses fonctionnalités, son évolution, et possède des droits de propriété intellectuelle.</li>
                        <li>{language === "English" ? "" : ""}<span>Intégration transparente :</span> ces logiciels peuvent être conçus pour s’intégrer facilement avec d’autres systèmes ou logiciels existants.</li>
                        <li>{language === "English" ? "" : ""}<span>Sécurité améliorée :</span> les logiciels sur mesure peuvent inclure des mesures de sécurité adaptées aux besoins spécifiques de l’entreprise, renforçant ainsi la protection des données sensibles.</li>
                        <li>{language === "English" ? "" : ""}<span>Support et maintenance :</span> les services de support et de maintenance sont souvent plus adaptés et réactifs pour des logiciels sur mesure, car les équipes de développement sont souvent impliquées dans le suivi, les correctifs et les mises à jour régulières.</li>
                        <li>{language === "English" ? "" : ""}<span>Rentabilité à long terme :</span> bien que le coût initial puisse être élevé, les avantages à long terme, en termes d’efficacité, d’adaptabilité et de fonctionnalités spécifiques, peuvent s’avérer plus rentables pour une entreprise.</li>
                    </ul>

                <span className="app-description-end">{language === "English" ? "" : ""}Les logiciels sur mesure offrent une solution optimale, adaptée aux besoins spécifiques de l’utilisateur, offrant une personnalisation des fonctionnalités et une meilleure évolutivité sur le long terme.</span>

                <div className="app-mobile-title">

                    <div>

                        <img src={girlCode} alt="" className="app-mobile-picture" />

                    </div>


                    <div>

                        <h2>Community Management</h2>
                        <span className="underline-title"></span>

                        <span className="app-mobile-description">{language === "English" ? "" : ""}Le Community Management est l’outil essentiel pour renforcer la présence en ligne de l’entreprise, accroitre l’engagement des clients, gérer la réputation et utiliser les interactions avec la communauté pour améliorer les produits et services, tout en augmentant la visibilité et les ventes. Il permet de de favoriser l’engagement des utilisateurs et de maximiser l’impact des activités de l’entreprise sur les réseaux sociaux.</span>
                        <span className="app-mobile-description">{language === "English" ? "" : ""}Le Community Management est essentiel pour les entreprises car il permet de :</span>




                    </div>               


                </div>


                    <ul className="items-description">

                        <li>{language === "English" ? "" : ""}<span>Créer et entretenir une communauté en ligne :</span> le Community Management consiste à interagir avec la communauté en ligne de l’entreprise, à construire des relations, à répondre aux commentaires et aux messages, et à favoriser l’engagement des utilisateurs. Cela permet de créer une communauté fidèle et engagée autour de la marque.</li>
                        <li>{language === "English" ? "" : ""}<span>Gérer la réputation et la crédibilité :</span> les Community Managers surveillent et gèrent la réputation en ligne de l’entreprise. En répondant rapidement aux commentaires positifs et négatifs, en résolvant les problèmes et en fournissant des informations précises, ils contribuent à renforcer la crédibilité et à maintenir une image positive de l’entreprise.</li>
                        <li>{language === "English" ? "" : ""}<span>Créer du contenu engageant :</span> les Community Managers créent et partagent un contenu engageant pour susciter l’intérêt des utilisateurs, favoriser les interactions et renforcer la présence de la marque sur les réseaux sociaux.</li>
                        <li>{language === "English" ? "" : ""}<span>Servir de support clientèle : </span>ils servent souvent de premier point de contact pour les questions, les requêtes ou les problèmes des clients. En fournissant un support et des réponses rapides, ils améliorent l’expérience client et renforcent la fidélité des clients.</li>
                        <li>{language === "English" ? "" : ""}<span>Analyser les données et les tendances : </span>les Community managers surveillent les tendances, analysent ls données et les interactions en ligne pour identifier les comportements des consommateurs, les préférences, les points de douleur, et utilisent ces informations pour adapter les stratégies marketing et améliorer les produits ou services.</li>
                        <li>{language === "English" ? "" : ""}<span>Générer des leads et augmenter les ventes :</span> en entretenant des relations solides avec la communauté, en partageant des offres spéciales et des contenus pertinents, le Community Management peut contribuer à la génération de leads et à l’augmentation des ventes.</li>
                        <li>{language === "English" ? "" : ""}<span>Faire une veille concurrentielle :</span> les Community Manager surveillent les activités des concurrents sur les réseaux sociaux pour comprendre ce qui fonctionne chez eux et comment ils interagissent avec leur propre audience, ce qui peut aider à ajuster les stratégies de l’entreprise.</li>
                        <li>{language === "English" ? "" : ""}<span>Améliorer les produits/services :</span> les retours et les commentaires des clients collectés par le Community Management peuvent aider à identifier les lacunes ou les améliorations nécessaires pour les produits ou services de l’entreprise.</li>
                        <li>{language === "English" ? "" : ""}<span>Renforcer la notoriété de la marque :</span> en maintenant une présence active et engageante sur les réseaux sociaux, le Community Management contribue à renforcer la notoriété de la marque.</li>
                        <li className="item-list-end">{language === "English" ? "" : ""}<span>S’adapter rapidement aux tendances du marché :</span> grace à la surveillance constante des tendances, des réactions des clients et des évolutions du marché, le Community Management permet à l’entreprise de s’adapter rapidement et efficacement.</li>

                    </ul>


                <div className="app-web-title">

                      <div>

                        <h2>{language === "English" ? "" : ""}Référencement SEO</h2>
                        <span className="underline-title-web"></span>

                        <span className="app-mobile-description">{language === "English" ? "" : ""}L’objectif principal du référencement SEO (Search Engine Optimization) est d’augmenter la quantité et la qualité du trafic vers un site web en augmentant sa visibilité pour les utilisateurs effectuant des recherches pertinentes sur des moteurs de recherche comme Google, Bing, Yahoo, etc.</span>
                        <span className="app-mobile-description">{language === "English" ? "" : ""}Le référencement SEO offre de nombreux avantages pour les sites web, il permet d’augmenter leur visibilité en attirant un trafic qualifié, en améliorant la notoriété de la marque, ce qui peut avoir un impact positif sur la croissance et la rentabilité des entreprises.</span>


                    </div>               


                    <div>

                        <img src={girlCode} alt="" className="app-mobile-picture" />

                    </div>


                   

                </div>

                 <span  className="app-description">{language === "English" ? "" : ""}Les avantages du référencement SEO pour une entreprise sont les suivants :</span>

                    <ul className="items-description">

                        <li>{language === "English" ? "" : ""}<span>Visibilité accrue et trafic organique :</span> en améliorant le classement dans les résultats des moteurs de recherche, le SEO permet d’augmenter la visibilité du site, attirant ainsi un trafic organique et qualifié.</li>
                        <li>{language === "English" ? "" : ""}<span>Ciblage des utilisateurs pertinents :</span> en optimisant pour des mots-clés spécifiques, le SEO permet d’attirer des utilisateurs recherchant activement des informations ou des produits liés à l’activité de l’entreprise.</li>
                        <li>{language === "English" ? "" : ""}<span>Notoriété et confiance :</span> les sites bien classés sont souvent perçus comme plus fiables, ce qui renforce la crédibilité et la confiance des utilisateurs envers la marque.</li>
                        <li>{language === "English" ? "" : ""}<span>Rentabilité :</span> le SEO est souvent considéré comme un investissement à long terme. Une fois les efforts initiaux réalisés, il peut générer du trafic qualifié de manière durable sans coûts publicitaires directs.</li>
                        <li>{language === "English" ? "" : ""}<span>Meilleure expérience utilisateur : </span>les pratiques SEO impliquent l’amélioration de la structure du site, la qualité du contenu et la facilité de navigation, offrant ainsi une meilleure expérience aux utilisateurs.</li>
                        <li>{language === "English" ? "" : ""}<span>Avantage concurrentiel :</span> un bon référencement permet de rivaliser plus efficacement avec les concurrents et de se positionner avantageusement sur les moteurs de recherche.</li>
                        <li>{language === "English" ? "" : ""}<span>Conversion des visiteurs :</span> un trafic organique qualifié a plus de chances de se convertir en leads ou en ventes, augmentant ainsi le retour sur investissement.</li>
                        <li>{language === "English" ? "" : ""}<span>Analyse et suivi :</span> les outils d’analyse utilisés en SEO permettent de suivre les performances, d’identifier les tendances, et de modifier les stratégies pour des résultats optimaux.</li>
                        <li>{language === "English" ? "" : ""}<span>Adaptabilité aux tendances :</span> le SEO permet de s’adapter aux tendances du marché, aux évolutions des besoins des utilisateurs et aux changements d’algorithmes des moteurs de recherche.</li>

                    </ul>

                

                


               </section>
               
              
            </div>

            <Contact arryServices= {language === "English" ? arryServicesEnglish  : arryServices } textContact={language === "English" ? "Do you have a project to complete, questions about our rates, suggestions or any other concerns, questions or requests? Leave us a message and we'll get back to you within 24 hours." : "Vous avez un projet à réaliser, des questions sur nos tarifs, des suggestions ou toute préoccupation, question ou demande? Laissez-nous un message, nous vous répondons sous 24 heures."} nom ={language === "English" ? "Name*" : "Nom*"} prenom={language === "English" ? "First name" : "Prénom*"}  telephone={language === "English" ? "Phone" : "Téléphone*"} interest={language === "English" ? "The service you're interested in*" : "Le service qui vous interesse*"} need={language === "English" ? "Your needs*" : "Votre besoin*"} send={language === "English" ? "SEND MESSAGE" : "Envoyer"}  
            textFooter1= {language === "English" ? "Take the plunge into the digital world! Why should you? Because betting on digital technology is a sure-fire way to win." : "Franchissez le pas, faites le grand saut dans l’univers du numérique! Pourquoi? Parce que parier sur le numérique c’est gagner à coup sûr."}
            textFooter2= {language === "English" ? "At ELYFT, we believe in one thing: technology has the power to facilitate and improve the quality of your processes in every aspect of your business. We work with you to design solutions that meet your real needs. Tailor-made, innovative solutions to make your life easier" : "Chez ELYFT nous croyons en une chose : la technologie a le pouvoir de faciliter, d’améliorer la qualité de vos processus dans tous les aspects de votre activité. Nous vous accompagnons dans la conception de solutions répondant à vos besoins réels. Des solutions sur mesure et innovantes qui vous faciliterons la vie"}
            mention= {language === "English" ? "Legal Notice" : "Mentions Légales"} adress={ language === "English" ? "Address" : "Adresse"} reservation={language === "English" ? "BOOK AN INTERVIEW"  : "Réserver une entrevue"}
            accueil= {language === "English" ? "HOME" : "ACCUEIL"}  propos={language === "English" ? "ABOUT US" : "A PROPOS"}/>
        
        
            {/* <Outlet/> */}
        
        
        
        </>





    )



}