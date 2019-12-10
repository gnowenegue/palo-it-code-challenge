import React, { useContext, useEffect } from 'react';

const Severity = props => {
  useEffect(() => {
    document.querySelectorAll('input[type="radio"]').forEach(radioBtn => {
      radioBtn.addEventListener('change', function(e) {
        props.setSeverity(parseInt(e.target.value));

        document
          .querySelector('#severity.modal .modal-footer a')
          .classList.remove('disabled');
      });
    });
  });

  return (
    <div className={`col s2 center-align ${props.id === 1 ? 'offset-s1' : ''}`}>
      <input
        value={props.id}
        id={`severity-${props.id}`}
        name='severity'
        type='radio'
      />
      <label
        htmlFor={`severity-${props.id}`}
        className='blue-text text-darken-4'
      >
        {props.emoticon}
        <br />
        {props.id}
      </label>
      <style jsx>
        {`
          input[type='radio'] {
            display: none;
          }
          label {
            cursor: pointer;
          }
          input[type='radio']:checked + label {
            font-size: 3rem;
            transition: font-size 0.3s;
          }
          input[type='radio'] + label {
            font-size: 2rem;
            transition: font-size 0.3s;
          }
        `}
      </style>
    </div>
  );
};

export default Severity;
