import Head from 'next/head';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-unfetch';

const UsersPage = ({ users }) => (
  <div>
    <Head>
      <title>Users</title>
    </Head>

    <main className="container">
      <div className="row">
        <table className="responsive-table">
          <thead>
            <tr>
              <td>First Name</td>
              <td>Last Name</td>
              <td>Email</td>
              <td>Illness</td>
              <td>Severity</td>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user._id}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.illness}</td>
                <td>{user.severity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  </div>
);

UsersPage.defaultProps = {
  users: [],
};

UsersPage.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      email: PropTypes.string,
      illness: PropTypes.string,
      severity: PropTypes.number,
    })
  ),
};

UsersPage.getInitialProps = async ({ req }) => {
  const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
  const res = await fetch(`${baseUrl}/users`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  const data = await res.json();

  return {
    users: data,
  };
};

export default UsersPage;
