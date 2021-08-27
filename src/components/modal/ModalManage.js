import React from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

import MGphoto1 from "../../img/Screen Shot 2021-07-30 at 5.47.18 PM.png"
import MGphoto2 from "../../img/Screen Shot 2021-07-30 at 5.47.55 PM.png"
import MGphoto3 from "../../img/Screen Shot 2021-07-30 at 5.48.08 PM.png"


const ModalManage = () => {
   return (
      <div id="managelite" className="modal">
         <div className="modal__content">
            <div className="modal__top">
               <Carousel
                  autoPlay={true}
                  axis="horizontal"
                  infiniteLoop={true}
                  showThumbs={false}
                  showStatus={false}
                  showIndicators={false}
               >
                  <div>
                     <img className="modal__images" src={MGphoto1} alt="managelite" />
                  </div>
                  <div>
                     <img className="modal__images" src={MGphoto2} alt="managelite" />
                  </div>
                  <div>
                     <img className="modal__images" src={MGphoto3} alt="managelite" />
                  </div>
               </Carousel>
            </div>

            <div className="modal__bottom">
               <a href="#section-projects" className="modal__close">
                  &times;
               </a>
               <h5 className="modal__heading">Manage Lite</h5>
               <p className="modal__tech">
                  Technology: Javascript | React Hooks | Node.js | MongoDB | Express | Mongoose |
                  Bcrypt | JWT | Semantic-UI
               </p>
               <div className="modal__line"></div>
               <p className="modal__text">
                  {" "}
                  Community based application that brings all the foodies to one place and share the
                  same experience together. InstaReciepes allows the user to post their well known
                  recipes to share with the community. User can simply fill out a form that requires
                  a name, the recipe, and an image for the user to share their favorite dish. With
                  2.0 users are able to create an account to post their recipes and even edit or
                  delete their recipes.
               </p>
            </div>
            <ul className="modal__list"> 
               <li>
                  Utilized JSON Web Tokens and MongoDB to store encrypted user information on the
                  server side.
               </li>
               <li>Engineered a search engine that filters through different types of dishes</li>
               <li>
                  Implemented a design to develop a design strategy that provides a user friendly
                  experience
               </li>
            </ul>
         </div>
      </div>
   )
}

export default ModalManage
