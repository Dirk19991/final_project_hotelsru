import type { Meta, StoryObj } from '@storybook/react'
import { ButtonActor } from './ButtonActor'
import '../../styles/globals.scss'
import '@/styles/vars.scss'
import Image from 'next/image'
import React from 'react'

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
        image: (
            <Image alt="test story" src="/icons/mockActor.webp" width={44} height={44} style={{ objectFit: 'cover' }} />
        ),
        text: 'Jane Doe',
    },
}
