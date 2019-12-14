import React from 'react';
import renderer from 'react-test-renderer';
// import { mount, shallow, render } from 'enzyme';

import Severity from '../../components/Severity';

describe('<Severity />', () => {
  test('Snapshot test', () => {
    const render = renderer.create(
      <Severity id={1} emoticon="emoticon" setSeverity={() => {}} />
    );
    expect(render.toJSON()).toMatchSnapshot();
  });
});
