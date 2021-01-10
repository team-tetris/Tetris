import React from 'react'
import { shallow } from 'enzyme'
import Card from './index'


describe('Card', () => {
    //since enzyme mount doesnt support react 17 havent written all children cases
    test('checking if all type of components are rendered inside card', () => {
        const card = shallow(<Card tetromino={[{ type: 'badge', content: 'improvement', rounded: true }]} />)
        expect(card.find('div.card').hasClass('card')).toBe(true)
    })
})