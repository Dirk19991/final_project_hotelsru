import { defineConfig } from 'cypress'

export default defineConfig({
    component: {
        devServer: {
            framework: 'next',
            bundler: 'webpack',
        },
    },

    e2e: {
        setupNodeEvents(on, config) {},
        baseUrl: 'http://localhost:3000',
        viewportHeight: 720,
        viewportWidth: 1440,
    },
})
