import React, {Component} from 'react'
import { Field } from '../Common/Field';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { object } from 'yup';

let validate = Yup.object({
  name:Yup.string().required().min(3, 'name must be more that three characters'),
  email:Yup.string().email('Email is invalid').required(),
  phone:Yup.number().min(10, "must have 10 numbers"),
  message:Yup.string().required()
})
 
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

            validationSchema={validate}
            onSubmit={values => {
              console.log(values)
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
                  <Form
                    id="contactForm"
                    data-sb-form-api-token="API_TOKEN"
                  >
                    <div className="row align-items-stretch mb-5">
                      <div className="col-md-6">
                        <Field
                          label="name"
                          name="name"
                          type="text"
                          placeholder="Your name*"
                        />
                        <Field
                          label="email"
                          name="email"
                          type="email"
                          placeholder="Your email address*"
                        />
                        <Field
                          label="phone"
                          name="phone"
                          type="text"
                          placeholder="Your phone number*"
                        />
                      </div>
                      <div className="col-md-6">
                        <Field
                          label="message"
                          name="message"
                          type="message"
                          placeholder="Type your message here"
                        />
                      </div>
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
                  </Form>
                </div>
              </section>
            )}
          </Formik>
        );
    }
}

export default Contact