import { Contact } from "../widgets/Contact";
import { Header } from "../widgets/Header";
import startup from "../assets/img/startup.jpg"







export function Blog () {



    return(

        <>
        
            <Header pageTitle="Explorez le monde du numérique, Découvrez de nouvelles opportunités" srcImg={startup} activeBlog="activeBlog"/>


               <div className="card-blog-items">

                    <div className="card-blog-item">

                        <div className="blog-img"></div>

                        <div className="blog-title-name">

                            <span  className="blog-title">Article Title</span>
                            <span>Author Name</span>

                        </div>

                    </div>

                    <div className="card-blog-item">

                        <div className="blog-img"></div>

                        <div className="blog-title-name">

                            <span className="blog-title">Article Title</span>
                            <span>Author Name</span>

                        </div>

                    </div>

                    <div className="card-blog-item">

                        <div className="blog-img"></div>

                        <div className="blog-title-name">

                            <span className="blog-title">Article Title</span>
                            <span>Author Name</span>

                        </div>

                    </div>

                    <div className="card-blog-item">

                        <div className="blog-img"></div>

                        <div className="blog-title-name">

                            <span className="blog-title">Article Title</span>
                            <span>Author Name</span>

                        </div>

                    </div>

                    <div className="card-blog-item">

                        <div className="blog-img"></div>

                        <div className="blog-title-name">

                            <span className="blog-title">Article Title</span>
                            <span>Author Name</span>

                        </div>

                    </div>

                    <div className="card-blog-item">

                        <div className="blog-img"></div>

                        <div className="blog-title-name">

                            <span className="blog-title">Article Title</span>
                            <span>Author Name</span>

                        </div>

                    </div>









               </div>

            <Contact/>
        
        
        
        
        
        </>




    )



}