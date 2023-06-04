import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './ButtonStandard'
import '../../styles/globals.scss'

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

export const HeaderThrityDays: Story = {
    args: {
        type: 'headerThirtyDays',
        label: 'Смотреть 30 дней бесплатно',
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

export const BigThirtyDays: Story = {
    args: {
        label: 'Смотреть 30 дней бесплатно',
        type: 'bigThirtyDays',
    },
    decorators: [
        (Story) => (
            <div style={{ width: '500px' }}>
                <Story />
            </div>
        ),
    ],
}

export const Register: Story = {
    args: {
        label: 'Войти или зарегистрироваться',
        type: 'register',
    },
    decorators: [
        (Story) => (
            <div style={{ width: '325px' }}>
                <Story />
            </div>
        ),
    ],
}

export const Watch: Story = {
    args: {
        label: 'Смотреть',
        type: 'watch',
    },
}

export const Rating: Story = {
    args: {
        label: 'Оценить',
        type: 'rating',
    },
}

export const ShowMore: Story = {
    args: {
        label: 'Показать еще',
        type: 'showMore',
    },
    decorators: [
        (Story) => (
            <div style={{ width: '325px' }}>
                <Story />
            </div>
        ),
    ],
}
