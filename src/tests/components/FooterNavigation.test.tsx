import FooterNavigation from '@/components/FooterNavigation/FooterNavigation'
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

describe('Footer navigation testing', () => {
    it('renders sections', () => {
        render(<FooterNavigation />)

        const aboutSection = screen.getByTestId('about-section')
        const navSection = screen.getByTestId('nav-section')
        const supportSection = screen.getByTestId('support-section')
        const iconSection = screen.getByTestId('icon-section')

        expect(aboutSection).toBeInTheDocument()
        expect(navSection).toBeInTheDocument()
        expect(supportSection).toBeInTheDocument()
        expect(iconSection).toBeInTheDocument()
    })
})
