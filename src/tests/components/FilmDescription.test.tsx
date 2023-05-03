import FilmDescription from '@/components/FilmDescription/FilmDescription'
import '@testing-library/jest-dom'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import data from '@/data/mockDataFilm.json'
import { IMovie } from '@/types/ComponentProps/IMovie'

jest.mock('next/router', () => ({
    useRouter() {
        return {
            route: '/',
            pathname: '',
            query: '',
            asPath: '',
            push: jest.fn(),
            events: {
                on: jest.fn(),
                off: jest.fn(),
            },
            beforePopState: jest.fn(() => null),
            prefetch: jest.fn(() => null),
        }
    },
}))

describe('Film description testing', () => {
    it('renders the element', async () => {
        render(<FilmDescription filmData={data as IMovie} />)

        const container = screen.getByTestId('description')
        expect(container).toBeInTheDocument()
    })
    it('the details button works', async () => {
        render(<FilmDescription filmData={data as IMovie} />)

        const details = screen.queryByText(/Детали о фильме/i)
        expect(details).toBeInTheDocument()

        details && fireEvent.click(details)
        waitFor(() => expect(details).not.toBeInTheDocument())
    })
    it('renders correct number of actors', async () => {
        render(<FilmDescription filmData={data as IMovie} />)

        const actors = screen.getAllByTestId('button-actor')
        expect(actors.length).toBe(4)
    })
})
