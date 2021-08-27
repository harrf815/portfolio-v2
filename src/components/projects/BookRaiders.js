import React from "react";

const BookRaiders = () => {

    return (
       <div className="col-1-of-3">
          {/*!!!!!! Book Raiders !!!!!!*/}
          <div className="card">
             <div className="card__picture card__picture-4">&nbsp;</div>
             <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--1">Book Raiders</span>
             </h4>
             <div className="card__tech">Ruby on Rails</div>
             <div className="card__links">
                <a className="card__button" href="https://github.com/harrf815/book-raiders">
                   <i className="github square icon"></i> Github{" "}
                </a>
                <span> | </span>
                <a className="card__button" href="#bookraiders">
                   Details
                </a>
             </div>
          </div>
       </div>
    )
}
export default BookRaiders;
