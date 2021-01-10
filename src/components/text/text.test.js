import React from 'react'
import { shallow } from 'enzyme'
import Text from './index'

describe('Text', () => {
    test('should render', () => {
        const wrapper = shallow(
            <Text content="hey there" />
        )
        expect(wrapper.text()).toBe('hey there')
    })
})