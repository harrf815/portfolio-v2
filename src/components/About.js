import React from "react";

import { IconContext } from "react-icons/lib"
import { FaReact, FaHtml5, FaSass } from "react-icons/fa"
import {
   SiJavascript,
   SiRedux,
   SiNodeDotJs,
   SiRuby,
   SiPostgresql,
   SiCss3,
   SiMongodb,
} from "react-icons/si"

import Me from "../img/me.JPG"

const About = () => {

    return (
       <section id="section-about" className="section-about">
          <div className="center-text-margin">
             <h2 className="heading-secondary">
                About
                <div className="underline"></div>
             </h2>
          </div>
          <div className="about">
             <div className="about__content">
                <div className="about__row-1">
                   <div className="about__left">
                      <img className="about__img" src={Me} alt="me" />
                   </div>
                   <div className="about__right">
                      <h3 className="heading-tertiary">About me</h3>
                      <div className="line-2"></div>
                      <p className="about__text">
                         I'm a Software Engineer looking to join a stable company that offers an
                         opportunity for growth while continuing to contribute my expertise and
                         experience to benefit mutual growth and success. I have years of managerial
                         experience and I excel at taking on new tasks and responsibilities and
                         adapting them quickly to different environments. I always try my best to
                         get the best results. My goals when building application is always
                         responsive, dynamic, and efficent. If I don't know how to do something I
                         always try to learn the materials I need to be successful. I thrive to
                         always learning and being the best I can be for myself and for others. When
                         I'm not working hard as a software engineer, I love to be active, I enjoy
                         playing sports. Some of my top sports are football, basketball and
                         volleyball. Family and friends are very important to me. I also enjoy
                         hiking, camping, traveling, and my favorite laying on the beach. I may come
                         as a quiet and shy person, but once you get to know you I am a fun and
                         outgoing person. I always try to light up the room if I can.
                      </p>
                   </div>
                </div>
                <div className="about__row-1">
                   <div className="about__right about__right-2">
                      <h3 className="heading-tertiary">What motives me</h3>
                      <div className="line-2"></div>
                      <p className="about__text">
                         When it comes down to it the best part about me is, I am hard worker and an
                         honest person. I try to always be true to myself and what pushes me to do
                         my best is growth and myself. I want to be better; I want to be the best at
                         what I do. It doesn’t matter what it is I always want to achieve the best
                         for myself. When I’m doing my best, I know I can help contribute those
                         around me and I want nothing but positive impact for those that are around
                         me. For me to be the best is to knowledge where I stand with my skills and
                         know that this path I have chosen is going to be a long journey learning. I
                         know that from this point on I need continue to grow and try to learn as
                         much as I can about my field and the vast of languages and frame works that
                         is path has waiting for me. Not only do I want to continue to learn more
                         but to master what I have already learned. This is what pushes me to
                         achieve my greatness.
                      </p>
                   </div>
                   <div className="about__left about__left-2">
                      <h3 className="heading-tertiary">Technical Skills</h3>
                      <div className="line-3"></div>
                      <div className="about__skills">
                         <div className="set-1">
                            <IconContext.Provider value={{ color: "#F0DB4F" }}>
                               <div>
                                  <p className="skill-icon1">
                                     <SiJavascript /> Javascript{" "}
                                  </p>
                               </div>
                            </IconContext.Provider>
                            <IconContext.Provider value={{ color: "#61DBFB" }}>
                               <div>
                                  <p className="skill-icon2">
                                     <FaReact /> React.js{" "}
                                  </p>
                               </div>
                            </IconContext.Provider>
                            <IconContext.Provider value={{ color: "#764abc" }}>
                               <div>
                                  <p className="skill-icon3">
                                     <SiRedux /> Redux{" "}
                                  </p>
                               </div>
                            </IconContext.Provider>
                            <IconContext.Provider value={{ color: "#68A063" }}>
                               <div>
                                  <p className="skill-icon4">
                                     <SiNodeDotJs /> Node.js{" "}
                                  </p>
                               </div>
                            </IconContext.Provider>
                            <IconContext.Provider value={{ color: "#D51F06" }}>
                               <div>
                                  <p className="skill-icon5">
                                     <SiRuby /> Ruby on Rails{" "}
                                  </p>
                               </div>
                            </IconContext.Provider>
                         </div>
                         <div className="set-2">
                            <IconContext.Provider value={{ color: "#264de4 " }}>
                               <div>
                                  <p className="skill-icon6">
                                     <SiCss3 /> CSS{" "}
                                  </p>
                               </div>
                            </IconContext.Provider>
                            <IconContext.Provider value={{ color: "#e34c26" }}>
                               <div>
                                  <p className="skill-icon7">
                                     <FaHtml5 /> HTML{" "}
                                  </p>
                               </div>
                            </IconContext.Provider>
                            <IconContext.Provider value={{ color: "#336791" }}>
                               <div>
                                  <p className="skill-icon8">
                                     <SiPostgresql /> PostgreSQL{" "}
                                  </p>
                               </div>
                            </IconContext.Provider>
                            <IconContext.Provider value={{ color: "#4DB33D" }}>
                               <div>
                                  <p className="skill-icon9">
                                     <SiMongodb /> MongoDB{" "}
                                  </p>
                               </div>
                            </IconContext.Provider>
                            <IconContext.Provider value={{ color: "#CD6799" }}>
                               <div>
                                  <p className="skill-icon10">
                                     <FaSass /> SASS{" "}
                                  </p>
                               </div>
                            </IconContext.Provider>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </section>
    )
}

export default About; 