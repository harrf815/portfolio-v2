import React from 'react';

const Recipes = () => {

    return (
       <div className="col-1-of-3">
          {/*!!!!!! InstaRecipes !!!!!!*/}
          <div className="card">
             <div className="card__picture card__picture-3">&nbsp;</div>
             <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--1">InstaRecipes</span>
             </h4>
             <div className="card__tech">Ruby on Rails | JavaScript</div>
             <div className="card__links">
                <a className="card__button" href="https://github.com/harrf815/frondend">
                   <i className="github square icon"></i> Github{" "}
                </a>
                <span> | </span>
                <a className="card__button" href="#instarecipes">
                   Details
                </a>
             </div>
          </div>
       </div>
    )
}

export default Recipes;
