import React from "react";

import background from "../img/mountain.mp4";
import background2 from "../img/mount.webm";

const Header = () => {

    return (
       //    <div className="bg-video">
       //       <video className="bg-video__content" autoplay muted loop>
       //          <source src={background2} type="video/webm"></source>
       //          {/* <source src={background} type="video/mp4"></source> */}
       //          Your browser is not supported!
       //       </video>
       //    </div>
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

          <div className="center-text header__text-box">
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