import Head from 'next/head';
import { useRouter } from 'next/router';

import Hospitals from '../components/Hospitals';

const HospitalsPage = () => {
  const router = useRouter();
  const { severity } = router.query;

  return (
    <div>
      <Head>
        <title>
          Hospitals — Severity level
          {severity}
        </title>
      </Head>

      <main className="container">
        <div className="row">
          <Hospitals severity={parseInt(severity, 10)} />
        </div>
      </main>
    </div>
  );
};

export default HospitalsPage;
