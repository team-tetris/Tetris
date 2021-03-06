import React from 'react'
import { shallow } from 'enzyme'
import Image from './index'

describe('Image', () => {
    test('should render', () => {
        const wrapper = shallow(
            <Image source="https://dummyimage.com/600x400/000/fff" rounded={true} height="50" width="50"/>
        )
        //expect(wrapper.text()).toBe('25%');
        expect(wrapper.html()).toBe(`<img src="https://dummyimage.com/600x400/000/fff" className="rounded  " height="50" width="50"/>`);
    })
})
describe('Image rounded', () => {
    test('should render', () => {
        const wrapper = shallow(
            <Image source="https://dummyimage.com/600x400/000/fff" rounded={false} height="50" width="50"/>
        )
        //expect(wrapper.text()).toBe('25%');
        expect(wrapper.html()).toBe(`<img src="https://dummyimage.com/600x400/000/fff" className="  " height="50" width="50"/>`);
    })
})