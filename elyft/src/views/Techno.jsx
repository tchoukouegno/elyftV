import { Header } from "../widgets/Header";
import pexelsLukas from "../assets/img/pexelsLukas.jpg";
import professional from "../assets/img/professional.jpg";
import { Contact } from "../widgets/Contact";
import reactJs from "../assets/icons/reactJs.png";
import nodeJs from "../assets/icons/nodeJs.png";
import laravel from "../assets/icons/laravel.png";




export function Techno () {



    return (

        <>
        
            <Header pageTitle="Les technologies utilisées par nos développeurs de produits" srcImg={pexelsLukas} headerDescription="Notre équipe s'appuie sur des frameworks open source robustes et intégrations
            puissantes pour créer des applications critiques" activeTech="activeTech"/>
        
            <section className="body-content">

                <h2>Toujours aux aguets</h2>

                <div className="techno-work">

                    <img src={professional} alt="professional man" className="techno-man"/>
                    <p>Notre équipe reste en veille constante afin d'etre au courant de nouvelles technologies et frameworks. Cela
                        nous permet de construire des produits pour nos clients ou pour nous meme et les mettre sur un marché pret a les accueillir. </p>

                </div>

                <h2>Front & Back</h2>

                <p className="techno-text">Afin d'aider nos clients à atteindre leurs objectifs marketing et commerciaux, nous mettons à leurs disposition des solutions sur mesure.</p>

                <div className="values-items">

                    <div className="value-bx">

                        <img src={reactJs} alt="equité" className="value-item" />
                        <span>React JS</span>

                    </div>

                    <div className="value-bx">

                         <img src={nodeJs} alt="respect" className="value-item" />
                         <span>Node JS</span>

                    </div>

                    <div className="value-bx">

                         <img src={laravel} alt="excellence" className="value-item" />
                         <span>Laravel</span>

                    </div>

                     <div className="value-bx">

                         <img src={reactJs} alt="excellence" className="value-item" />
                         <span>React Native</span>

                    </div>



                </div>





            </section>

            <Contact/>
        
        
        </>



    )




}