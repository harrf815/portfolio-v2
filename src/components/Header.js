import React from "react";

import background from "../img/mountain.mp4";
import background2 from "../img/mount.webm";

const Header = () => {

    return (
       <section id="section-header" className="section-header header">
          <div
             className="bg-video"
             dangerouslySetInnerHTML={{
                __html: `
                  <video
                     loop
                     muted
                     autoplay
                     playsinline
                     src="${background}"
                     class="bg-video__content"
                  />,
                  <video
                     loop
                     muted
                     autoplay
                     playsinline
                     src="${background2}"
                     class="bg-video__content"
                  />,
                  `,
             }}
          ></div>

          <div className="center-text-margin header__text-box">
             <h1 className="heading-primary">
                <span className="heading-primary--main">Hello! My name is </span>
                <span className="heading-primary--sub"> Harrf Akbar</span>
             </h1>
             <a href="#section-about" className="btn-text">About Me &rarr;</a>
          </div>
       </section>
    )
}

export default Header; 