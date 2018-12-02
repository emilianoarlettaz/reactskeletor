import React from 'react';
import renderer from 'react-test-renderer';

import App, { Counter } from '../src/App';

describe('App Snapshot', () => {
  const title = 'Testing App';

  test('renders', () => {
    const component = renderer.create(
      <App title={title} />,
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('Counter Snapshot', () => {
  test('renders', () => {
    const component = renderer.create(
      <Counter counter={1} />,
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
