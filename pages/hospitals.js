import { useContext, useEffect } from 'react';
import Head from 'next/head';
import Router, { useRouter } from 'next/router';

import AppContext from '../contexts/AppContext';

import Hospitals from '../components/Hospitals';

const HospitalsPage = () => {
  const { user, illness, severity } = useContext(AppContext);

  useEffect(() => {
    if (
      user.firstName === '' ||
      user.lastName === '' ||
      user.email === '' ||
      illness.id === -1 ||
      illness.name === '' ||
      severity === -1
    ) {
      Router.push('/');
    }
  }, []);

  const router = useRouter();
  const { severity: _severity } = router.query;

  return (
    <div>
      <Head>
        <title>
          Hospitals — Severity level
          {_severity}
        </title>
      </Head>

      <main className="container">
        <div className="row">
          <Hospitals severity={parseInt(_severity, 10)} />
        </div>
      </main>
    </div>
  );
};

export default HospitalsPage;
