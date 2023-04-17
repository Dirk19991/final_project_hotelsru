import type { Meta, StoryObj } from '@storybook/react'
import FilterSelect from './FilterSelect'
import '@/styles/globals.scss'
import { genresArr } from '@/components/Filters/Filters'

const meta: Meta<typeof FilterSelect> = {
    title: 'Фильтр фильмов',
    component: FilterSelect,
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof FilterSelect>

export const GenreSelect: Story = {
    args: {
        title: 'Жанры',
        values: genresArr,
    },
}

export const RatingSelect: Story = {
    args: {
        title: 'Рейтинг',
        values: genresArr,
    },
}

export const CountriesSelect: Story = {
    args: {
        title: 'Страны',
        values: genresArr,
    },
}
