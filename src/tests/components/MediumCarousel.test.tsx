import MediumCarousel from '@/components/MediumCarousel/MediumCarousel'
import { render, screen, within } from '@testing-library/react'

jest.mock('swiper/react', () => ({
    Swiper: ({ children }: any) => (
        <div data-testid="Swiper-testId">{children}</div>
    ),
    SwiperSlide: ({ children }: any) => (
        <div data-testid="SwiperSlide-testId">{children}</div>
    ),
}))

jest.mock('swiper', () => ({
    Navigation: (props: any) => null,
    Pagination: (props: any) => null,
    Scrollbar: (props: any) => null,
    A11y: (props: any) => null,
}))

const navElementsAmount = 10

describe('Testing header navigation bar', () => {
    it('renders determined amount of slides', () => {
        const view = render(<MediumCarousel />)

        const slides = view.getAllByTestId('SwiperSlide-testId')
        expect(slides.length).toBe(10)
    })
})
