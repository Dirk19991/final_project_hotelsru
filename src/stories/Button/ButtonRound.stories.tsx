import type { Meta, StoryObj } from '@storybook/react'
import { ButtonRound } from './ButtonRound'
import '../../styles/globals.scss'

const meta: Meta<typeof ButtonRound> = {
    title: 'Кнопки/Круглые',
    component: ButtonRound,
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ButtonRound>

export const VK: Story = {
    args: {
        src: '/icons/social_vkontakte.svg',
        width: 20,
        height: 20,
        href: '/',
    },
}

export const OK: Story = {
    args: {
        src: '/icons/social_odnoklassniki.svg',
        width: 20,
        height: 20,
        href: '/',
    },
}

export const Twitter: Story = {
    args: {
        src: '/icons/social_twitter.svg',
        width: 20,
        height: 20,
        href: '/',
    },
}

export const Viber: Story = {
    args: {
        src: '/icons/social_viber.svg',
        width: 20,
        height: 20,
        href: '/',
    },
}

export const LinkedIn: Story = {
    args: {
        src: '/icons/social_linkedin.svg',
        width: 20,
        height: 20,
        href: '/',
    },
}

export const Telegram: Story = {
    args: {
        src: '/icons/social_telegram.svg',
        width: 20,
        height: 20,
        href: '/',
    },
}
