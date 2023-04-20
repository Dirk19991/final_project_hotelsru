import type { Meta, StoryObj } from '@storybook/react'
import { ButtonRound } from './ButtonRound'
import '../../styles/globals.scss'

const meta: Meta<typeof ButtonRound> = {
    title: 'Кнопки/Круглые и Квадратные',
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
        type: 'round',
    },
}

export const OK: Story = {
    args: {
        src: '/icons/social_odnoklassniki.svg',
        width: 20,
        height: 20,
        href: '/',
        type: 'round',
    },
}

export const Twitter: Story = {
    args: {
        src: '/icons/social_twitter.svg',
        width: 20,
        height: 20,
        href: '/',
        type: 'round',
    },
}

export const Viber: Story = {
    args: {
        src: '/icons/social_viber.svg',
        width: 20,
        height: 20,
        href: '/',
        type: 'round',
    },
}

export const LinkedIn: Story = {
    args: {
        src: '/icons/social_linkedin.svg',
        width: 20,
        height: 20,
        href: '/',
        type: 'round',
    },
}

export const Telegram: Story = {
    args: {
        src: '/icons/social_telegram.svg',
        width: 20,
        height: 20,
        href: '/',
        type: 'round',
    },
}

export const Mail: Story = {
    args: {
        src: '/icons/mail.svg',
        width: 20,
        height: 20,
        href: '/',
        type: 'square',
    },
}

export const Phone: Story = {
    args: {
        src: '/icons/phone.svg',
        width: 20,
        height: 20,
        href: '/',
        type: 'square',
    },
}

export const BigViolet: Story = {
    args: {
        src: '/icons/speaker.svg',
        width: 56,
        height: 56,
        href: '/',
        type: 'bigViolet',
    },
}

export const Bookmark: Story = {
    args: {
        src: '/icons/bookmark.svg',
        width: 20,
        height: 20,
        href: '/',
        type: 'grey',
    },
}

export const Bell: Story = {
    args: {
        src: '/icons/bell.svg',
        width: 20,
        height: 20,
        href: '/',
        type: 'grey',
    },
}

export const Download: Story = {
    args: {
        src: '/icons/download.svg',
        width: 20,
        height: 20,
        href: '/',
        type: 'grey',
    },
}
