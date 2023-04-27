import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
    dir: './',
})

const config = {
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
        'swiper/css': ['<rootDir>/node_modules/swiper/swiper.min.css'],
        'swiper/react': ['<rootDir>/node_modules/swiper/react/swiper-react.js'],
    },
    transformIgnorePatterns: ['node_modules/(?!@ngrx|(?!deck.gl)|ng-dynamic)'],
}

export default createJestConfig(config)
