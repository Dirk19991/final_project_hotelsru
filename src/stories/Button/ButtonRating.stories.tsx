import type { Meta, StoryObj } from '@storybook/react'
import { ButtonRating } from './ButtonRating'
import '../../styles/globals.scss'
import '@/styles/vars.scss'

const meta: Meta<typeof ButtonRating> = {
    title: 'Кнопки/Рейтинг',
    component: ButtonRating,
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ButtonRating>

export const Rating: Story = {
    args: {
        width: 44,
        height: 44,
        fontSize: 15,
        rating: 7.5,
    },
}
