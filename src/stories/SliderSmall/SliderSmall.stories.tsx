import type { Meta, StoryObj } from '@storybook/react'
import SliderSmall from './SliderSmall'
import '../../styles/globals.scss'

const meta: Meta<typeof SliderSmall> = {
    title: 'Слайдеры/Маленький слайдер',
    component: SliderSmall,
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
type Story = StoryObj<typeof SliderSmall>

export const ExampleSlider: Story = {
    args: {
        endpoint: 'http://localhost:3001/movies?year=2020',
        headerText: 'Лучшие комедии',
    },
}
