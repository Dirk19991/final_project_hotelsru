import type { Meta, StoryObj } from '@storybook/react'
import { ButtonFooter } from './ButtonFooter'
import '../../styles/globals.scss'
import '@/styles/vars.scss'

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
        type: 'black',
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
        type: 'black',
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
        type: 'black',
    },
}

export const AllDevices: Story = {
    args: {
        src: '/icons/allDevices.svg',
        width: 20,
        height: 20,
        href: '/',
        label: 'Все устройства',
        type: 'black',
    },
}

export const Trailer: Story = {
    args: {
        src: '/icons/play.svg',
        width: 20,
        height: 20,
        href: '/',
        label: 'Трейлер',
        type: 'grey',
    },
}
