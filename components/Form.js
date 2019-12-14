import React, { useContext } from 'react';

import Router from 'next/router';

import AppContext from '../contexts/AppContext';

const Form = () => {
  const { setUser } = useContext(AppContext);

  const handleSubmit = e => {
    e.preventDefault();

    const form = document.userForm;
    const formData = new FormData(form);

    setUser({
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
    });

    Router.push('/illnesses');
  };

  return (
    <form
      name="userForm"
      id="userForm"
      onSubmit={handleSubmit}
      className="col s8 offset-s2"
    >
      <h5>Who are you?</h5>
      <div className="row">
        <div className="input-field col s6">
          <input
            name="firstName"
            id="firstName"
            type="text"
            className="validate"
            required
          />
          <label htmlFor="firstName">First Name</label>
          <span
            className="helper-text"
            data-error="Please enter your first name."
          />
        </div>
        <div className="input-field col s6">
          <input
            name="lastName"
            id="lastName"
            type="text"
            className="validate"
            required
          />
          <label htmlFor="lastName">Last Name</label>
          <span
            className="helper-text"
            data-error="Please enter your last name."
          />
        </div>
        <div className="input-field col s12">
          <input
            name="email"
            id="email"
            type="email"
            className="validate"
            required
          />
          <label htmlFor="email">Email</label>
          <span
            className="helper-text"
            data-error="Please enter a valid email."
          />
        </div>
        <div className="col s12 center-align">
          <button className="btn waves-effect waves-light" type="submit">
            Submit
            <i className="material-icons right">send</i>
          </button>
        </div>
      </div>
      <style jsx>
        {`
          .btn {
            margin-top: 2rem;
          }
        `}
      </style>
    </form>
  );
};

export default Form;
