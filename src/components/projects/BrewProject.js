import React from 'react';

const BrewProject = () => {

    return (
       <div className="col-1-of-3">
          {/*!!!!!! Brew Project !!!!!!*/}
          <div className="card">
             <div className="card__picture card__picture-2">&nbsp;</div>
             <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--1">Brew Project</span>
             </h4>
             <div className="card__tech">Ruby on Rails | React.js</div>
             <div className="card__links">
                <a className="card__button" href="https://github.com/harrf815/brew-frontend">
                   <i className="github square icon"></i> Github{" "}
                </a>
                <span> | </span>
                <a className="card__button" href="#brewproject">
                   Details
                </a>
             </div>
          </div>
       </div>
    )
}

export default BrewProject;
