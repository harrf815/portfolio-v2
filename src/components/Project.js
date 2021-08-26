import React, { useState } from "react"

const Project = () => {
    const [showModal, setShowModal] = useState(false)
    const [detail, setDetail] = useState("")

    return (
       <section id="section-project" className="section-project">
          <div className="center-text-margin">
             <h2 className="heading-secondary">
                Projects
                <div className="underline"></div>
             </h2>
          </div>
          <div className="row">
             <div className="col-1-of-3">
                <div className="card">
                   <div className="card__picture card__picture-1">&nbsp;</div>
                   <h4 className="card__heading">
                      <span class="card__heading-span card__heading-span--1">InstaRecipes2.0</span>
                   </h4>
                   <div className="card__tech">Node.js | React Hooks</div>
                   <div className="card__links">
                      <a className="card__github" href="https://github.com/harrf815/phase5-frontend">
                         <i className="github square icon"></i> Github{" "}
                      </a>
                      <span> | </span>
                      <button
                         className="card__button"
                         onClick={() => {
                            setShowModal(true)
                            setDetail("instarecpies2.0")
                         }}
                      >
                         Details
                      </button>
                   </div>
                </div>
             </div>
          </div>
       </section>
    )
}

export default Project;