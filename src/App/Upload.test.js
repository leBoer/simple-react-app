import React from 'react'
import ReactDOM from 'react-dom'
import Upload from './Upload'
import { shallow } from 'enzyme'
import expect from 'expect'
import enzymify from 'expect-enzyme'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Upload />, div);
});

test('Upload button is there', () => {
    const wrapper = shallow(<Upload />)
    console.log(wrapper.debug())
    expect(wrapper.find('input').exists()).toBe(true);
})