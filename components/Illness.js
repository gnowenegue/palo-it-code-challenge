import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import AppContext from '../contexts/AppContext';

const Illness = props => {
  const { setIllness } = useContext(AppContext);

  const { illness } = props;

  const updateIllness = e => {
    e.preventDefault();

    document.querySelectorAll('a.collection-item').forEach(elem => {
      elem.classList.remove('active');
      elem.classList.add('blue-text');
    });

    e.currentTarget.classList.toggle('active');
    e.currentTarget.classList.toggle('blue-text');
    setIllness({
      id: e.currentTarget.dataset.illnessid,
      name: e.currentTarget.dataset.illness,
    });
  };

  return (
    <>
      <a
        href="#!"
        data-target="severity"
        data-illnessid={illness.id}
        data-illness={illness.name}
        onClick={updateIllness}
        className="collection-item blue-text waves-effect waves-red modal-trigger"
      >
        {illness.name}
        <i className="secondary-content material-icons">send</i>
      </a>
      <style jsx>
        {`
          a.collection-item:not(.active):hover {
            background-color: #ffcdd2;
          }
          a.collection-item.active {
            background-color: #b71c1c;
            color: white;
          }
        `}
      </style>
    </>
  );
};

Illness.propTypes = {
  illness: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Illness;
