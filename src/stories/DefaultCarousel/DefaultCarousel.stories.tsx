import type { Meta, StoryObj } from '@storybook/react'
import DefaultCarousel from './DefaultCarousel'
import '../../styles/globals.scss'
import 'swiper/scss'
import 'swiper/css/bundle'

const meta: Meta<typeof DefaultCarousel> = {
    title: 'Слайдеры/Маленький слайдер',
    component: DefaultCarousel,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <body style={{ padding: '0 60px' }}>
                <Story />
            </body>
        ),
    ],
}

export default meta
type Story = StoryObj<typeof DefaultCarousel>

export const ExampleSlider: Story = {
    args: {
        endpoint: 'http://localhost:3001/movies?year=2020',
        headerText: 'Лучшие комедии',
    },
}
