import React, {Component} from "react";
import {Formik, useField, ErrorMessage} from 'formik'
import Contact from "../Pages/Contact";



export const Field = (props) => {

        const [ field, meta ]= useField(props);
        return (
          <div>
            {props.name === "message" ? (
              <div className="form-group form-group-textarea mb-md-0">
                <textarea className={`form-control  ${meta.touched && meta.error && 'is-invalid'} `} {...field} {...props} />
                <div style={{ color: "white" }}>
                  <ErrorMessage name={field.name} />
                </div>
              </div>
            ) : (
              <div className="form-group">
                <input className="form-control" {...field} {...props} />
                <div style={{ color: "white" }}>
                  <ErrorMessage name={field.name} />
                </div>
              </div>
            )}
          </div>
        );
    }


