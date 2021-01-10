import React from 'react'
import { shallow } from 'enzyme'
import Strong from './index'

describe('Strong', () => {
    test('should render', () => {
        const wrapper = shallow(
            <Strong content="Sample content" />
        )
        expect(wrapper.text()).toBe('Sample content');
    })
})