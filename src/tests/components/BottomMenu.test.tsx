import BottomMenu from '@/components/BottomMenu/BottomMenu'
import { fireEvent, render, screen, within } from '@testing-library/react'

describe('Testing footer', () => {
    it('renders sections correctly', () => {
        render(<BottomMenu />)
        const aboutUs = screen.getByText(/о нас/i)
        const sections = screen.getByText(/Разделы/i)
        const support = screen.getByText(/Служба поддержки/i)

        expect(aboutUs).toBeInTheDocument
        expect(sections).toBeInTheDocument
        expect(support).toBeInTheDocument
    })
})
