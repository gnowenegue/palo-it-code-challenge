import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Preloader from './Preloader';

import convertMinsToHrs from '../helpers/convertMinsToHrs';

const Hospitals = props => {
  const router = useRouter();
  const severity = router.query.severity;

  const [loading, setLoading] = useState(true);
  const [hospitals, setHospitals] = useState([]);

  const fetchHospitals = async () => {
    const res = await Promise.all([
      fetch(
        'http://dmmw-api.australiaeast.cloudapp.azure.com:8080/hospitals?limit=20'
      ).then(res => res.json()),
      fetch(
        'http://dmmw-api.australiaeast.cloudapp.azure.com:8080/hospitals?limit=20&page=1'
      ).then(res => res.json()),
    ]);

    const json = [...res[0]._embedded.hospitals, ...res[1]._embedded.hospitals];

    const computeWaitingTime = hospitals => {
      return {
        ...hospitals,
        waitingList: hospitals.waitingList.map(waitList => {
          return {
            ...waitList,
            waitingTime: convertMinsToHrs(
              waitList.patientCount * waitList.averageProcessTime
            ),
          };
        }),
      };
    };

    const filterHospitalsBySeverity = severity => hospitals => {
      return {
        ...hospitals,
        waitingList: hospitals.waitingList.filter(
          x => x.levelOfPain === severity
        ),
      };
    };

    const sortHospitals = (a, b) => {
      const timeA = a.waitingList[0].waitingTime.originalMins;
      const timeB = b.waitingList[0].waitingTime.originalMins;

      return timeA - timeB;
    };

    const hospitals = json
      .map(computeWaitingTime)
      .map(filterHospitalsBySeverity(props.severity - 1))
      .sort(sortHospitals);

    setHospitals(hospitals);

    setLoading(false);
  };

  useEffect(() => {
    if (!isNaN(props.severity)) fetchHospitals();
  }, [props.severity]);

  return (
    <ul className='collection z-depth-2 with-header'>
      <li className='collection-header'>
        <h5 className='center-align'>
          <i className='material-icons pink-text'>healing</i> Hospitals —
          Severity level&nbsp;
          {props.severity}
          <i className='material-icons pink-text'>healing</i>
        </h5>
      </li>
      {loading ? (
        <Preloader />
      ) : (
        hospitals.map(hospital => (
          <li key={hospital.id} className='collection-item'>
            <div>
              {hospital.name}
              <span className='secondary-content valign-wrapper'>
                <span className='red-text text-accent-4'>
                  {hospital.waitingList[0].waitingTime.hrs > 0
                    ? `${hospital.waitingList[0].waitingTime.hrs}hrs `
                    : ''}
                  {hospital.waitingList.length > 0
                    ? hospital.waitingList[0].waitingTime.mins
                    : ''}
                  mins
                </span>
                <i className='material-icons orange-text'>timelapse</i>
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

export default Hospitals;
