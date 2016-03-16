import test from 'ava';
import React from 'react'
import { shallow, render, mount } from 'enzyme'

import Header from './src/client/app/header'
import Question from './src/client/app/question'


test('<Header />', t => {
  t.plan(2)
  // arrange
  const expected = 'two-three-five'

  // action
  const wrapper = shallow(React.createElement(Header))

  // assert
  t.same(wrapper.text(), expected)
  t.same(wrapper.find('h1').length, 1)
})

test('<Question />', t => {
  t.plan(1)
  // arrange
  const expected = 'What are you avoiding?'

  // action
  const wrapper = shallow(React.createElement(Question))

  // assert
  t.same(wrapper.text(), expected)
  t.same(wrapper.find('h2').length, 1)
})