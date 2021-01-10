import React from 'react'
import { shallow } from 'enzyme'
import Heading from './index'

const sizes = [1,2,3,4,5];
sizes.forEach((size)=> {
    describe(`Heading ${size}`, () => {
        test('should render', () => {
            const wrapper = shallow(
                <Heading content={`Sample content ${size}`} size={size}/>
            )
            expect(wrapper.text()).toBe(`Sample content ${size}`);
            expect(wrapper.html()).toBe(`<h${size}>Sample content ${size}</h${size}>`);
        })
    })
  });