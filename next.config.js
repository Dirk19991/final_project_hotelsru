const { i18n } = require('./next-i18next.config')

const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avatars.mds.yandex.net',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'st.kp.yandex.net',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'www.kinopoisk.ru',
                port: '',
                pathname: '/**',
            },
        ],
    },
    i18n,
    env: {
        DOCKER_API_URL: 'http://localhost:3111',
    },
}

module.exports = nextConfig
