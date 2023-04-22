import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
    dir: './',
})

const config = {
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
        'swiper/css': 'swiper/swiper.min.css',
    },
    transformIgnorePatterns: ['node_modules/(?!@ngrx|(?!deck.gl)|ng-dynamic)'],
}

export default createJestConfig(config)
