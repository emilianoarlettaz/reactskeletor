import React from 'react';
import Demo, { doIncrement, doDecrement } from '../../src/containers/demo.container';
import { Button, Counter } from '../../src/components';

describe('Local State', () => {
  test('should increment the counter in state', () => {
    const state = { counter: 0 };
    const newState = doIncrement(state);

    expect(newState.counter).toEqual(1);
  });

  test('should decrement the counter in state', () => {
    const state = { counter: 0 };
    const newState = doDecrement(state);

    expect(newState.counter).toEqual(-1);
  });
});

describe('Demo Container', () => {
  test('renders the Counter wrapper', () => {
    const wrapper = shallow(<Demo />);

    expect(wrapper.find(Counter).length).toEqual(1);
    expect(wrapper.find(Button).length).toEqual(2);
  });

  test('passes all props to Counter wrapper', () => {
    const wrapper = shallow(<Demo />);
    let counterWrapper = wrapper.find(Counter);

    expect(counterWrapper.props().counter).toEqual(0);

    wrapper.setState({ counter: -1 });

    counterWrapper = wrapper.find(Counter);
    expect(counterWrapper.props().counter).toEqual(-1);
  });

  test('increments the counter', () => {
    const wrapper = shallow(<Demo />);

    wrapper.setState({ counter: 0 });
    wrapper.find('Button').at(0).simulate('click');

    expect(wrapper.state().counter).toEqual(1);
  });

  test('decrements the counter', () => {
    const wrapper = shallow(<Demo />);

    wrapper.setState({ counter: 0 });
    wrapper.find('Button').at(1).simulate('click');

    expect(wrapper.state().counter).toEqual(-1);
  });
});
