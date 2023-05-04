import DefaultCarousel from '@/stories/DefaultCarousel/DefaultCarousel'
import { render, waitFor } from '@testing-library/react'
import { enableFetchMocks } from 'jest-fetch-mock'
import '@testing-library/jest-dom'
enableFetchMocks()

jest.mock('swiper/react', () => ({
    Swiper: ({ children }: any) => (
        <div data-testid="DefaultCarousel-testId">{children}</div>
    ),
    SwiperSlide: ({ children }: any) => (
        <div data-testid="DefaultCarouselSlide-testId">{children}</div>
    ),
}))

jest.mock('swiper', () => ({
    Navigation: (props: any) => null,
    Pagination: (props: any) => null,
    Scrollbar: (props: any) => null,
    A11y: (props: any) => null,
}))

describe('Testing default carousel', () => {
    it('renders determined amount of slides', async () => {
        const view = render(
            <DefaultCarousel
                type="endpoint"
                endpoint="http://localhost:3001/movies?year=2021"
                headerText="Остросюжетные боевики"
            />
        )
        const slides = await waitFor(() =>
            view.getAllByTestId('DefaultCarouselSlide-testId')
        )

        // сейчас рендерится 20 элементов в слайдере, если это поменяется, то число нужно будет изменить
        await waitFor(() => expect(slides.length).toEqual(20))
    })
    it('renders left and right buttons', async () => {
        const view = render(
            <DefaultCarousel
                type="endpoint"
                endpoint="http://localhost:3001/movies?year=2021"
                headerText="Остросюжетные боевики"
            />
        )
        const leftButton = (await waitFor(() =>
            view.getByTestId('leftButton')
        )) as HTMLElement
        const rightButton = (await waitFor(() =>
            view.getByTestId('rightButton')
        )) as HTMLElement

        expect(leftButton).toBeInTheDocument()
        expect(rightButton).toBeInTheDocument()
    })
})
