import type { Meta, StoryObj } from '@storybook/react'
import DefaultCarouselSlide from './DefaultCarouselSlide'
import '../../styles/globals.scss'

const meta: Meta<typeof DefaultCarouselSlide> = {
    title: 'Слайдеры/Маленький слайд',
    component: DefaultCarouselSlide,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div style={{ width: '156px', height: '240px' }}>
                <Story />
            </div>
        ),
    ],
}

export default meta
type Story = StoryObj<typeof DefaultCarouselSlide>

export const ExampleSlide: Story = {
    args: {
        image: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/0fce9930-2c17-446f-8445-9a89d5636f5d/360',
        href: '/',
        year: '2020',
        rating: '6.777',
        countries: [
            {
                id: 1,
                nameRu: 'Франция',
                nameEn: 'France',
                shortName: 'fr',
            },
        ],
        genres: [
            {
                id: 1,
                nameRu: 'Комедия',
                nameEn: 'Comedy',
            },
        ],
    },
}
