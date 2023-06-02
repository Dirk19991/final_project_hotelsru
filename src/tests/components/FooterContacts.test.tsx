import FooterContacts from '@/components/FooterContacts/FooterContacts'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

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

describe('Footer contacts testing', () => {
    it('redners app links, socials, copyright', () => {
        const view = render(<FooterContacts />)

        const footerApps = screen.getByTestId('footer-apps')
        const footerSocials = screen.getByTestId('footer-socials')
        const footerCopyright = screen.getByTestId('footer-copyright')
        const copyrightText = view.getByText('HBO ® and related service marks are the property of Home Box Office, Inc')

        expect(footerApps).toBeInTheDocument()
        expect(footerSocials).toBeInTheDocument()
        expect(footerCopyright).toBeInTheDocument()
        expect(copyrightText).toBeInTheDocument()
    })
})
