import React from "react";

const InstaRecipes = () => {

    return (
       <div className="col-1-of-3">
          {/*!!!!!! InstaRecipes2.0 !!!!!!*/}
          <div className="card">
             <div className="card__picture card__picture-0">&nbsp;</div>
             <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--1">InstaRecipes2.0</span>
             </h4>
             <div className="card__tech">Node.js | React Hooks</div>
             <div className="card__links">
                <a
                   className="card__button"
                   href="https://github.com/harrf815/InstaRecipes2.0-frontend"
                >
                   <i className="github square icon"></i> Github{" "}
                </a>
                <span> | </span>
                <a className="card__button" href="#instarecipes2.0">
                   Details
                </a>
             </div>
          </div>
       </div>
    )
}

export default InstaRecipes;
