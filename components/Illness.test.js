import React from 'react';
import renderer from 'react-test-renderer';
import { mount, shallow, render } from 'enzyme';

import AppContext from '../contexts/AppContext';
import Illness from './Illness';

describe('<Illness />', () => {
  test('Snapshot test', () => {
    const render = renderer.create(
      <AppContext.Provider value={{ setIllness: () => {} }}>
        <Illness illness={{ id: 1, name: 'flu' }} />
      </AppContext.Provider>
    );
    expect(render.toJSON()).toMatchSnapshot();
  });
});
