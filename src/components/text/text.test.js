import React from 'react'
import { shallow } from 'enzyme'

import Text from './index'

describe('App', () => {
    test('should render', () => {
        const wrapper = shallow(
            <Text content="hey there" />
        )
        console.log(wrapper)
        expect(wrapper.text()).toBe('hey there')
    })
})