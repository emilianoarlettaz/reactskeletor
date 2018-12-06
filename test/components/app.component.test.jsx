import React from 'react';
import { App } from '../../src/components';

describe('App Component', () => {
  test('renders the Main wrapper', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('Main').length).toEqual(1);
  });

  test('renders the Header wrapper', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('Header').length).toEqual(1);
  });
});
