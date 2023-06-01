import type { Meta, StoryObj } from '@storybook/react'
import Slide from './MainCarouselSlide'
import '../../styles/globals.scss'

const meta: Meta<typeof Slide> = {
    title: 'Слайдеры/Большой слайд',
    component: Slide,
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Slide>

export const ExampleSlide: Story = {
    args: {
        img: '/slides/1/main.jpg',
        titleImg: '/slides/1/title.png',
        text: 'Целый вагон впечатлений и тележка эмоций: все проекты производства Иви в одном месте. Запрыгивай!',
    },
}
