import React from 'react';
import Email from './Email';

const Contact = () => {

    return (
        <section id="section-contact" className="section-contact">
          <div className="center-text-margin">
             <h2 className="heading-secondary">
                Contact
                <div className="underline"></div>
             </h2>
          </div>
          <Email />
       </section>
    )
}

export default Contact; 