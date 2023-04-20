import type { Meta, StoryObj } from '@storybook/react'
import FilterSelect from './FilterSelect'
// import '@/styles/globals.scss'
import { genresArr } from '@/components/Filters/Filters'
import links from '../../components/Header/links.json'

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
        values: links.movies_categories.genre,
    },
}

export const RatingSelect: Story = {
    args: {
        title: 'Рейтинг',
        values: links.movies_categories.genre,
    },
}

export const CountriesSelect: Story = {
    args: {
        title: 'Страны',
        values: links.movies_categories.country,
    },
}
