import Rating from '@/components/film/Rating/Rating'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

jest.mock('react-i18next', () => ({
    useTranslation: () => {
        return {
            t: (str: string) => str,
            i18n: {
                changeLanguage: () => new Promise(() => {}),
                language: 'ru',
            },
        }
    },
}))

describe('Testing admin panel', () => {
    it('shows correct button, rating, and number of ratings', () => {
        render(<Rating ratingCount="5323" fixedRating={7.33} />)
        const rating = screen.getByText('7.33')
        const ratings = screen.getByText('5323 ratings')
        const rateButton = screen.getByRole('button')

        expect(rating).toBeInTheDocument()
        expect(ratings).toBeInTheDocument()
        expect(rateButton).toHaveTextContent(/rate/i)
    })
})
