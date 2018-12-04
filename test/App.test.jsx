import React from 'react';
import App from '../src/App';
import Main from '../src/Main';

describe('App Component', () => {
  const title = 'Testing App';

  it('renders the Main wrapper', () => {
    const wrapper = shallow(<App title={title} />);

    expect(wrapper.find(Main).length).toEqual(1);
  });

  it('passes all props to Main wrapper', () => {
    const otherTitle = 'Other title';
    let wrapper = shallow(<App title={title} />);
    let mainWrapper = wrapper.find(Main);

    expect(mainWrapper.props().title).toEqual(title);

    wrapper = shallow(<App title={otherTitle} />);

    mainWrapper = wrapper.find(Main);
    expect(mainWrapper.props().title).toEqual(otherTitle);
  });
});
