import Header from '@/components/Header/Header'
import NavigationBar from '@/components/NavigationBar/NavigationBar'
import { render, screen, fireEvent, within } from '@testing-library/react'
import '@testing-library/jest-dom'
import resizeScreenSize from '@/util/resizeScreenSize'
import HeaderDropdownFilters from '@/components/HeaderDropdownFilters/HeaderDropdownFilters'
import HeaderDropdownProfile from '@/components/HeaderDropdownProfile/HeaderDropdownProfile'
import HeaderDropdownSubscription from '@/components/HeaderDropdownSubscription/HeaderDropdownSubscription'

const handleMouseOver = jest.fn()
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
jest.mock('next/router', () => require('next-router-mock'))
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
        render(<HeaderDropdownFilters subMenuData={dropdownContentMock} />)

        const navBar = screen.getByTestId('navigation-bar')

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
            }
        })
    })

    it('renders dropdownProfile on mouse over', () => {
        resizeScreenSize(1440)
        render(<Header />)
        render(<HeaderDropdownProfile />)

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

        fireEvent.mouseOver(subscriptionButton)
        expect(handleMouseOver).toHaveBeenCalled()
        expect(dropdownSubscription).toBeInTheDocument()
    })
})
