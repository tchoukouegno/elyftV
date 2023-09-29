/** 
   *module responsible for managing all the application's routes
   * @param {} 
   * @return {html} jsx

 */

import {Routes,Route} from 'react-router-dom';
import { Home } from '../views/Home';




   export function RoutesApp () {






    return(

        <>
        
        
        <Routes>

            <Route index element={<Home/>}/>



        </Routes>
        
        
        
        
        
        
        
        
        
        
        
        </>


    )









   }