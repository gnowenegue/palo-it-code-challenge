import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Severity = props => {
  const { id, emoticon, setSeverity } = props;
  useEffect(() => {
    document.querySelectorAll('input[type="radio"]').forEach(radioBtn => {
      radioBtn.addEventListener('change', e => {
        setSeverity(parseInt(e.target.value, 10));

        document
          .querySelector('#severity.modal .modal-footer a')
          .classList.remove('disabled');
      });
    });
  });

  return (
    <div className={`col s2 center-align ${id === 1 ? 'offset-s1' : ''}`}>
      <input value={id} id={`severity-${id}`} name="severity" type="radio" />
      <label htmlFor={`severity-${id}`} className="blue-text text-darken-4">
        {emoticon}
        <br />
        {id}
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

Severity.propTypes = {
  id: PropTypes.number.isRequired,
  emoticon: PropTypes.string.isRequired,
  setSeverity: PropTypes.func.isRequired,
};

export default Severity;
