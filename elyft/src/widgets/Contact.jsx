import linkedins from "../assets/icons/linkedins.svg";
import facebooks from "../assets/icons/facebooks.svg";
import instagrams from "../assets/icons/instagrams.svg";
import chevronDownSolid from "../assets/icons/chevronDownSolid.svg";
import { useState} from 'react';
import LogoElyftB from "../assets/logo/LogoElyftB.jpg";
import LogoElyft from "../assets/logo/LogoElyft.png";
import {useNavigate} from "react-router-dom";





export function Contact ({arryServices, textContact, nom, prenom, telephone, interest, need, send, textFooter1, textFooter2,  mention, adress, reservation, accueil, services, technologie, propos }) {

    const [choice, setChoice] = useState("");
    const [isSelected, setIsSelected] = useState(false);

    let navigate = useNavigate();

    const handleHome = ()=>{

        return  navigate('/home');
  
      }

    const handleTechno = ()=>{

        return navigate('/technologie');

    }

    const handlePropos = ()=>{

        return navigate('/apropos');

    }

    const handleBlog = ()=>{

        return navigate('/blog');

    }

    const handleServices = ()=>{

        return navigate('/services');

    }

    const handleItem = ()=>{

        setIsSelected(!isSelected);

    };

  const handleSelected = (itemSelect)=>{

    setIsSelected(!isSelected); 

    return  setChoice(itemSelect);


};
    


  

   


    return(


    <>
        
        <section className="repeat-page " id="bloc-page">

            <div className="contact-content" id="contact">

                <div className="contact-text" >

                    <img src={LogoElyft} alt="logo-elyft" onClick={handleHome} className="logo-contact"/>


                    <p className="text-contact">{textContact}</p>


                </div>

                <form className="form-items">

                    <div className="form-item-flx">

                        <div className="form-item">

                            <label htmlFor="first_name">{nom}</label>
                            <input className="input-form" />

                        </div>

                        <div className="form-item">

                            <label htmlFor="last_name">{prenom}</label>
                            <input  className="input-form"/>

                        </div>

                    </div>

                    <div className="form-item-flx">

                        <div className="form-item">

                            <label htmlFor="email">Email*</label>
                            <input  className="input-form"/>

                        </div>

                        <div className="form-item" >

                            <label htmlFor="phone">{telephone}</label>
                            <input  className="input-form" type="number"/>

                        </div>

                    </div>

                     

                    <div className="form-item">

                        <label htmlFor="need">{interest}</label> 

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

                        <label htmlFor="need">{need}</label>                       
                        <textarea id="message"></textarea>       

                    </div>

                    <button className="btn-send" >{send}</button>

                </form>

            </div>

        </section>

        <footer className="footer">

            <div className="footer-text">


                <img src={LogoElyftB} alt="logo-elyft" onClick={handleHome} className="logo-footer"/>

                <p>{textFooter1}</p>

                <p>{textFooter2}</p>

                <nav>

                        <ul className="footer-nav">

                            <li onClick={handleHome}>{accueil}</li>
                            <li onClick={handleServices}>SERVICES</li>
                            <li onClick={handleTechno}>TECHNOLOGIES</li>
                            <li onClick={handlePropos}>{propos}</li>

                        </ul>

                </nav>

                <p className="reserved">© 2024 Elyft. All Rights Reserved</p>


            </div>

           
            <div className="footer-adress">

                <div  className="footer-adress-number">

                    <h3>ELYFT</h3>
                    <span>{adress} : 26 Rue Bosquet, Paris 75007</span>
                    <span>Email : contact@elyft.tech</span>
                    <span>{telephone}: +33 7 56 89 35 15</span>

                    <button className="btn-reservation">{reservation}</button>


                </div>

                <div className="social-media-footer">

                    <img src={linkedins} alt="icon linkedin" />
                    <img src={facebooks} alt="icon facebook" />
                    <img src={instagrams} alt="icon instagram"/>

                </div>

                <span className="mention">{mention}</span>

                

            </div>


        </footer>        
        
        
    </>






    )




}