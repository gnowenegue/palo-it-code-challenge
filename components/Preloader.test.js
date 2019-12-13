import React from 'react';
import renderer from 'react-test-renderer';
import { mount, shallow, render } from 'enzyme';

import Preloader from './Preloader';

describe('<Preloader />', () => {
  test('Snapshot test', () => {
    const render = renderer.create(<Preloader />);
    expect(render.toJSON()).toMatchSnapshot();
  });
});
