import AdminPanel from '@/components/admin/AdminPanel'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

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

const buttonsNumber = 4

describe('Testing admin panel', () => {
    it('shows correct number of buttons', () => {
        render(<AdminPanel />)
        const buttons = screen.getAllByRole('button')

        expect(buttons.length).toEqual(buttonsNumber)
    })

    it('shows correct buttons', () => {
        render(<AdminPanel />)
        const addButton = screen.getByText(/добавить фильм/i)
        const deleteButton = screen.getByText(/удалить фильм/i)
        const editMovieButton = screen.getByText(/редактировать фильм/i)
        const editGenreButton = screen.getByText(/редактировать жанр/i)

        expect(addButton).toBeInTheDocument()
        expect(deleteButton).toBeInTheDocument()
        expect(editMovieButton).toBeInTheDocument()
        expect(editGenreButton).toBeInTheDocument()
    })
})
