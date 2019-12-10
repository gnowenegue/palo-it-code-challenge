import React, { useContext } from 'react';

import AppContext from '../contexts/AppContext';

const Illness = props => {
  const { illness, setIllness } = useContext(AppContext);

  const updateIllness = e => {
    e.preventDefault();

    document.querySelectorAll('a.collection-item').forEach(e => {
      e.classList.remove('active');
      e.classList.add('blue-text');
    });

    e.currentTarget.classList.toggle('active');
    e.currentTarget.classList.toggle('blue-text');
    setIllness({
      id: e.currentTarget.dataset.illnessid,
      name: e.currentTarget.dataset.illness,
    });
  };

  return (
    <React.Fragment>
      <a
        href='#!'
        data-target='severity'
        data-illnessid={props.illness.id}
        data-illness={props.illness.name}
        onClick={updateIllness}
        className='collection-item blue-text waves-effect waves-red modal-trigger'
      >
        {props.illness.name}
        <i className='secondary-content material-icons'>send</i>
      </a>
      <style jsx>{`
        a.collection-item:not(.active):hover {
          background-color: #ffcdd2;
        }
        a.collection-item.active {
          background-color: #b71c1c;
          color: white;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Illness;
