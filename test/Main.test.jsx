import React from 'react';
import Main, { doIncrement, doDecrement, Counter } from '../src/Main';

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

describe('Main Component', () => {
  const title = 'Testing App';

  it('renders the Counter wrapper', () => {
    const wrapper = shallow(<Main title={title} />);

    expect(wrapper.find(Counter).length).toEqual(1);
  });

  it('passes all props to Counter wrapper', () => {
    const wrapper = shallow(<Main title={title} />);
    let counterWrapper = wrapper.find(Counter);

    expect(counterWrapper.props().counter).toEqual(0);

    wrapper.setState({ counter: -1 });

    counterWrapper = wrapper.find(Counter);
    expect(counterWrapper.props().counter).toEqual(-1);
  });

  it('increments the counter', () => {
    const wrapper = shallow(<Main title={title} />);

    wrapper.setState({ counter: 0 });
    wrapper.find('button').at(0).simulate('click');

    expect(wrapper.state().counter).toEqual(1);
  });

  it('decrements the counter', () => {
    const wrapper = shallow(<Main title={title} />);

    wrapper.setState({ counter: 0 });
    wrapper.find('button').at(1).simulate('click');

    expect(wrapper.state().counter).toEqual(-1);
  });
});
