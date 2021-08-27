import React from "react";

const ManageLite = () => {

    return (
       <div className="col-1-of-3">
          {/*!!!!!! ManageLite !!!!!!*/}
          <div className="card">
             <div className="card__picture card__picture-1">&nbsp;</div>
             <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--1">Manage Lite</span>
             </h4>
             <div className="card__tech">Ruby on Rails | React Hooks, Redux</div>
             <div className="card__links">
                <a className="card__button" href="https://github.com/harrf815/phase5-frontend">
                   <i className="github square icon"></i> Github{" "}
                </a>
                <span> | </span>
                <a className="card__button" href="#managelite">
                   Details
                </a>
             </div>
          </div>
       </div>
    )
}

export default ManageLite; 