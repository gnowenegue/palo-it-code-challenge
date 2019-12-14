import React from 'react';
import renderer from 'react-test-renderer';
// import { mount, shallow, render } from 'enzyme';

import AppContext from '../../contexts/AppContext';
import Illnesses from '../../components/Illnesses';

describe('<Illnesses />', () => {
  test('Snapshot test', () => {
    const render = renderer.create(
      <AppContext.Provider
        value={{
          setSeverity: () => {},
          illness: { id: 1, name: 'flu' },
        }}
      >
        <Illnesses />
      </AppContext.Provider>
    );
    expect(render.toJSON()).toMatchSnapshot();
  });
});
