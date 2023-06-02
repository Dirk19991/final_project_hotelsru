import Promo from '@/components/Promo/Promo'
import { fireEvent, render, screen, within } from '@testing-library/react'

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

describe('Testing promo', () => {
    it('hide/expand button works correctly', () => {
        render(<Promo />)
        const expandButton = screen.getByText(/expand/i)
        const hideButton = screen.queryByText(/collapse/i)
        const hiddenText = screen.queryByText(/Откройте для себя возможность/i)

        expect(expandButton).toBeInTheDocument
        expect(hideButton).not.ToBeInTheDocument
        expect(hiddenText).not.ToBeInTheDocument

        fireEvent.mouseDown(expandButton)
        expect(expandButton).not.toBeInTheDocument
        expect(hideButton).toBeInTheDocument
        expect(hiddenText).toBeInTheDocument
    })
})
