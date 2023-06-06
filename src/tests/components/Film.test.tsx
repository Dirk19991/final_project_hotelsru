import Description from '@/components/film/Description/Description'
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import CreatorModal from '@/components/film/CreatorModal/CreatorModal'
import PosterCard from '@/components/film/PosterCard/PosterCard'
import Header from '@/components/film/Header/Header'
import Rating from '@/components/film/Rating/Rating'
import AllDevices from '@/components/film/AllDevices/AllDevices'
import CreatorsList from '@/components/film/CreatorList/CreatorList'
import CreatorMedallion from '@/components/film/CreatorMedallion/CreatorMedallion'
import Breadcrumbs from '@/components/film/Breadcrumbs/Breadcrumbs'

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

const src = '/tv/federal/1tv.jpg'

const person = {
    personId: 1,
    nameRu: 'name Ru',
    nameEn: 'name En',
    photo: src,
    description: 'description person',
    biography: 'biography',
}

const movie = {
    id: 1,
    nameEn: 'name en',
    nameRu: 'name ru',
    description: 'description',
    trailer: 'trailer',
    similarMovies: [],
    rating: 'rating',
    ratingCount: 'ratingCount',
    year: 'year',
    ageRating: 'ageRating',
    poster: src,
    duration: 'duration',
    slogan: 'slogan',
    actors: [person],
    director: [],
    editor: [],
    composer: [],
    operator: [],
    producer: [],
    genres: [],
    countries: [],
}

describe('Testing film elements', () => {
    describe('Testing description', () => {
        it('renders correctly', () => {
            render(<Description text={'description'} />)
            const container = screen.getByTestId('film-description')
            const showButton = screen.queryByTestId('film-description-button')
            expect(container).toBeInTheDocument()
            expect(showButton).not.toBeInTheDocument()
        })
    })

    describe('Testing poster card', () => {
        it('renders correctly', () => {
            render(<PosterCard film={movie} />)
            const container = screen.getByTestId('film-postercard')
            expect(container).toBeInTheDocument()
        })
    })

    describe('Testing film header', () => {
        it('renders correctly', () => {
            render(<Header year={''} title={''} genres={[]} duration={''} />)
            const container = screen.getByTestId('film-header')
            const breadcrumbs = screen.getByTestId('film-breadcrumbs')
            expect(container).toBeInTheDocument()
            expect(breadcrumbs).toBeInTheDocument()
        })
    })

    describe('Testing rating', () => {
        it('renders correctly', () => {
            const FIXED_RATING = 5
            render(<Rating ratingCount={'100'} fixedRating={FIXED_RATING} />)
            const container = screen.getByTestId('film-rating')
            const ratingEl = screen.getByText(FIXED_RATING)
            const buttons = screen.getAllByRole('button')
            expect(container).toBeInTheDocument()
            expect(ratingEl).toBeInTheDocument()
            expect(buttons.length).toBe(1)
        })
    })

    describe('Testing all devices', () => {
        it('renders correctly', () => {
            render(<AllDevices name={''} src={src} />)
            const container = screen.getByTestId('film-all-devices')
            expect(container).toBeInTheDocument()
        })
    })

    describe('Testing creator list', () => {
        it('renders correctly', () => {
            render(<CreatorsList data={movie} />)
            const container = screen.getByTestId('film-creator-list')
            const medallion = screen.getByTestId('film-creator-medallion')
            expect(container).toBeInTheDocument()
            expect(medallion).toBeInTheDocument()
        })

        it('modal opens by clicking on button', () => {
            render(<CreatorsList data={movie} />)
            const modalButton = screen.getByTestId('film-creator-list-button')
            fireEvent.click(modalButton)
            const modal = screen.getByTestId('film-creator-modal')
            expect(modal).toBeInTheDocument()
        })
    })

    describe('Testing creator medallion', () => {
        it('renders correctly', () => {
            const NAME = 'name'
            render(<CreatorMedallion size={'big'} name={NAME} src={src} href={''} />)
            const container = screen.getByTestId('film-creator-medallion')
            const nameEl = screen.getByText(NAME)
            const imageEl = screen.getByAltText(NAME)
            expect(container).toBeInTheDocument()
            expect(nameEl).toBeInTheDocument()
            expect(imageEl).toBeInTheDocument()
        })
    })

    describe('Testing creator modal', () => {
        it('renders correctly', () => {
            render(<CreatorModal film={movie} close={() => {}} />)
            const container = screen.getByTestId('film-creator-modal')
            const poster = screen.getByTestId('film-postercard')
            expect(container).toBeInTheDocument()
            expect(poster).toBeInTheDocument()
        })

        it('close function is called by clicking on close button', () => {
            let closed = false
            render(
                <CreatorModal
                    film={movie}
                    close={() => {
                        closed = true
                    }}
                />
            )
            const closeButton = screen.getByTestId('film-creator-modal-close')
            fireEvent.click(closeButton)
            expect(closed).toBe(true)
        })
    })

    describe('Testing film breadcrumbs', () => {
        it('renders correctly', () => {
            const NAME = 'item name'
            const items = [
                { name: NAME, href: 'href1' },
                { name: NAME, href: 'href1' },
                { name: NAME, href: 'href1' },
            ]
            render(<Breadcrumbs items={items} />)
            const container = screen.getByTestId('film-breadcrumbs')
            const itemsEl = screen.getAllByText(NAME)
            expect(container).toBeInTheDocument()
            expect(itemsEl.length).toBe(items.length)
        })
    })
})
