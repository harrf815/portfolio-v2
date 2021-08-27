import React from "react";
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

import BRphoto1 from "../../img/Screen Shot 2021-08-01 at 12.09.17 PM.png"
import BRphoto2 from "../../img/Screen Shot 2021-08-01 at 12.11.29 PM.png"
import BRphoto3 from "../../img/Screen Shot 2021-08-01 at 12.10.41 PM.png"


const ModalBook = () => {

    return (
       <div id="bookraiders" className="modal">
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
                      <img className="modal__images" src={BRphoto1} alt="managelite" />
                   </div>
                   <div>
                      <img className="modal__images" src={BRphoto2} alt="managelite" />
                   </div>
                   <div>
                      <img className="modal__images" src={BRphoto3} alt="managelite" />
                   </div>
                </Carousel>
             </div>

             <div className="modal__bottom">
                <a href="#section-projects" className="modal__close">
                   &times;
                </a>
                <h5 className="modal__heading">Book Raiders</h5>
                <p className="modal__tech">
                   Technology: Ruby on Rails | ActiveRecords | HTML | CSS{" "}
                </p>
                <div className="modal__line"></div>
                <p className="modal__text">
                   {" "}
                   A ruby on rails application that uses an open api database of a list of books.
                   Users are able to create an account and post reviews of books they have read.
                   Users are able to view other books and see their average rating and all he
                   reviews written by other users.
                </p>
             </div>
             <ul className="modal__list">
                <li>Engineered user interface using strictly Ruby on Rails and ActiveRecords</li>
                <li>
                   Developed an application using JWT and Rails to secure an authentication users{" "}
                </li>
                <li>
                   Implemented a design to develop UI and UX design strategy that provides a
                   seamless user experience
                </li>
             </ul>
          </div>
       </div>
    )
}

export default ModalBook; 