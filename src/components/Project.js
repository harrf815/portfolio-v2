import React from "react"

import ModalInsta from './modal/ModalIntsa'
import ModalManage from './modal/ModalManage'
import ModalBrew from './modal/ModalBrew'
import ModalRecipes from './modal/ModalRecipes'
import ModalBook from './modal/ModalBook'



const Project = () => {
   

   return (
      <section id="section-project" className="section-project">
         <div className="center-text-margin">
            <h2 className="heading-secondary">
               Projects
               <div className="underline"></div>
            </h2>
         </div>

         <div className="row">
            <div className="col-1-of-3">
               {/*!!!!!! InstaRecipes2.0 !!!!!!*/}
               <div className="card">
                  <div className="card__picture card__picture-0">&nbsp;</div>
                  <h4 className="card__heading">
                     <span className="card__heading-span card__heading-span--1">
                        InstaRecipes2.0
                     </span>
                  </h4>
                  <div className="card__tech">Node.js | React Hooks</div>
                  <div className="card__links">
                     <a
                        className="card__button"
                        href="https://github.com/harrf815/InstaRecipes2.0-frontend"
                     >
                        <i className="github square icon"></i> Github{" "}
                     </a>
                     <span> | </span>
                     <a className="card__button" href="#instarecipes2.0">
                        Details
                     </a>
                  </div>
               </div>
            </div>
            <div className="col-1-of-3">
               {/*!!!!!! ManageLite !!!!!!*/}
               <div className="card">
                  <div className="card__picture card__picture-1">&nbsp;</div>
                  <h4 className="card__heading">
                     <span className="card__heading-span card__heading-span--1">Manage Lite</span>
                  </h4>
                  <div className="card__tech">Ruby on Rails | React Hooks, Redux</div>
                  <div className="card__links">
                     <a className="card__button" href="https://github.com/harrf815/phase5-frontend">
                        <i className="github square icon"></i> Github{" "}
                     </a>
                     <span> | </span>
                     <a className="card__button" href="#managelite">
                        Details
                     </a>
                  </div>
               </div>
            </div>
            <div className="col-1-of-3">
               {/*!!!!!! Brew Project !!!!!!*/}
               <div className="card">
                  <div className="card__picture card__picture-2">&nbsp;</div>
                  <h4 className="card__heading">
                     <span className="card__heading-span card__heading-span--1">Brew Project</span>
                  </h4>
                  <div className="card__tech">Ruby on Rails | React.js</div>
                  <div className="card__links">
                     <a className="card__button" href="https://github.com/harrf815/brew-frontend">
                        <i className="github square icon"></i> Github{" "}
                     </a>
                     <span> | </span>
                     <a className="card__button" href="#brewproject">
                        Details
                     </a>
                  </div>
               </div>
            </div>
         </div>
         <div className="row">
            <div className="col-1-of-3">
               {/*!!!!!! InstaRecipes !!!!!!*/}
               <div className="card">
                  <div className="card__picture card__picture-3">&nbsp;</div>
                  <h4 className="card__heading">
                     <span className="card__heading-span card__heading-span--1">InstaRecipes</span>
                  </h4>
                  <div className="card__tech">Ruby on Rails | JavaScript</div>
                  <div className="card__links">
                     <a className="card__button" href="https://github.com/harrf815/frondend">
                        <i className="github square icon"></i> Github{" "}
                     </a>
                     <span> | </span>
                     <a className="card__button" href="#instarecipes">
                        Details
                     </a>
                  </div>
               </div>
            </div>
            <div className="col-1-of-3">
               {/*!!!!!! Book Raiders !!!!!!*/}
               <div className="card">
                  <div className="card__picture card__picture-4">&nbsp;</div>
                  <h4 className="card__heading">
                     <span className="card__heading-span card__heading-span--1">Book Raiders</span>
                  </h4>
                  <div className="card__tech">Ruby on Rails</div>
                  <div className="card__links">
                     <a className="card__button" href="https://github.com/harrf815/book-raiders">
                        <i className="github square icon"></i> Github{" "}
                     </a>
                     <span> | </span>
                     <a className="card__button" href="#bookraiders">
                        Details
                     </a>
                  </div>
               </div>
            </div>
         </div>
         <ModalInsta />
         <ModalManage />
         <ModalBook />
         <ModalBrew />
         <ModalRecipes />
      </section>
   )
}

export default Project;