import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../src/components';

describe('Header Component', () => {
  test('renders the Link wrappers', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.find(Link).length).toEqual(2);
  });
});
