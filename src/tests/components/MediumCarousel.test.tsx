import MediumCarousel from '@/components/carousels/MediumCarousel/MediumCarousel'
import { render } from '@testing-library/react'
import data from '@/data/top10Movies.json'

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

jest.mock('swiper/react', () => ({
    Swiper: ({ children }: any) => <div data-testid="MediumCarousel-testId">{children}</div>,
    SwiperSlide: ({ children }: any) => <div data-testid="MediumCarouselSlide-testId">{children}</div>,
}))

jest.mock('swiper', () => ({
    Navigation: (props: any) => null,
    Pagination: (props: any) => null,
    Scrollbar: (props: any) => null,
    A11y: (props: any) => null,
}))

describe('Testing medium carousel', () => {
    it('renders determined amount of slides', () => {
        const view = render(<MediumCarousel data={data.movies} />)
        const slides = view.getAllByTestId('MediumCarouselSlide-testId')
        expect(slides.length).toBe(10)
    })
})
