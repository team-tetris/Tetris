import React from 'react'
import { shallow } from 'enzyme'
import Badge from './index'

describe('Badge', () => {
    const types = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link']
    types.map((type) => {
        test('checking if badge is rendered in all themes', () => {
            const badge = shallow(
                <Badge content="improvement" theme={type} />
            )
            expect(badge.text()).toBe('improvement')

            expect(badge.find('[data-testid="badge"]').hasClass(`badge bg-${type}`)).toEqual(true);
        })
    })

    test('checking if the badge doesnt render in wrong theme and throws error', () => {
        console.error = jest.fn();
        shallow(<Badge content="improvement" theme="newtheme" />)
        expect(console.error.mock.calls[0][0]).toContain('Failed prop type');
    })


    test('checking if the badge contains rounded-pill class when props is given', () => {
        console.error = jest.fn();
        const badge = shallow(<Badge content="improvement" rounded theme="primary" />)
        expect(badge.find('[data-testid="badge"]').hasClass('badge bg-primary rounded-pill')).toEqual(true);

    })
})