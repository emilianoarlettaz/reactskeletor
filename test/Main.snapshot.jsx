import React from 'react';
import renderer from 'react-test-renderer';

import Main, { Counter } from '../src/Main';

describe('Main Snapshot', () => {
  const title = 'Testing App';

  test('renders', () => {
    const component = renderer.create(
      <Main title={title} />,
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
