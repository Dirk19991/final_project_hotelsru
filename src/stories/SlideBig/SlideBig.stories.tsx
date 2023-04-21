import type { Meta, StoryObj } from '@storybook/react'
import Slide from './SlideBig'
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
        mainText:
            'Целый вагон впечатлений и тележка эмоций: все проекты производства Иви в одном месте. Запрыгивай!',
        titleText: 'Создано Иви',
        label: 'Смотреть по подписке',
    },
}
