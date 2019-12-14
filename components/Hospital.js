import React from 'react';
import PropTypes from 'prop-types';

const Hospital = ({ hospital: { name, waitingList } }) => {
  return (
    <li className="collection-item">
      <div>
        {name}
        <span className="secondary-content valign-wrapper">
          <span className="red-text text-accent-4">
            {waitingList[0].waitingTime.hrs > 0
              ? `${waitingList[0].waitingTime.hrs}hrs `
              : ''}
            {waitingList.length > 0 ? waitingList[0].waitingTime.mins : ''}
            mins
          </span>
          <i className="material-icons orange-text">timelapse</i>
        </span>
      </div>
      <style jsx>
        {`
          .collection-item .secondary-content .material-icons {
            margin-left: 10px;
          }
        `}
      </style>
    </li>
  );
};

Hospital.propTypes = {
  hospital: PropTypes.shape({
    name: PropTypes.string.isRequired,
    waitingList: PropTypes.array.isRequired,
  }).isRequired,
};

export default Hospital;
