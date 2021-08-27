import React from "react";
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

import BWphoto1 from "../../img/Screen Shot 2021-07-30 at 5.23.15 PM.png"
import BWphoto2 from "../../img/Screen Shot 2021-07-30 at 5.23.37 PM.png"

const ModalBrew = () => {

    return (
       <div id="brewproject" className="modal">
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
                      <img className="modal__images" src={BWphoto1} alt="managelite" />
                   </div>
                   <div>
                      <img className="modal__images" src={BWphoto2} alt="managelite" />
                   </div>
                </Carousel>
             </div>

             <div className="modal__bottom">
                <a href="#section-projects" className="modal__close">
                   &times;
                </a>
                <h5 className="modal__heading">Brew Project</h5>
                <p className="modal__tech">
                   Technology: Javascript | React.js | Ruby on Rails | ActiveRecords | PostgreSQL |
                   Bcrypt | JWT | Semantic-UI
                </p>
                <div className="modal__line"></div>
                <p className="modal__text">
                   {" "}
                   Brew Project is a search application. That allows the user to explore hundreds of
                   breweries from all over the United States, brought by the an open brewery
                   database API. A user can view all by state, search using one of the search bars,
                   or find one on the map-box provided map. As a user you can even drop a review
                   after visiting so other users know what's up!
                </p>
             </div>
             <ul className="modal__list">
                <li>
                   Authenticated users at login by encrypting identifying account information via
                   JWT
                </li>
                <li>
                   Implemented Geolocation to show all the breweries located around the user’s
                   location
                </li>
                <li>
                   Developed Javascript, React front-end and Rails, Active Records, Postgres
                   back-end applications
                </li>
                <li>
                   Engineered a search engine that filters through every brewery in the US by using
                   a few characters or by state
                </li>
             </ul>
          </div>
       </div>
    )
}

export default ModalBrew; 