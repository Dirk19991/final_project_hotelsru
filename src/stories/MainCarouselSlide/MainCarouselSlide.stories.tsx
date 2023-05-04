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
        mainImage: '/slides/1/main.jpg',
        titleImage: '/slides/1/title.png',
        mainText:
            'Целый вагон впечатлений и тележка эмоций: все проекты производства Иви в одном месте. Запрыгивай!',

        label: 'Смотреть по подписке',
    },
}
