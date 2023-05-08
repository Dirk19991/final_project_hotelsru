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
    env: {
        DOCKER_API_URL: 'http://localhost:3111',
    },
}

module.exports = nextConfig
