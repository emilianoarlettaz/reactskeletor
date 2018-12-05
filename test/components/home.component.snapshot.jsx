import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Home } from '../../src/components';

describe('Home Snapshot', () => {
  test('renders', () => {
    const component = renderer.create(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
