import Header from '@/components/layout/header/Header'
import NavigationBar from '@/components/layout/header/NavigationBar/NavigationBar'
import { render, screen, fireEvent, within } from '@testing-library/react'
import '@testing-library/jest-dom'
import resizeScreenSize from '@/util/resizeScreenSize'
import HeaderDropdownFilters from '@/components/layout/header/HeaderDropdownFilters/HeaderDropdownFilters'
import HeaderDropdownProfile from '@/components/layout/header/HeaderDropdownProfile/HeaderDropdownProfile'
import HeaderDropdownSubscription from '@/components/layout/header/HeaderDropdownSubscription/HeaderDropdownSubscription'
import React from 'react'

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
const handleMouseOver = jest.fn()
jest.mock('next/router', () => require('next-router-mock'))
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    })),
})
const dropdownContentMock = {
    genre: [
        {
            id: 1,
            name: 'Артхаус',
            link: 'movies/arthouse',
        },
        {
            id: 2,
            name: 'Боевики',
            link: 'movies/boeviki',
        },
        {
            id: 3,
            name: 'Вестерн',
            link: 'movies/western',
        },
    ],
    country: [
        {
            id: 1,
            name: 'Русские',
            link: 'movies/ru',
        },
    ],
    year: [
        {
            id: 1,
            name: 'Фильмы 2023 года',
            link: 'movies/2023',
        },
        {
            id: 2,
            name: 'Фильмы 2022 года',
            link: 'movies/2022',
        },
    ],
    selection: [
        {
            id: 1,
            name: 'Новинки',
            link: 'https://www.ivi.ru/new/movie-new',
        },
    ],
}

jest.mock('swiper/react', () => ({
    Swiper: ({ children }: any) => <div data-testid="DefaultCarousel-testId">{children}</div>,
    SwiperSlide: ({ children }: any) => <div data-testid="DefaultCarouselSlide-testId">{children}</div>,
}))
jest.mock('swiper', () => ({
    Navigation: (props: any) => null,
    Pagination: (props: any) => null,
    Scrollbar: (props: any) => null,
    A11y: (props: any) => null,
}))

describe('Header nav testing', () => {
    it('renders logo', () => {
        render(<Header />)
        const logo = screen.getByTestId('header-logo')
        expect(logo).toBeInTheDocument()
    })

    it('renders all header elments on desktop screens', () => {
        resizeScreenSize(1440)
        render(<Header />)
        render(<NavigationBar handleMouseOver={handleMouseOver} />)

        const searchButton = screen.getByTestId('search-button')
        const langButton = screen.getByTestId('lang-button')
        const profileButton = screen.getByTestId('profile-button')
        const subscrptionButton = screen.getByTestId('subscription-button')

        expect(langButton).toBeInTheDocument()
        expect(profileButton).toBeInTheDocument()
        expect(subscrptionButton).toBeInTheDocument()
        expect(searchButton).toBeInTheDocument()
    })

    it('renders header elements on tab screens', () => {
        resizeScreenSize(1150)
        render(<Header />)

        const langButton = screen.getByTestId('lang-button')
        const profileButton = screen.getByTestId('profile-button')
        const subscrptionButton = screen.getByTestId('subscription-button')
        const navigationBar = screen.queryByTestId('navigation-bar')
        const searchButton = screen.queryByTestId('search-button')

        expect(profileButton).toBeInTheDocument()
        expect(langButton).toBeInTheDocument()
        expect(subscrptionButton).toBeInTheDocument()
        expect(searchButton).not.toBeInTheDocument()
        expect(navigationBar).not.toBeInTheDocument()
    })

    it('renders header elements on mobile screens', () => {
        resizeScreenSize(550)
        render(<Header />)

        const navigationBar = screen.queryByTestId('navigation-bar')
        const searchButton = screen.queryByTestId('search-button')
        const langButton = screen.queryByTestId('lang-button')
        const profileButton = screen.queryByTestId('profile-button')
        const subscrptionButton = screen.getByTestId('subscription-button')

        expect(searchButton).not.toBeInTheDocument()
        expect(navigationBar).not.toBeInTheDocument()
        expect(langButton).not.toBeInTheDocument()
        expect(profileButton).not.toBeInTheDocument()
        expect(subscrptionButton).toBeInTheDocument()
    })

    it('renders dropdown filters on mouse over', () => {
        render(<Header />)
        render(<NavigationBar handleMouseOver={handleMouseOver} />)
        render(<HeaderDropdownFilters subMenuData={dropdownContentMock} type="genre" />)

        const navBar = screen.getByTestId('navigation-bar')
        const subscriptionWidget = screen.getByTestId('subscription-widget')

        expect(navBar).toBeInTheDocument()

        const { getAllByRole } = within(navBar)
        const navElements = getAllByRole('listitem')

        navElements.forEach((el, i) => {
            const { getByRole } = within(el)

            fireEvent.mouseOver(getByRole('link'))
            expect(handleMouseOver).toHaveBeenCalled()
            const dropdownFilters = screen.getByTestId('dropdown-filters')

            if (i === 2 || i === 3 || i === 4) {
                expect(dropdownFilters).toBeInTheDocument()
                expect(subscriptionWidget).toBeInTheDocument()
            }
        })
    })

    it('renders dropdownProfile on mouse over', () => {
        resizeScreenSize(1440)
        render(<Header />)
        render(<HeaderDropdownProfile openAuthModal={() => {}} />)

        const profileButton = screen.getByTestId('profile-button')
        const dropdownProfile = screen.getByTestId('dropdown-profile')

        fireEvent.mouseOver(profileButton)
        expect(handleMouseOver).toHaveBeenCalled()
        expect(dropdownProfile).toBeInTheDocument()
    })

    it('renders dropdownSubscription on mouse over', () => {
        resizeScreenSize(1440)
        render(<Header />)
        render(<HeaderDropdownSubscription />)

        const subscriptionButton = screen.getByTestId('subscription-button')
        const dropdownSubscription = screen.getByTestId('dropdown-subscription')
        const headerCarousel = screen.getByTestId('header-carousel')

        fireEvent.mouseOver(subscriptionButton)
        expect(handleMouseOver).toHaveBeenCalled()
        expect(dropdownSubscription).toBeInTheDocument()
        expect(headerCarousel).toBeInTheDocument()
    })
})
