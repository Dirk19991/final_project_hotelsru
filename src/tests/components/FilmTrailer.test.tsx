import FilmTrailer from '@/components/FilmTrailer/FilmTrailer'
import '@testing-library/jest-dom'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import data from '@/data/mockDataFilm.json'
import { IMovie } from '@/types/Component/IMovie'
import resizeScreenSize from '@/util/resizeScreenSize'

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    })),
})

describe('Film description testing', () => {
    it('renders the element', () => {
        render(<FilmTrailer filmData={data as IMovie} />)

        const container = screen.getByTestId('trailer')
        expect(container).toBeInTheDocument()
    })

    it('buttons are not rendered on mobile', () => {
        resizeScreenSize(600)
        render(<FilmTrailer filmData={data as IMovie} />)

        const buttons = screen.queryByTestId('buttons')
        expect(buttons).not.toBeInTheDocument()
    })
})
