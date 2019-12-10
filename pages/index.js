import Head from 'next/head';

import Home from '../components/Home';

const HomePage = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>

    <main className='container'>
      <div className='row'>
        <Home />
      </div>
    </main>
  </div>
);

export default HomePage;
