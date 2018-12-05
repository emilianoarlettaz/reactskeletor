import React from 'react';
import renderer from 'react-test-renderer';
import { Button } from '../../src/components';

describe('Button Snapshot', () => {
  test('renders', () => {
    const onClick = () => {};
    const className = 'big-button';
    const text = 'click me';

    const component = renderer.create(
      <Button onClick={onClick} className={className}>
        {text}
      </Button>,
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
