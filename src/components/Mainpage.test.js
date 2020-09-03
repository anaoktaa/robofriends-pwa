import React from 'react';
import { shallow } from 'enzyme';
import MainPage from './MainPage';

let wrapper;
beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: '',
        isPending: false
    }

    wrapper = shallow(<MainPage {...mockProps} />);
});

it('render main page without crashing', () => {
    expect(wrapper).toMatchSnapshot();
});

it('filters robots correctly', () => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 3,
            name: 'John Snow',
            email: 'johnsnow@gmail.com'
        }],
        searchField: 'jo',
        isPending: false
      }
      let wrapper2 = shallow(<MainPage {...mockProps}/>)
      expect(wrapper2.instance().filterRobots()).toEqual([
        {
            id: 3,
            name: 'John Snow',
            email: 'johnsnow@gmail.com'
        }
      ]);
})