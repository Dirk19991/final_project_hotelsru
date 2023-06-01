import type { Meta, StoryObj } from '@storybook/react'
import { ButtonActor } from './ButtonActor'
import '../../styles/globals.scss'
import '@/styles/vars.scss'

const meta: Meta<typeof ButtonActor> = {
    title: 'Кнопки/Актеры и контейнер для рейтинга',
    component: ButtonActor,
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ButtonActor>

export const Actor: Story = {
    args: {
        href: '/icons/mockActor.webp',
        image: true,
        text: 'Tom Cruise',
    },
}
