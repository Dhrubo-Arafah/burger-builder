import React, { Component } from 'react';
import { Formik } from 'formik';
import './Auth.css'

class Auth extends Component {
 render() {
  return (
   <div>
    <Formik
     initialValues={
      {
       email: "",
       password: "",
       passwordConfirm: "",
      }
     }

     onSubmit={
      (values) => {
       console.log("Values", values);
      }
     }

     validate={(values) => {
      const errors = {};

      if (!values.email) {
       errors.email = 'Required'
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
       errors.email = 'Invalid email address';
      }

      if (!values.password) {
       errors.password = 'Required'
      } else if (values.password.length < 4) {
       errors.password = 'Must be atleast 4 character'
      }

      if (!values.passwordConfirm) {
       errors.passwordConfirm = 'Required'
      } else if (values.password !== values.passwordConfirm) {
       errors.passwordConfirm = "Password field doesn't match!";
      }

      console.log("Errors", errors)
      return errors;
     }}

    >
     {({ values, handleChange, handleSubmit, errors }) => (<div>
      <form onSubmit={handleSubmit} className="Form">
       <input
        name="email"
        placeholder="Enter Your Email"
        className="form-control"
        value={values.email}
        onChange={handleChange}
       />
       <span className="Errors">{errors.email}</span>
       <br />
       <input
        name="password"
        placeholder="Password"
        className="form-control"
        value={values.password}
        onChange={handleChange}
       />
       <span className="Errors">{errors.password}</span>
       <br />
       <input
        name="passwordConfirm"
        placeholder="Confirm Password"
        className="form-control"
        value={values.passwordConfirm}
        onChange={handleChange}
       />
       <span className="Errors">{errors.passwordConfirm}</span>
       <br />
       <button type="submit" className="btn btn-success">Sign Up</button>
      </form>
     </div>)}
    </Formik>
   </div>
  )
 }
}

export default Auth;