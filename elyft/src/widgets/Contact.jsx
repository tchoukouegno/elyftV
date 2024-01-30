import linkedin from "../assets/icons/linkedin.svg";
import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import chevronDownSolid from "../assets/icons/chevronDownSolid.svg";
import { useState} from 'react';
import LogoElyftB from "../assets/logo/LogoElyftB.jpg";
import LogoElyft from "../assets/logo/LogoElyft.png";





export function Contact () {

    const [choice, setChoice] = useState("");
    const [isSelected, setIsSelected] = useState(false);

    const handleHome = ()=>{

        return  navigate('/home');
  
      }

    const handleItem = ()=>{

        setIsSelected(!isSelected);

    };

  const handleSelected = (itemSelect)=>{

    setIsSelected(!isSelected); 

    return  setChoice(itemSelect);


};
    


    const arryServices = [{service:"Application mobile"},{service:"Application Web"}, {service:"site Web"}, {service:"Logiciel sur mesure"},
    {service:"Community Management "}, {service:"Référencement SEO"},]


    return(


    <>
        
        <section className="repeat-page " id="bloc-page">

            <div className="contact-content" id="contact">

                <div className="contact-text" >

                <img src={LogoElyft} alt="logo-elyft" onClick={handleHome} className="logo-contact"/>

                    {/* <h3>Pret à transformer votre entreprise?</h3> */}

                    <p className="text-contact">Vous avez un projet à réaliser, des questions sur nos tarifs, des suggestions ou toute préoccupation, question ou demande? Laissez-nous un message, nous vous répondons sous 24 heures.</p>


                </div>

                <form className="form-items">

                    <div className="form-item-flx">

                        <div className="form-item">

                            <label htmlFor="first_name">Nom*</label>
                            <input className="input-form" />

                        </div>

                        <div className="form-item">

                            <label htmlFor="last_name">Prénom*</label>
                            <input  className="input-form"/>

                        </div>

                    </div>

                    <div className="form-item-flx">

                        <div className="form-item">

                            <label htmlFor="email">Email*</label>
                            <input  className="input-form"/>

                        </div>

                        <div className="form-item" >

                            <label htmlFor="phone">Téléphone*</label>
                            <input  className="input-form" type="number"/>

                        </div>

                    </div>

                     

                    <div className="form-item">

                        <label htmlFor="need">Le service qui vous interesse*</label> 

                        <div className='dropDown'>

                            <div  onClick={handleItem}  className={ isSelected === false ?'dropdown-title': 'dropdown-title-open' }  >

                                <span  className='choice-selected' >{choice}</span>
                                <img  src={chevronDownSolid} alt='chevronDown' className={isSelected === true ?  'chevronUp': 'chevronDown'  }/>

                            </div>

                                    {isSelected === true ?

                                        <div className='option-dropdown'>

                                            {arryServices?.map((item,index)=>(

                                                <span onClick={()=>handleSelected(item.service)} key={index}>{item.service}</span>

                                             ))}
                                        
                                        </div>

                                    : null}

                    </div>                     

                    </div>

                    <div className="form-item">

                        <label htmlFor="need">Votre besoin*</label>                       
                        <textarea id="message"></textarea>       

                    </div>

                    <button className="btn-send" >Envoyer</button>

                </form>

            </div>

        </section>

        <footer className="footer">

            <div className="footer-text">

                {/* <div className="logo-text" id="logo-color">LOGO</div> */}

                <img src={LogoElyftB} alt="logo-elyft" onClick={handleHome} className="logo-footer"/>
               

                <p>Franchissez le pas, faites le grand saut dans l’univers du numérique! Pourquoi? Parce que parier sur le numérique c’est gagner à coup sûr.</p>

                <p>Chez ELYFT nous croyons en une chose : la technologie a le pouvoir de faciliter, d’améliorer la qualité de vos processus dans tous les aspects de votre activité. Nous vous accompagnons dans la conception de solutions répondant à vos besoins réels. Des solutions sur mesure et innovantes qui vous faciliterons la vie</p>

                <nav>

                        <ul className="footer-nav">

                            <li>ACCUEIL</li>
                            <li>SERVICES</li>
                            <li>TECHNOLOGIES</li>
                            <li>A PROPOS</li>

                        </ul>

                </nav>

                <p className="reserved">© 2023 Elyft. All Rights Reserved</p>


            </div>

           
            <div className="footer-adress">

                <div  className="footer-adress-number">

                    <h3>ELYFT</h3>
                    <span>Adresse : 26 Rue Bosquet, Paris 75007</span>
                    <span>Email : contact@elyft.tech</span>
                    <span>Tel : +33 7 56 89 35 15</span>

                    <button className="btn-reservation">Réserver une entrevue</button>


                </div>

                <div className="social-media">

                    <img src={linkedin} alt="icon linkedin" className="likdn"/>
                    <img src={facebook} alt="icon facebook" className="fcbk"/>
                    <img src={instagram} alt="icon instagram" className="insta"/>

                </div>

                <span className="mention">Mentions Légales</span>

                

            </div>


        </footer>        
        
        
    </>






    )




}