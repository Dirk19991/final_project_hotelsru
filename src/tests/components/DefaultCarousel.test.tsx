import DefaultCarousel from '@/stories/DefaultCarousel/DefaultCarousel'
import { render, waitFor } from '@testing-library/react'
import { enableFetchMocks } from 'jest-fetch-mock'
import '@testing-library/jest-dom'
enableFetchMocks()

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
    Swiper: ({ children }: any) => <div data-testid="DefaultCarousel-testId">{children}</div>,
    SwiperSlide: ({ children }: any) => <div data-testid="DefaultCarouselSlide-testId">{children}</div>,
}))

const mockData = [
    {
        id: 702,
        nameRu: 'Темный рыцарь',
        nameEn: 'The Dark Knight',
        poster: 'https://st.kp.yandex.net/images/film_big/111543.jpg',
        rating: '9',
        ratingCount: '2698880',
        year: '2008',
        countries: [
            { nameRu: 'Великобритания', nameEn: 'United Kingdom', shortName: 'uk' },
            { nameRu: 'США', nameEn: 'United States', shortName: 'us' },
        ],
        genres: [
            { id: 13, nameRu: 'Фантастика', nameEn: 'Fiction' },
            { id: 2, nameRu: 'Боевик', nameEn: 'Action' },
            { id: 3, nameRu: 'Триллер', nameEn: 'Thriller' },
            { id: 4, nameRu: 'Криминал', nameEn: 'Crime' },
            { id: 1, nameRu: 'Драма', nameEn: 'Drama' },
        ],
        duration: '152',
    },
    {
        id: 3159,
        nameRu: 'Властелин колец: Братство Кольца',
        nameEn: 'The Lord of the Rings: The Fellowship of the Ring',
        poster: 'https://st.kp.yandex.net/images/film_big/328.jpg',
        rating: '8.8',
        ratingCount: '1904421',
        year: '2001',
        countries: [
            { nameRu: 'Новая Зеландия', nameEn: 'New Zealand', shortName: 'nz' },
            { nameRu: 'США', nameEn: 'United States', shortName: 'us' },
        ],
        genres: [
            { id: 20, nameRu: 'Приключения', nameEn: 'Adventure' },
            { id: 1, nameRu: 'Драма', nameEn: 'Drama' },
            { id: 2, nameRu: 'Боевик', nameEn: 'Action' },
        ],
        duration: '178',
    },
]

jest.mock('swiper', () => ({
    Navigation: (props: any) => null,
    Pagination: (props: any) => null,
    Scrollbar: (props: any) => null,
    A11y: (props: any) => null,
}))

describe('Testing default carousel', () => {
    it('renders determined amount of slides', async () => {
        const view = render(<DefaultCarousel title={'bestMovies'} link={`/movies/all`} dataList={mockData} />)
        const slides = await waitFor(() => view.getAllByTestId('DefaultCarouselSlide-testId'))
        const mockDataLength = mockData.length
        await waitFor(() => expect(slides.length).toEqual(mockDataLength + 1))
    })
    it('renders left and right buttons', async () => {
        const view = render(<DefaultCarousel title={'bestMovies'} link={`/movies/all`} dataList={mockData} />)
        const leftButton = (await waitFor(() => view.getByTestId('leftButton'))) as HTMLElement
        const rightButton = (await waitFor(() => view.getByTestId('rightButton'))) as HTMLElement

        expect(leftButton).toBeInTheDocument()
        expect(rightButton).toBeInTheDocument()
    })
})
