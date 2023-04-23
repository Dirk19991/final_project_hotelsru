import FooterMobile from '@/components/FooterMobile/FooterMobile'
import { render, screen, within } from '@testing-library/react'

const navElementsAmount = 5
jest.mock('next/router', () => require('next-router-mock'))

describe('Footer mobile testing', () => {
    it('renders determined amount of links', () => {
        render(<FooterMobile />)

        const footerMobileNav = screen.getByTestId('footer-mobile-nav')

        const { getAllByRole } = within(footerMobileNav)
        const items = getAllByRole('listitem')
        expect(items.length).toBe(navElementsAmount)
    })
})