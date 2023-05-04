import type { Meta, StoryObj } from '@storybook/react'
import CommentSlide from './CommentSlide'
import '../../styles/globals.scss'

const meta: Meta<typeof CommentSlide> = {
    title: 'Слайдеры/Слайд комментария',
    component: CommentSlide,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div style={{ width: '285px' }}>
                <Story />
            </div>
        ),
    ],
}

export default meta
type Story = StoryObj<typeof CommentSlide>

export const ExampleSlide: Story = {
    args: {
        author: 'John',
        text: 'I just finished the first episode. It was very, very good and I am hard to please. The role Natasha was made for. Brody is fantastic. The mood, cinematography and writing are all top par.',
        date: '28.02.2023',
    },
}
