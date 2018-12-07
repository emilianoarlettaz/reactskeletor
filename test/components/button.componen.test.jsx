import React from 'react';
import { Button } from '../../src/components';

describe('Button Component', () => {
  test('passes all props to Button wrapper', () => {
    const onClick = () => {};
    const className = 'big-button';
    const text = 'click me';

    const wrapper = shallow(
      <Button onClick={onClick} className={className}>
        {text}
      </Button>,
    );

    expect(wrapper.prop('onClick')).toEqual(onClick);
    expect(wrapper.prop('children')).toEqual(text);
    expect(wrapper.prop('className')).toEqual(`button ${className}`);
  });

  test('Button has default className', () => {
    const onClick = () => {};

    const wrapper = shallow(
      <Button onClick={onClick}>
        {'click me'}
      </Button>,
    );

    expect(wrapper.prop('className')).toEqual('button');
  });
});
