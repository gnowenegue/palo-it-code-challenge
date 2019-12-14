import React from 'react';
import renderer from 'react-test-renderer';
// import { mount, shallow, render } from 'enzyme';

import Hospitals from '../../components/Hospitals';

describe('<Hospitals />', () => {
  test('Snapshot test', () => {
    const render = renderer.create(<Hospitals severity={4} />);
    expect(render.toJSON()).toMatchSnapshot();
  });
});
