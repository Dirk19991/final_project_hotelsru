const { i18n } = require('./next-i18next.config')

const nextConfig = {
    reactStrictMode: false,
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
        DEPLOY_API_URL: 'http://193.32.203.137:4000',
        VERCEL_FORCE_NO_BUILD_CACHE: 1,
    },
}

module.exports = nextConfig
