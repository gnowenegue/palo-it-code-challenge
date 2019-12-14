import Head from 'next/head';

import Form from '../components/Form';

const FormPage = () => (
  <div>
    <Head>
      <title>Form</title>
    </Head>

    <main className="container">
      <div className="row">
        <Form />
      </div>
    </main>
  </div>
);

export default FormPage;
