import type { Meta, StoryObj } from '@storybook/react'
import { ButtonFooter } from './ButtonFooter'
import '../../styles/globals.css'

const meta: Meta<typeof ButtonFooter> = {
    title: 'Кнопки/Футер',
    component: ButtonFooter,
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ButtonFooter>

export const ApplePay: Story = {
    args: {
        src: '/icons/apple.svg',
        width: 20,
        height: 20,
        href: '/',
        sublabel: 'Загрузить в',
        label: 'App Store',
    },
}

export const GooglePlay: Story = {
    args: {
        src: '/icons/googlePlay.svg',
        width: 20,
        height: 20,
        href: '/',
        sublabel: 'Доступно в',
        label: 'Google Play',
    },
}

export const SmartTV: Story = {
    args: {
        src: '/icons/smartTV.svg',
        width: 20,
        height: 20,
        href: '/',
        sublabel: 'Смотрите на',
        label: 'Smart TV',
    },
}

export const AllDevices: Story = {
    args: {
        src: '/icons/allDevices.svg',
        width: 20,
        height: 20,
        href: '/',
        label: 'Все устройства',
    },
}
