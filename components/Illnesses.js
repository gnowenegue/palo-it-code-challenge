import React, { useEffect, useState } from 'react';
import fetch from 'isomorphic-unfetch';

import Illness from './Illness';
import Severities from './Severities';
import Preloader from './Preloader';

const Illnesses = () => {
  const [loading, setLoading] = useState(true);
  const [illnesses, setIllnesses] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchIllnesses = async () => {
      const res = await fetch(
        'http://dmmw-api.australiaeast.cloudapp.azure.com:8080/illnesses?limit=20',
        { signal: abortController.signal }
      ).catch(() => {});

      if (res) {
        const json = await res.json();

        if (json) {
          const sortedData = json._embedded.illnesses.sort((a, b) => {
            const nameA = a.illness.name.toUpperCase(); // ignore upper and lowercase
            const nameB = b.illness.name.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }

            // names must be equal
            return 0;
          });

          setIllnesses(sortedData);
        }

        setLoading(false);
      }
    };

    const elems = document.querySelectorAll('.modal');
    window.M.Modal.init(elems);

    fetchIllnesses();

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <div className="col s6 offset-s3">
      <ul className="collection z-depth-2 with-header">
        <li className="collection-header">
          <h5>What&lsquo;s your illness?</h5>
        </li>
        {loading ? (
          <Preloader />
        ) : (
          illnesses.map(illness => (
            <Illness key={illness.illness.id} illness={illness.illness} />
          ))
        )}
      </ul>
      <Severities />
    </div>
  );
};

export default Illnesses;
