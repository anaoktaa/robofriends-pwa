import React from 'react';
import { shallow } from 'enzyme';
import CounterButton from './CounterButton';

it('expect to render countebutton component', () => {
    const mockColor = 'red';
    expect(shallow(<CounterButton
        color={mockColor}
    />)).toMatchSnapshot();
});

it('correctly increments the counter', () => {
    const mockColor = 'red';
    const wrapper = shallow(<CounterButton color={mockColor}/>);
    wrapper.find('[id="counter"]').simulate('click');
    expect(wrapper.state()).toEqual({ count: 2 });
    wrapper.find('[id="counter"]').simulate('click');
    expect(wrapper.state()).toEqual({ count: 3 });
    wrapper.find('[id="counter"]').simulate('keypress');
    expect(wrapper.state()).toEqual({ count: 3 });
    expect(wrapper.props().color).toEqual('red');
})