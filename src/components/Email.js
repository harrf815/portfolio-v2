import React from "react"
import emailjs from "emailjs-com"

class Email extends React.Component {
   sendEmail = (e) => {
      e.preventDefault()

      emailjs
         .sendForm("service_kgdvhmw", "template_o9hmz3m", e.target, "user_sTstz4w3zah8jfP0wHZ57")
         .then(
            function (response) {
               console.log("SUCCESS!", response.status, response.text)
            },
            function (error) {
               console.log("FAILED...", error)
            }
         )

      e.target.reset()
   }

   render() {
      return (
         <div>
            <div className="container">
               <form className="form" onSubmit={this.sendEmail}>
                  <div className="email-form">
                     <div className="form__group">
                        <input
                           type="textarea"
                           className="form__control"
                           placeholder="Name"
                           name="name"
                           id="name"
                           required
                        />
                        <label for="name" className="form__label">
                           Name
                        </label>
                     </div>
                     <div>
                        <input
                           type="textarea"
                           className="form__control"
                           placeholder="Email Address"
                                  name="email"
                                  id="email"
                                  required
                        />
                        <label for="email" className="form__label">
                           Email Address
                        </label>
                     </div>
                     <div>
                        <input
                           type="textarea"
                           className="form__control"
                           placeholder="Subject"
                                  name="subject"
                                  id="subject"
                                  required
                        />
                        <label for="subject" className="form__label">
                           Subject
                        </label>
                     </div>
                     <div>
                        <textarea
                           type="textarea"
                           className="form__control form__control-message"
                           placeholder="Message"
                                  name="message"
                                  id="message"
                                  required
                        />
                        <label for="message" className="form__label">
                          Message
                        </label>
                     </div>
                     <div>
                        <input type="submit" className="form__button" value="Send Message" />
                     </div>
                  </div>
               </form>
            </div>
         </div>
      )
   }
}
export default Email
