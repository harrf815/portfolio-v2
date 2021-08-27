import React from "react"
import { Carousel } from "react-responsive-carousel"

import MGphoto1 from "../img/Screen Shot 2021-07-30 at 5.47.18 PM.png"
import MGphoto2 from "../img/Screen Shot 2021-07-30 at 5.47.55 PM.png"
import MGphoto3 from "../img/Screen Shot 2021-07-30 at 5.48.08 PM.png"

import "react-responsive-carousel/lib/styles/carousel.min.css"

const ModalManage = () => {
   return (
      <div id="managelite" className="modal">
         <div className="modal__content">
            <div className="modal__top">
               {/* <img className="modal__images" src={MGphoto1} alt="managelite" /> */}
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
               <h5>Hello</h5>
               <p>Testing</p>
               <div className="line"></div>
               <p>managelite</p>
            </div>
            <div>
               <ul>
                  <li>456546</li>
               </ul>
            </div>
         </div>
      </div>
   )
}

export default ModalManage
