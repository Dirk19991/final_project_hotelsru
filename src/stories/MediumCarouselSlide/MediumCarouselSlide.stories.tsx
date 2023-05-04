import type { Meta, StoryObj } from '@storybook/react'
import { MediumCarouselSlide } from './MediumCarouselSlide'
import '../../styles/globals.scss'

const meta: Meta<typeof MediumCarouselSlide> = {
    title: 'Слайдеры/Средний слайд',
    component: MediumCarouselSlide,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div style={{ width: '224px', height: '448px' }}>
                <Story />
            </div>
        ),
    ],
    argTypes: {
        mainImage: {
            options: [
                '/topTen/1/main.jpg',
                '/topTen/2/main.jpg',
                '/topTen/3/main.jpg',
                '/topTen/4/main.jpg',
                '/topTen/5/main.jpg',
            ],
            control: { type: 'radio' },
        },
        titleImage: {
            options: [
                '/topTen/1/title.png',
                '/topTen/2/title.png',
                '/topTen/3/title.png',
                '/topTen/4/title.png',
                '/topTen/5/title.png',
            ],
            control: { type: 'radio' },
        },
        numberImage: {
            options: [
                '/topTen/1/number.svg',
                '/topTen/2/number.svg',
                '/topTen/3/number.svg',
                '/topTen/4/number.svg',
                '/topTen/5/number.svg',
            ],
            control: { type: 'radio' },
        },
    },
}

export default meta
type Story = StoryObj<typeof MediumCarouselSlide>

export const ExampleItem: Story = {
    args: {
        mainImage: '/topTen/1/main.jpg',
        titleImage: '/topTen/1/title.png',
        numberImage: '/topTen/1/number.svg',
        href: '/',
    },
}
