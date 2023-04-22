import NavigationBar from '@/components/NavigationBar/NavigationBar'
import { render, screen, within } from '@testing-library/react'

const handleMouseOver = jest.fn()
const navElementsAmount = 6

describe('Testing header navigation bar', () => {
    it('renders determined amount of elements', () => {
        render(<NavigationBar handleMouseOver={handleMouseOver} />)
        const nav = screen.getByRole('list')
        const { getAllByRole } = within(nav)
        const items = getAllByRole('listitem')
        expect(items.length).toBe(navElementsAmount)
    })
})
