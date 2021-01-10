import React from 'react'
import { shallow } from 'enzyme'
import Alert from './index'

describe('Alert', () => {
    const types = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link']
    types.map((type) => {
        test('checking if alert is rendered in all themes', () => {
            const alert = shallow(
                <Alert content="A simple primary alert—check it out!" theme={type} />
            )
            expect(alert.text()).toBe('A simple primary alert—check it out!')

            expect(alert.find('div.alert').hasClass(`alert alert-${type}`)).toEqual(true);
        })
    })

    test('checking if the alert doesnt render in wrong theme and throws error', () => {
        console.error = jest.fn();
        shallow(<Alert content="Alert content" theme="newtheme" />)
        expect(console.error.mock.calls[0][0]).toContain('Failed prop type');
    })


    test('checking if alert heading is rendered', () => {
        const alert = shallow(<Alert content="A simple primary alert—check it out!" theme="primary" heading="heading" />)
        expect(alert.html()).toContain('alert-heading')
    })

    test('checking if close button is rendered', () => {
        const alert = shallow(<Alert content="A simple primary alert—check it out!" theme="primary" heading="heading" close={true} />)
        alert.find('button').simulate('click');
        expect(alert.find('div.alert').exists()).toBeFalsy()
    })
})