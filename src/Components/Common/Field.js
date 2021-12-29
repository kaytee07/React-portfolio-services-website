import React, {Component} from "react";
import {Formik, useField} from 'formik'
import Contact from "../Pages/Contact";



export const Field = (props) => {

        const [ field, meta ]= useField(props);
        console.log(field)
        return (
          <div>
            {props.elementName === "input" ? (
              <div className="form-group">
                <input
                {...field} {...props}
                  className="form-control"
                  id={props.id}
                  type={props.type}
                  placeholder={props.placeholder}
                  name={props.name}
            
                  onChange={props.onChange}
                  data-sb-validations="required"
                />
                <div
                  className="invalid-feedback"
                  data-sb-feedback="name:required"
                >
                  A {props.name} is required.
                </div>
              </div>
            ) : (
              <div className="form-group form-group-textarea mb-md-0">
                <textarea
                  className="form-control"
                  id={props.id}
                  type={props.type}
                  placeholder={props.placeholder}
                  name={props.name}
                  
                  onChange={props.onChange}
                  data-sb-validations="required"
                />
                <div
                  className="invalid-feedback"
                  data-sb-feedback="name:required"
                >
                  A {props.name} is required.
                </div>
              </div>
            )}
          </div>
        );
    }


