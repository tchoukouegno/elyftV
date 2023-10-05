import linkedin from "../assets/icons/linkedin.svg";
import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";






export function Contact () {




    return(


    <>
        
        <section className="repeat-page " id="bloc-page">

            <div className="contact-content">

                <div className="contact-text">

                    <span>LOGO</span>

                    <h3>Pret à transformer votre entreprise?</h3>

                    <p className="text-contact">Collaborez avec nous, pour développer les technologies qui optimiseront
                        votre entreprise !
                    </p>


                </div>

                <form className="form-items">

                    <div className="form-item-flx">

                        <div className="form-item">

                            <label htmlFor="first_name">Nom*</label>
                            <input className="input-form" placeholder="jean"/>

                        </div>

                        <div className="form-item">

                            <label htmlFor="last_name">Prénom*</label>
                            <input  className="input-form" placeholder="laporte"/>

                        </div>

                    </div>

                    <div className="form-item-flx">

                        <div className="form-item">

                            <label htmlFor="email">Email*</label>
                            <input  className="input-form" placeholder="jl@gmail.com"/>

                        </div>

                        <div className="form-item" >

                            <label htmlFor="phone">Téléphone*</label>
                            <input  className="input-form" placeholder="+33 7 84 65 15 12"/>

                        </div>

                    </div>

                    <div className="form-item">

                        <label htmlFor="need">Votre besoin*</label>
                        <input  className="input-form" id="need"/>
                        

                    </div>

                    <button className="btn-send" >Envoyer</button>

                </form>

            </div>

        </section>

        <footer className="footer">

            <div className="footer-text">

                <p >Elyft est une entreprise de création de produit numérique basée en France qui s'associe
                    à des propriètaire de PME pour transformer leurs entreprises et leurs relations avec leurs
                    cleints grace aux technologies numériques. Nous sommes convaincus que des technologies adéquates 
                    crées sur la base d'objectifs clairs peuvent propulser de nombreuses entreprises les aider
                    à créer plus de proximité et augmenter considérablement leur éfficacité, leurs chiffres d'affaires 

                </p>

                <nav>

                        <ul className="footer-nav">

                            <li>ACCUEIL</li>
                            <li>SERVICES</li>
                            <li>TECHNOLOGIES</li>
                            <li>A PROPOS</li>
                            <li>BLOG</li>

                        </ul>

                </nav>

                <p className="reserved">2023 Elyft. All rights reserved</p>


            </div>

           
            <div className="footer-adress">

                <div  className="footer-adress-number">

                    <span>Elyft France</span>
                    <span>Adresse xxxxxx</span>
                    <span>Adresse xxxxxx</span>


                </div>

                <div className="social-media">

                    <img src={linkedin} alt="icon linkedin" className="likdn"/>
                    <img src={facebook} alt="icon facebook" className="fcbk"/>
                    <img src={instagram} alt="icon instagram" className="insta"/>

                </div>

                

            </div>


        </footer>        
        
        
    </>






    )




}