import React, { useState } from 'react';

import PropTypes from 'prop-types';

import AppContext from '../contexts/AppContext';

const AppProvider = ({ children }) => {
  const [illness, setIllness] = useState({ id: -1, name: '' });
  const [severity, setSeverity] = useState(-1);
  const [user, setUser] = useState({ firstName: '', lastName: '', email: '' });

  return (
    <AppContext.Provider
      value={{
        illness,
        setIllness,
        severity,
        setSeverity,
        user,
        setUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any,
};

AppProvider.defaultProps = {
  children: null,
};

export default AppProvider;
