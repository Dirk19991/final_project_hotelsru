import Header from '@/components/Header/Header'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Testing Header Component', () => {
    it('should render properly', () => {
        render(<Header />)
        const navigationBar = screen.getByTestId('navigation-bar')
        expect(navigationBar).toBeInTheDocument()
    })
})
