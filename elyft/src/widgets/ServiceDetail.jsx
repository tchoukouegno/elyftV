import { Header } from "../widgets/Header";
import pexelsFauxels from "../assets/img/pexelsFauxels.jpg";
import { Contact } from "../widgets/Contact";
import {useNavigate, Outlet} from "react-router-dom";






export function ServiceDetail () {


    return(

        <>
        
            <Header pageTitle="Votre Transformation Numérique Commence Ici." srcImg={pexelsFauxels} headerDescription="Réimaginez Votre business avec des technologies sur-mesure, améliorer l'expérience client" activeServices="activeServices" />

               application mobile
               
              

            <Contact/>
        
        
            {/* <Outlet/> */}
        
        
        
        </>





    )



}