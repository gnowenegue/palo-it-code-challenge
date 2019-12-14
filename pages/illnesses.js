import Head from 'next/head';

import Illnesses from '../components/Illnesses';

const IllnessesPage = () => (
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

export default IllnessesPage;
