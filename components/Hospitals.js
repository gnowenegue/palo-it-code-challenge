import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Preloader from './Preloader';

import convertMinsToHrs from '../helpers/convertMinsToHrs';

const Hospitals = props => {
  const [loading, setLoading] = useState(true);
  const [hospitals, setHospitals] = useState([]);

  const { severity } = props;

  const fetchHospitals = async () => {
    const res = await Promise.all([
      fetch(
        'http://dmmw-api.australiaeast.cloudapp.azure.com:8080/hospitals?limit=20'
      ).then(data => data.json()),
      fetch(
        'http://dmmw-api.australiaeast.cloudapp.azure.com:8080/hospitals?limit=20&page=1'
      ).then(data => data.json()),
    ]);

    const json = [...res[0]._embedded.hospitals, ...res[1]._embedded.hospitals];

    const computeWaitingTime = _hospitals => {
      return {
        ..._hospitals,
        waitingList: _hospitals.waitingList.map(waitList => {
          return {
            ...waitList,
            waitingTime: convertMinsToHrs(
              waitList.patientCount * waitList.averageProcessTime
            ),
          };
        }),
      };
    };

    const filterHospitalsBySeverity = _severity => _hospitals => {
      return {
        ..._hospitals,
        waitingList: _hospitals.waitingList.filter(
          x => x.levelOfPain === _severity
        ),
      };
    };

    const sortHospitals = (a, b) => {
      const timeA = a.waitingList[0].waitingTime.originalMins;
      const timeB = b.waitingList[0].waitingTime.originalMins;

      return timeA - timeB;
    };

    const hospitalsData = json
      .map(computeWaitingTime)
      .map(filterHospitalsBySeverity(props.severity - 1))
      .sort(sortHospitals);

    setHospitals(hospitalsData);

    setLoading(false);
  };

  useEffect(() => {
    // eslint-disable-next-line no-restricted-globals
    if (!isNaN(severity)) fetchHospitals();
  }, [severity]);

  return (
    <ul className="collection z-depth-2 with-header">
      <li className="collection-header">
        <h5 className="center-align">
          <i className="material-icons pink-text">healing</i>
          &nbsp; Hospitals — Severity level&nbsp;
          {severity}
          <i className="material-icons pink-text">healing</i>
        </h5>
      </li>
      {loading ? (
        <Preloader />
      ) : (
        hospitals.map(hospital => (
          <li key={hospital.id} className="collection-item">
            <div>
              {hospital.name}
              <span className="secondary-content valign-wrapper">
                <span className="red-text text-accent-4">
                  {hospital.waitingList[0].waitingTime.hrs > 0
                    ? `${hospital.waitingList[0].waitingTime.hrs}hrs `
                    : ''}
                  {hospital.waitingList.length > 0
                    ? hospital.waitingList[0].waitingTime.mins
                    : ''}
                  mins
                </span>
                <i className="material-icons orange-text">timelapse</i>
              </span>
            </div>
          </li>
        ))
      )}
      <style jsx>
        {`
          .collection .collection-item .secondary-content .material-icons {
            margin-left: 10px;
          }
        `}
      </style>
    </ul>
  );
};

Hospitals.propTypes = {
  severity: PropTypes.number.isRequired,
};

export default Hospitals;
