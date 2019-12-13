import React from 'react';
import renderer from "react-test-renderer";
import { mount, shallow, render } from 'enzyme';

import Home from './Home';

describe('<Home />', () => {
  test('Snapshot test', () => {
    const render = renderer.create(<Home />);
    expect(render.toJSON()).toMatchSnapshot();
  })
});