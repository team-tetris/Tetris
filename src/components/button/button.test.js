import React from 'react'
import { shallow } from 'enzyme'
import Button from './index'

describe('Button', () => {
    const types = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link']
    types.map((type) => {
        test('checking if button is rendered in all themes', () => {
            const button = shallow(
                <Button content="improvement" theme={type} />
            )
            expect(button.text()).toBe('improvement')

            expect(button.find('button.btn').hasClass(`btn btn-${type}`)).toEqual(true);
        })
    })

    test('checking if the button doesnt render in wrong theme and throws error', () => {
        console.error = jest.fn();
        shallow(<Button content="improvement" theme="newtheme" />)
        expect(console.error.mock.calls[0][0]).toContain('Failed prop type');
    })

    types.map((type) => {
        test('checking if button is rendered in all themes with outline', () => {
            const button = shallow(
                <Button content="improvement" outline theme={type} />
            )
            expect(button.text()).toBe('improvement')

            expect(button.find('button.btn').hasClass(`btn btn-outline-${type}`)).toEqual(true);
        })
    })

    test('checking if the button doesnt render in wrong theme with outline and throws error', () => {
        console.error = jest.fn();
        shallow(<Button content="improvement" theme="theme" />)
        expect(console.error.mock.calls[0][0]).toContain('Failed prop type');
    })


    test('checking if size of the button works', () => {
        let button = shallow(<Button content="button" size="large" />)
        expect(button.find('button.btn').hasClass('btn-lg')).toEqual(true);
        button = shallow(<Button content="button" size="small" />)
        expect(button.find('button.btn').hasClass('btn-sm')).toEqual(true);
    })

})