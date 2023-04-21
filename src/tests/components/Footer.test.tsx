import Footer from '@/components/Footer/Footer'
import { fireEvent, render, screen, within } from '@testing-library/react'

describe('Testing footer', () => {
    it('renders buttons correctly', () => {
        render(<Footer />)
        const appStore = screen.getByText(/app store/i)
        const googlePlay = screen.getByText(/google play/i)
        const smartTV = screen.getByText(/smart tv/i)
        const allDevices = screen.getByText(/все устройства/i)
        const chat = screen.getByText(/написать в чате/i)

        expect(appStore).toBeInTheDocument
        expect(googlePlay).toBeInTheDocument
        expect(smartTV).toBeInTheDocument
        expect(allDevices).toBeInTheDocument
        expect(chat).toBeInTheDocument
    })
})
