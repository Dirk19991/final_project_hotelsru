import type { Meta, StoryObj } from '@storybook/react'
import { SlideSmall } from './SlideSmall'
import '../../styles/globals.scss'

const meta: Meta<typeof SlideSmall> = {
    title: 'Слайдеры/Маленький слайд',
    component: SlideSmall,
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SlideSmall>

export const ExampleSlide: Story = {
    args: {
        image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/0fce9930-2c17-446f-8445-9a89d5636f5d/360',
        href: '/',
        year: 2020,
        rating: '6.777',
        country: [
            {
                id: 1,
                name: 'Франция',
            },
        ],
        genre: [
            {
                id: 1,
                name: 'Комедия',
            },
        ],
    },
}
