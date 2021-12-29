import React, {Component} from 'react'
import { Field } from '../Common/Field';
import { Formik, Form } from 'formik';

const field = {
  sections: [
    [
      {
        name: "name",
        elementName: "input",
        type: "text",
        id: "name",
        placeholder: "Your name*",
      },
      {
        name: "email",
        elementName: "input",
        type: "email",
        id: "email",
        placeholder: "Your email*",
      },
      {
        name: "phone",
        elementName: "input",
        type: "text",
        id: "phone",
        placeholder: "Your phone number*",
      },
    ],
    [
      {
        name: "message",
        elementName: "textarea",
        type: "text",
        id: "message",
        placeholder: "Type your message*",
      },
    ],
  ],
};
 
;
class Contact extends Component{
   

    submitForm = (e) => {
        alert('form submitted')
    }
    render(){

        return (
          <Formik
            initialValues={{
              name: "",
              email: "",
              phone: "",
              message: "",
            }}
          >
            {(formik) => (

              <section className="page-section" id="contact">
                
                <div className="container">
                  <div className="text-center">
                    <h2 className="section-heading text-uppercase">
                      Contact Us
                    </h2>
                    <h3 className="section-subheading text-muted">
                      Lorem ipsum dolor sit amet consectetur.
                    </h3>
                  </div>
                  <form
                    id="contactForm"
                    data-sb-form-api-token="API_TOKEN"
                    onSubmit={(e) => this.submitForm(e)}
                  >
                    <div className="row align-items-stretch mb-5">
                      {field.sections.map((section, index) => {
                        console.log(section);
                        return (
                          <div className="col-md-6" key={index}>
                            {section.map((input, index) => {
                                  {
                                    console.log(formik.values);
                                  }
                              return (
                                <Field
                                  {...input}
                                  key={index}
                                
                                 
                                />
                              );
                            })}
                          </div>
                        );
                      })}
                    </div>
                    <div className="d-none" id="submitSuccessMessage">
                      <div className="text-center text-white mb-3">
                        <div className="fw-bolder">
                          Form submission successful!
                        </div>
                        To activate this form, sign up at
                        <br />
                        <a href="https://startbootstrap.com/solution/contact-forms">
                          https://startbootstrap.com/solution/contact-forms
                        </a>
                      </div>
                    </div>

                    <div className="d-none" id="submitErrorMessage">
                      <div className="text-center text-danger mb-3">
                        Error sending message!
                      </div>
                    </div>
                    <div className="text-center">
                      <button
                        className="btn btn-primary btn-xl text-uppercase "
                        id="submitButton"
                        type="submit"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </section>
            )}
          </Formik>
        );
    }
}

export default Contact