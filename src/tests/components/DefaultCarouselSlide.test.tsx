import DefaultCarouselSlide from '@/stories/DefaultCarouselSlide/DefaultCarouselSlide'
import '@testing-library/jest-dom'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'

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

describe('Testing Default Carousel Slide', () => {
    it('hovers on buttons work correctly', () => {
        render(
            <DefaultCarouselSlide
                image="/"
                href="/"
                year={'2000'}
                rating="7.55"
                countries={[{ id: 1, nameEn: 'USA', nameRu: 'США', shortName: 'us' }]}
                genres={[{ id: 1, nameRu: 'Комедия', nameEn: 'Comedy' }]}
                name="Титаник"
                duration="100"
            />
        )

        const slide = screen.getByTestId('defaultCarouselSlide')

        const similarButton = screen.queryByTestId('similar')
        const dislikeButton = screen.queryByTestId('dislike')
        const laterButton = screen.queryByTestId('watchLater')
        const alreadyWatchedButton = screen.queryByTestId('alreadyWatched')

        expect(similarButton).not.toBeInTheDocument()
        expect(dislikeButton).not.toBeInTheDocument()
        expect(laterButton).not.toBeInTheDocument()
        expect(alreadyWatchedButton).not.toBeInTheDocument()

        fireEvent.mouseOver(slide)

        waitFor(() => expect(similarButton).toBeVisible())
        waitFor(() => expect(dislikeButton).toBeVisible())
        waitFor(() => expect(laterButton).toBeVisible())
        waitFor(() => expect(alreadyWatchedButton).toBeVisible())
    })

    it('hover on card shows rating', () => {
        render(
            <DefaultCarouselSlide
                image="/"
                href="/"
                year={'2000'}
                rating="7.55"
                countries={[{ id: 1, nameEn: 'USA', nameRu: 'США', shortName: 'us' }]}
                genres={[{ id: 1, nameRu: 'Комедия', nameEn: 'Comedy' }]}
                name="Титаник"
                duration="100"
            />
        )
        const card = screen.getByTestId('defaultCarouselSlide')
        const rating = screen.queryByText(/7.55/i)
        fireEvent.mouseOver(card)
        waitFor(() => expect(rating).toBeVisible())
    })
})
