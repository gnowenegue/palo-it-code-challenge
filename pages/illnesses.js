import { useContext, useEffect } from 'react';
import Head from 'next/head';
import Router from 'next/router';

import AppContext from '../contexts/AppContext';

import Illnesses from '../components/Illnesses';

const IllnessesPage = () => {
  const { user } = useContext(AppContext);

  useEffect(() => {
    if (user.firstName === '' || user.lastName === '' || user.email === '') {
      Router.push('/');
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Illnesses</title>
      </Head>

      <main className="container">
        <div className="row">
          <Illnesses />
        </div>
      </main>
    </div>
  );
};

export default IllnessesPage;
