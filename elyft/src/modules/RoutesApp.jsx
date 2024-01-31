/** 
   *module responsible for managing all the application's routes
   * @param {} 
   * @return {html} jsx

 */

import {Routes,Route} from 'react-router-dom';
import { Home } from '../views/Home';
import { Services } from '../views/Services';
import { Techno } from '../views/Techno';
import { Propos } from '../views/Propos';
import { Blog } from '../views/Blog';
import { ServiceDetail } from '../views/ServiceDetail';




   export function RoutesApp () {






    return(

        <>
        
        
        <Routes>

            <Route index element={<Home/>}/>

            <Route path='/home' element={<Home/>}/>

            <Route path='/services' element={<Services/>}/>

            <Route path='/services/detail' element={<ServiceDetail/>}/>

            <Route path='/technologie' element={<Techno/>}/>

            <Route path='/apropos' element={<Propos/>}/>

            <Route path='/blog' element={<Blog/>}/>

           


        </Routes>
        
        
        
        
        
        
        
        
        
        
        
        </>


    )









   }