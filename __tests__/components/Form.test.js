import React from 'react';
import renderer from 'react-test-renderer';
// import { mount, shallow, render } from 'enzyme';

import AppContext from '../../contexts/AppContext';
import Form from '../../components/Form';

describe('<Form />', () => {
  test('Snapshot test', () => {
    const render = renderer.create(
      <AppContext.Provider value={{ setUser: () => {} }}>
        <Form />
      </AppContext.Provider>
    );
    expect(render.toJSON()).toMatchSnapshot();
  });
});
