import type { Meta, StoryObj } from '@storybook/react'
import { ButtonActor } from './ButtonActor'
import '../../styles/globals.scss'
import '@/styles/vars.scss'

const meta: Meta<typeof ButtonActor> = {
    title: 'Кнопки/Актеры',
    component: ButtonActor,
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ButtonActor>

export const Actor: Story = {
    args: {
        src: '/icons/mockActor.webp',
        width: 44,
        height: 44,
        href: '/',
        image: true,
    },
}
