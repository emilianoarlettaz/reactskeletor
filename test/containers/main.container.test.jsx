import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Demo, Main } from '../../src/containers';
import { Home } from '../../src/components';
import Routes from '../../src/routes';

describe('Main Container', () => {
  test('renders the Routes wrapper', () => {
    const wrapper = shallow(<Main />);

    expect(wrapper.find(Routes).length).toEqual(1);
  });

  test('Navigates to Home Page', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <Main />
      </MemoryRouter>,
    );

    expect(wrapper.find(Home)).toHaveLength(1);
    expect(wrapper.find(Demo)).toHaveLength(0);
  });

  test('Navigates to Demo Page', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/demo']}>
        <Main />
      </MemoryRouter>,
    );

    expect(wrapper.find(Home)).toHaveLength(0);
    expect(wrapper.find(Demo)).toHaveLength(1);
  });
});
