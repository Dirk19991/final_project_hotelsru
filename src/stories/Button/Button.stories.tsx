import type { Meta, StoryObj } from '@storybook/react'
import Image from 'next/image'
import { Button, ButtonProps } from './Button'
import lightning from '../../../public/icons/lightning.svg'
import gift from '../../../public/icons/gift.svg'

// autodocs - для удобства копирования кода из storybook. Тут импортируется сам компонент и дается название
const meta: Meta<typeof Button> = {
    title: 'Button',
    component: Button,
    tags: ['autodocs'],
}

// бойлерплейт для тайпскрипта, нужен везде
export default meta
type Story = StoryObj<typeof Button>

// тут в children прилетает то, что будет внутри кнопки, в type - то что попадет в props.type компонента button
export const PaySubscription: Story = {
    args: {
        children: 'Оплатить подписку',
        type: 'paySubscription',
    },
}

export const WatchSubscription: Story = {
    args: {
        children: 'Смотреть по подписке',
        type: 'watchSubscription',
    },
}

// следующие два компонента с иконками, поэтому тут в children попадает кусок JSX
export const ThirtyDays: Story = {
    args: {
        children: (
            <>
                {' '}
                <Image src={lightning} alt="lightning" width="24" height="32" />
                <div>30 дней подписки за 1 ₽</div>
            </>
        ),
        type: 'thirtyDays',
    },
}

export const Certificate: Story = {
    args: {
        children: (
            <>
                {' '}
                <Image src={gift} alt="lightning" width="56" height="32" />
                <div>Активировать сертификат</div>
            </>
        ),
        type: 'certificate',
    },
}
