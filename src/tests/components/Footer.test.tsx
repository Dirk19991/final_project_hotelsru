import Footer from '@/components/Footer/Footer'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import resizeScreenSize from '@/util/resizeScreenSize'

jest.mock('react-i18next', () => ({
    useTranslation: () => {
        return {
            t: (str: string) => str,
            i18n: {
                changeLanguage: () => new Promise(() => {}),
            },
        }
    },
}))
jest.mock('next/router', () => require('next-router-mock'))
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    })),
})

describe('Testing footer', () => {
    it('renders only footer navigation and contacts on desktop screens', () => {
        resizeScreenSize(1440)
        render(<Footer />)

        const footerNav = screen.getByTestId('footer-navigation')
        const footerContacts = screen.getByTestId('footer-contacts')
        const footerMobile = screen.queryByTestId('footer-mobile')

        expect(footerNav).toBeInTheDocument()
        expect(footerContacts).toBeInTheDocument()
        expect(footerMobile).not.toBeInTheDocument()
    })

    it('renders only footer mobile on tab or less screens', () => {
        resizeScreenSize(600)
        render(<Footer />)

        const footerNav = screen.queryByTestId('footer-navigation')
        const footerContacts = screen.queryByTestId('footer-contacts')
        const footerMobile = screen.getByTestId('footer-mobile')

        expect(footerNav).not.toBeInTheDocument()
        expect(footerContacts).not.toBeInTheDocument()
        expect(footerMobile).toBeInTheDocument()
    })
})
