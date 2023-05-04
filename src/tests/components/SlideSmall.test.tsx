import SlideSmall from '@/stories/DefaultCarouselSlide/DefaultCarouselSlide'
import '@testing-library/jest-dom'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'

describe('Testing Default Carousel Slide', () => {
    it('hovers on buttons work correctly', () => {
        render(
            <SlideSmall
                image="/"
                href="/"
                year={2000}
                rating="7.55"
                country={[{ id: 1, name: 'USA' }]}
                genre={[{ id: 1, name: 'Комедия' }]}
                name="Титаник"
            />
        )
        const similarButton = screen.getByTestId('similar')
        const similarText = screen.queryByText(/похожее/i)
        expect(similarButton).toBeInTheDocument()
        expect(similarText).not.toBeVisible()
        fireEvent.mouseOver(similarButton)
        waitFor(() => expect(similarText).toBeVisible())

        const dislikeButton = screen.getByTestId('dislike')
        const dislikeText = screen.queryByText(/не нравится такое/i)
        expect(dislikeButton).toBeInTheDocument()
        expect(dislikeText).not.toBeVisible()
        fireEvent.mouseOver(dislikeButton)
        waitFor(() => expect(dislikeText).toBeVisible())

        const laterButton = screen.getByTestId('dislike')
        const laterText = screen.queryByText(/смотреть позже/i)
        expect(laterButton).toBeInTheDocument()
        expect(laterText).not.toBeVisible()
        fireEvent.mouseOver(laterButton)
        waitFor(() => expect(laterText).toBeVisible())

        const alreadyWatchedButton = screen.getByTestId('alreadyWatched')
        const alreadyWatchedText = screen.queryByText(/уже смотрел/i)
        expect(alreadyWatchedButton).toBeInTheDocument()
        expect(alreadyWatchedText).not.toBeVisible()
        fireEvent.mouseOver(alreadyWatchedButton)
        waitFor(() => expect(alreadyWatchedText).toBeVisible())
    })

    it('hover on card shows rating', () => {
        render(
            <SlideSmall
                image="/"
                href="/"
                year={2000}
                rating="7.55"
                country={[{ id: 1, name: 'USA' }]}
                genre={[{ id: 1, name: 'Комедия' }]}
                name="Титаник"
            />
        )
        const card = screen.getByTestId('defaultCarouselSlide')
        const rating = screen.queryByText(/7.55/i)
        fireEvent.mouseOver(card)
        waitFor(() => expect(rating).toBeVisible())
    })
})
