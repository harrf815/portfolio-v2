import React from "react";

import blogPhoto1 from "../img/06DrNxjsSoacWIEUI35EF5U-2..1569491152.jpg"
import blogPhoto2 from "../img/campus-4.jpg_w_1952.jpeg"
import blogPhoto3 from "../img/javascript.jpg.webp"
import blogPhoto4 from "../img/1*NYFhkQXeclrhupE_P64r3g.png"


const Blog = () => {
    
    return (
       <section className="section-blog">
          <div className="center-text-margin">
             <h2 className="heading-secondary">
                Blog
                <div className="underline"></div>
             </h2>
          </div>
          <div className="row">
             <div className="col-1-of-4">
                <div className="blog__card">
                   <a
                      className="blog__link"
                      href="https://harrf-akbar.medium.com/the-basics-of-building-an-app-e198884644d7"
                   >
                      <img className="blog__img" src={blogPhoto1} alt="app" />
                   </a>
                   <a
                      className="blog__link"
                      href="https://harrf-akbar.medium.com/the-basics-of-building-an-app-e198884644d7"
                   >
                      <p className=" blog__link blog__link-title">The Basics of Building an App</p>
                      <p className=" blog__link blog__link-date"> February 17, 2021</p>
                      <div className="line"></div>
                      <p className="blog__link  blog__link-text">
                         How do you even start building an app using rails? The first thing you need
                         to do is come up with an idea...
                      </p>
                   </a>
                </div>
             </div>
             <div className="col-1-of-4">
                <div className="blog__card">
                   <a
                      className="blog__link"
                      href="https://harrf-akbar.medium.com/the-basics-of-building-an-app-e198884644d7"
                   >
                      <img className="blog__img" src={blogPhoto2} alt="app" />
                   </a>
                   <a
                      className="blog__link"
                      href="https://harrf-akbar.medium.com/the-basics-of-building-an-app-e198884644d7"
                   >
                      <p className=" blog__link blog__link-title">My Experience in Bootcamp</p>
                      <p className=" blog__link blog__link-date"> February 28, 2021</p>
                      <div className="line"></div>
                      <p className="blog__link  blog__link-text">
                         It has been 7 weeks since I started my new career path to becoming software
                         engineer. Going into a new career path is very frightening...
                      </p>
                   </a>
                </div>
             </div>
             <div className="col-1-of-4">
                <div className="blog__card">
                   <a
                      className="blog__link"
                      href="https://harrf-akbar.medium.com/the-basics-of-building-an-app-e198884644d7"
                   >
                      <img className="blog__img" src={blogPhoto3} alt="app" />
                   </a>
                   <a
                      className="blog__link"
                      href="https://harrf-akbar.medium.com/the-basics-of-building-an-app-e198884644d7"
                   >
                      <p className=" blog__link blog__link-title">
                         The Love and the Struggle of JavaScript
                      </p>
                      <p className=" blog__link blog__link-date"> March 15, 2021</p>
                      <div className="line"></div>
                      <p className="blog__link  blog__link-text">
                         Going into my first vanilla JavaScript project was one of the most exciting
                         and stressful things to experience...
                      </p>
                   </a>
                </div>
             </div>
             <div className="col-1-of-4">
                <div className="blog__card">
                   <a
                      className="blog__link"
                      href="https://harrf-akbar.medium.com/the-basics-of-building-an-app-e198884644d7"
                   >
                      <img className="blog__img" src={blogPhoto4} alt="app" />
                   </a>
                   <a
                      className="blog__link"
                      href="https://harrf-akbar.medium.com/the-basics-of-building-an-app-e198884644d7"
                   >
                      <p className=" blog__link blog__link-title">LifeCycle Components</p>
                      <p className=" blog__link blog__link-date"> March 29, 2021</p>
                      <div className="line"></div>
                      <p className="blog__link  blog__link-text">
                         When you have a beginning there is always an ending in almost every way you
                         look it this statement. However, in this case we are referring to react
                         life...
                      </p>
                   </a>
                </div>
             </div>
          </div>
       </section>
    )
}

export default Blog; 