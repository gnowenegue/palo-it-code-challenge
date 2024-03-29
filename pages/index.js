import Head from 'next/head';

import Form from '../components/Form';

const HomePage = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>

    <main className="container">
      <div className="row">
        <Form />
      </div>
    </main>
  </div>
);

export default HomePage;
