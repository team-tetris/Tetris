import React from 'react'
import { shallow } from 'enzyme'
import Progress from './index'
const themes = ['', 'bg-success', 'bg-info', 'bg-danger', 'bg-warning']
describe('Progress', () => {
    test('should render', () => {
        const wrapper = shallow(
            <Progress content="25" theme="bg-success" />
        )
        expect(wrapper.text()).toBe('25%');
        expect(wrapper.html()).toBe(`<div class="progress "><div class="progress-bar bg-success  " role="progressbar" aria-valuenow="25" aria-valuemin="0" style="width:25%" aria-valuemax="100">25%</div></div>`);
    })
})
themes.forEach((theme) => {
    describe('Progress', () => {
        test('should render', () => {
            const wrapper = shallow(
                <Progress content="25" theme={theme} />
            )
            expect(wrapper.text()).toBe('25%');
            expect(wrapper.html()).toBe(`<div class="progress "><div class="progress-bar ${theme}  " role="progressbar" aria-valuenow="25" aria-valuemin="0" style="width:25%" aria-valuemax="100">25%</div></div>`);
        })
    })
})
describe('Progress', () => {
    test('should render', () => {
        const wrapper = shallow(
            <Progress content="25" theme="bg-success" striped animated />
        )
        expect(wrapper.text()).toBe('25%');
        expect(wrapper.html()).toBe(`<div class="progress "><div class="progress-bar bg-success progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="25" aria-valuemin="0" style="width:25%" aria-valuemax="100">25%</div></div>`);
    })
})