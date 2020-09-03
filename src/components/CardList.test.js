import { shallow } from 'enzyme';
import React from 'react';
import CardList from './CardList';

it('expect to render card list', () => {
    const mockRobots = [
        {
            id: 1,
            name: 'John Snow',
            username: 'johnsnow',
            email: 'john@gmail.com'
        }
    ]
    expect(<CardList
        robots={mockRobots}
    />).toMatchSnapshot();
})