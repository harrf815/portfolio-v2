import React from "react";
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

import INphoto1 from "../../img/Screen Shot 2021-07-31 at 9.56.50 PM.png"
import INphoto2 from "../../img/Screen Shot 2021-07-31 at 9.57.07 PM.png"


const ModalRecippes = () => {

    return (
       <div id="instarecipes" className="modal">
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
                      <img className="modal__images" src={INphoto1} alt="managelite" />
                   </div>
                   <div>
                      <img className="modal__images" src={INphoto2} alt="managelite" />
                   </div>
                </Carousel>
             </div>

             <div className="modal__bottom">
                <a href="#section-projects" className="modal__close">
                   &times;
                </a>
                <h5 className="modal__heading">InstaRecipes</h5>
                <p className="modal__tech">
                   Technology: Javascript | Ruby on Rails | ActiveRecords | PostgreSQL | Semantic-UI{" "}
                </p>
                <div className="modal__line"></div>
                <p className="modal__text">
                   {" "}
                   Community based application that brings all the foodies to one place and share
                   the same experience together. InstaReciepes allows the user to post their well
                   known recipes to share with the community. User can simply fill out a form that
                   requires a name, the recipe, and an image for the user to share their favorite
                   dish.
                </p>
             </div>
             <ul className="modal__list">
                <li>
                   Implemented a design to develop UI and UX design strategy that provides a
                   seamless user experience
                </li>
                <li>
                   Engineered user interface using Javascript as the front-end and Rails, Active
                   Record as back-end
                </li>
                <li>Developed an application strictly using vanilla Javascript</li>
             </ul>
          </div>
       </div>
    )
}

export default ModalRecippes;