import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './ButtonStandard'
import '../../styles/globals.css'

// autodocs - для удобства копирования кода из storybook. Тут импортируется сам компонент и дается название
const meta: Meta<typeof Button> = {
    title: 'Кнопки/Стандартные',
    component: Button,
    tags: ['autodocs'],
}

// бойлерплейт для тайпскрипта, нужен везде
export default meta
type Story = StoryObj<typeof Button>

// тут в label прилетает то, что будет внутри кнопки, в type - то что попадет в props.type компонента button, href - на будущее когда эти кнопки будут куда-то вести

export const PaySubscription: Story = {
    args: {
        type: 'paySubscription',
        label: 'Оплатить подписку',
        href: '/',
    },
}

export const WatchSubscription: Story = {
    args: {
        label: 'Смотреть по подписке',
        type: 'watchSubscription',
        href: '/',
    },
}

export const Chat: Story = {
    args: {
        label: 'Написать в чате',
        type: 'chat',
        href: '/',
    },
}

// следующие два компонента с иконками, поэтому тут есть дополнительные пропсы для картинки - они условно рендерятся в Button.tsx если src указан.
export const ThirtyDays: Story = {
    args: {
        label: '30 дней подписки за 1 ₽',
        type: 'thirtyDays',
        src: '/icons/lightning.svg',
        width: 24,
        height: 32,
        href: '/',
    },
}

export const Certificate: Story = {
    args: {
        label: 'Активировать сертификат',
        type: 'certificate',
        src: '/icons/gift.svg',
        width: 56,
        height: 32,
        href: '/',
    },
}
