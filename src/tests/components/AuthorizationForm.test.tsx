import AuthorizationForm from '@/components/AuthorizationForm/AuthorizationForm'
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'

describe('Testing Authorization Form', () => {
    it('renders email and password inputs', () => {
        render(<AuthorizationForm />)
        const email = screen.getByRole('textbox', {
            name: /Введите email/i,
        })
        const password = screen.getByLabelText(/Введите пароль/i)

        expect(email).toBeInTheDocument()
        expect(password).toBeInTheDocument()
    })
    it('email and password inputs work as expected', () => {
        render(<AuthorizationForm />)
        const email = screen.getByRole('textbox', {
            name: /Введите email/i,
        })
        const password = screen.getByLabelText(/Введите пароль/i)

        fireEvent.change(email, { target: { value: 'test@mail.ru' } })
        fireEvent.change(password, { target: { value: '11111111' } })

        const emailValue = screen.getByDisplayValue('test@mail.ru')
        const passwordValue = screen.getByDisplayValue('11111111')
        expect(emailValue).toBeInTheDocument()
        expect(passwordValue).toBeInTheDocument()
    })
})
