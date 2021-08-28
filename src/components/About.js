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
                         Hello. My name is Harrf Akbar and I am a software engineer. I am currently
                         looking to join a stable company that offers an opportunity for growth
                         while continuing to contribute my expertise and experience to benefit
                         mutual growth and success. I have 10+ years of managerial experience and I
                         excel at taking on new tasks and responsibilities needed. I strive to adapt
                         myself quickly into different environments and provide consistent results.
                         My goals when building an application are to be responsive, dynamic, and
                         efficient. I believe in a mindset of continuing education where I can
                         strengthen my knowledge on new material for any project or language. When I
                         am not working as a software engineer; I love spending time with my family
                         and friends as well as my hobbies. I try to stay active by playing various
                         sports such as football, basketball, and volleyball. I also enjoy camping
                         and traveling, however my ultimate enjoyment is laying on the beach. Thank
                         you for taking the time and learning more about myself and my work. I hope
                         for an opportunity to discuss my further goals and endeavors with you.
                      </p>
                   </div>
                </div>
                <div className="about__row-1">
                   <div className="about__right about__right-2">
                      <h3 className="heading-tertiary">What motivates me</h3>
                      <div className="line-2"></div>
                      <p className="about__text">
                         When breaking it down on what pushes me the hardest and what motivates me is…
                         myself. I know it may not be your typical answer, however, I know who I am
                         is not only a reflection of my work, but of the others around me. My
                         current mindset is to believe that I want to be better, I want to be the
                         best at what I do, and I want to continually grow. When I am striving and
                         doing my best, I know I can actively contribute to those around me and make
                         a positive impact in my community. I am aware where I currently stand with
                         my skills and know that this path and field has a long and difficult
                         journey ahead. Our field consists of many complex languages, frameworks,
                         and information that I can only hope to succeed in. I am not done learning,
                         and I will never stop learning. I understand the areas I need to
                         strengthen, and I know I can expand my knowledge to reach my highest
                         potential. I have come far from where I was a couple years ago, and I am
                         only just getting started.
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