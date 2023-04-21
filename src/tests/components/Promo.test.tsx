import Promo from '@/components/Promo/Promo'
import { fireEvent, render, screen, within } from '@testing-library/react'

describe('Testing promo', () => {
    it('hide/expand button works correctly', () => {
        render(<Promo />)
        const expandButton = screen.getByText(/развернуть/i)
        const hideButton = screen.queryByText(/скрыть/i)
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
