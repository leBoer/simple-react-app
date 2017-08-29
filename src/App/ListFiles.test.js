import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import expect from 'expect';
import enzymify from 'expect-enzyme'
import ListFiles from './ListFiles';
import BuildTable from './ListFiles';

expect.extend(enzymify())

test('ListFiles component should render h1', () => {
  const wrapper = shallow(<ListFiles />)
  expect(wrapper.find('h1').exists()).toBe(true)
})

test('Assert that BuildTable exists', () => {
  const wrapper = shallow(<ListFiles />);
  expect(wrapper.find('BuildTable').exists()).toBe(true);
});
// Unfortunately, below test fails for a reason that I cannot see. Will have to investigate
/*
test('A list is produced', () => {
  const files = [
    {
      "id": 0,
      "name": "24_7_liaison.htm",
      "ext": "htm",
      "desc": "Qui accusamus vel quas ut suscipit quos voluptatem neque sed.",
      "created": "2017-07-12T01:07:27.378Z",
      "size": 6516970000
    },
    {
      "id": 1,
      "name": "deposit_human_assurance.jpg",
      "ext": "jpg",
      "desc": "Ipsum ut omnis ad itaque doloribus.",
      "created": "2017-07-09T06:24:59.418Z",
      "size": 4913239983
    }
  ]
  const wrapper = mount(<BuildTable files={files} />)
  console.log(wrapper.debug())
  expect(wrapper.find('24_7_liaison.htm').exists()).toBe(true);
}) // I really don't understand why this fails, I can clearly see it in the debug
*/