import AuthModal from '@/components/auth/AuthModal/AuthModal'
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'

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

describe('Testing Authorization Form', () => {
    it('renders email and password inputs', () => {
        render(<AuthModal close={() => {}} />)
        const email = screen.getByTestId('email-input')
        const password = screen.getByTestId('password-input')
        expect(email).toBeInTheDocument()
        expect(password).toBeInTheDocument()
    })

    it('email and password inputs work as expected', () => {
        render(<AuthModal close={() => {}} />)
        const email = screen.getByTestId('email-input')
        const password = screen.getByTestId('password-input')

        fireEvent.change(email, { target: { value: 'test@mail.ru' } })
        fireEvent.change(password, { target: { value: '11111111' } })

        const emailValue = screen.getByDisplayValue('test@mail.ru')
        const passwordValue = screen.getByDisplayValue('11111111')
        expect(emailValue).toBeInTheDocument()
        expect(passwordValue).toBeInTheDocument()
    })

    it('close function is called when click on close button', () => {
        let closed = false
        render(
            <AuthModal
                close={() => {
                    closed = true
                }}
            />
        )
        const closeButton = screen.getByTestId('close-modal')
        fireEvent.click(closeButton)
        expect(closed).toBe(true)
    })

    it('show error message when login with no data in inputs', () => {
        render(<AuthModal close={() => {}} />)
        const loginButton = screen.getByTestId('login-button')
        fireEvent.click(loginButton)
        const errorMes = screen.getByTestId('login-error')
        expect(errorMes).toBeInTheDocument()
    })
})
