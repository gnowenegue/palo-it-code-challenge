import React, { useState } from 'react';

import Illnesses from './Illnesses';

import AppContext from '../contexts/AppContext';

const Home = () => {
  const [illness, setIllness] = useState({ id: -1, name: '' });
  const [severity, setSeverity] = useState(-1);

  return (
    <AppContext.Provider
      value={{
        illness,
        setIllness,
        severity,
        setSeverity,
      }}
    >
      <Illnesses />
    </AppContext.Provider>
  );
};

export default Home;
