import React, { createContext, useState, ReactNode, useContext } from 'react'

const i18n = {
    en: {
        sortBy: 'Sort by',
        byRating: 'Rating',
        byRatesAmount: 'Number of ratings',
        byReleaseDate: 'Release date',
        byAlphabet: 'Alphabet',
        genres: 'Genres',
        countries: 'Countries',
        years: 'Years',
        more: 'More',
        catalog: 'Catalog',
        aboutUs: 'About us',
        aboutCompany: 'About Company',
        vacancies: 'Vacancies',
        betaTestingProgram: 'Beta testing program',
        informationForPartners: 'Information for partners',
        advertising: 'Advertising',
        userAgreement: 'User agreement',
        privacyPolicy: 'Privacy policy',
        compliance: 'Compliance',
        sections: 'Sections',
        myIvi: 'My Ivi',
        whatsNew: "What's new",
        movies: 'Movies',
        tvSeries: 'TV Series',
        cartoons: 'Cartoons',
        whatToWatch: 'What to watch',
        activateCertificate: 'Activate certificate',
        thirtyDays1Rouble: '30 days subscription for 1 ₽',
        support: 'Support',
        ourOperators: 'Our operators are 24/7 online',
        readyToHelp: 'We are always ready to help you.',
        openChat: 'Open chat',
        FAQ: 'FAQ',
        watchFilms: 'Watch films, TV series and cartoons withous ads',
        downloadIn: 'Download in',
        availableIn: 'Available in',
        watchOn: 'Watch on',
        allDevices: 'All devices',
        LLC: 'LLC «ivi.ru»',
        onlineCinema:
            'Online Cinema Ivi: good quality movies always bring real pleasure',
        everyDay:
            'Every day, millions of people search for movies online, and no one wants it to be complicated - and you are certainly no different! If so, Ivi is the ultimate source you need. Best movies in HD quality are literally one click away from you. We not only free you from the need to go to the cinema or study TV program guides – we also offer our users many more opportunities.',

        videoLibrary:
            "Ivy's video library is a constantly growing collection in RuNet, which has more than 60 thousand domestic and international movies and TV series available for viewing online. We were the first company in Russia to sign contracts with the largest Hollywood studios (Walt Disney, Warner Bros., Sony, 20th Century Fox, Universal, Paramount, MGM and others) and we constantly cooperate with the largest Russian companies and TV channels.",
        expand: 'Expand',
        hide: 'Hide',
        onlineCinemaIvi: 'Online Cinema Ivi is:',
        uniqueRecommendation:
            'the unique recommendation system that takes into account your preferences and suggests you to watch what you will definitely enjoy;',
        oneTouch:
            'one-touch watching on any of the devices connected to your Ivi account - from smartphones to TVs with Smart TV technology;',
        opportunityToDownload:
            'the opportunity to download licensed content to the memory of your mobile device and watch it without access to the Internet;',
        uniqueConditions:
            'unique conditions and benefits for the owners of the Ivi subscription, which makes watching comfortable and enjoyable;',
        advancedNotification:
            'advanced notification system: you will not miss the release of a new blockbuster - we will notify you when it’s released in a way suitable for you;',
        opportunityToAdd:
            'the opportunity to add movies to the "watch later" page to return to them when you have time;',
        content:
            'content that does not require installing video players or codecs to watch it;',
        watchingOnlineContent:
            'watching online content in good resolution without registration or SMS.',
        discoverOpportunity:
            'Discover the opportunity to watch movies online for free in excellent quality with Ivi!',
        thisWeek: 'this week',
        search: 'Search',
        watch30days: 'Watch 30 days for free',
        watchOnSmartTV: 'Watch on Smart TV',
        iviSubscription: 'Ivi Subscription',
        subscriptionCost: '189 roubles/month, automatic renewal',
        brandNewTVSeries: 'Brand new TV series',
        andMovies: 'and movies',
        weeklyUpdates: 'Weekly updates of the catalogue',
        moviesAndTVSeries: 'with movies and TV series from all over the world',
        moviesWithoutAds: 'Movies and TV series without ads',
        familyAccount: 'Family account on 5 devices',
        downloadMobile: 'Download on your mobile device',
        unsubscribe: 'Unsubscribe',
        anyMoment: 'any moment',
        subscribeAndWatch: 'Subscribe and watch',
        movie: 'movie',
        cartoon: 'cartoon',
        'tv-series': 'tv series',
        back: 'Back',
        notEnoughRatings: 'not enough ratings',
        iviRating: 'IVI rating:',
        fullFilmography: 'Full filmography',
        watch: 'Watch',
        trailer: 'Trailer',
        filmDetails: 'Film details',
        iviRatingNoColon: 'IVI rating',
        interestingPlot: 'Interesting plot',
        rate: 'Rate',
        ratings: 'ratings',
        watchLater: 'Watch later',
        watchMoviesOnline: 'Watch movies online',
        doYouLikeWatching:
            'Do you like watching movies online and spending a lot of time serfing websites looking for something interesting? It is worth checking ivi.ru - the films that we have collected will keep you engaged for a long time. The collection is constantly updated with new films and critically acclaimed masterpieces of the past! You can be a fan of action movies or teen dramas, the abundance of our catalog will make you forget about all other leisure activities and you will rewatch your favorite movies online again and again!',
        theSelectionOfFilms:
            "The selection of films is very big and varied, so everyone will find something interesting for themselves, whatever their tastes. Do you prefer only foreign films? We have plenty of them: these are the golden classics of Hollywood, soulful French comedies, hot Italian dramas, and loud Indian musical films. Or maybe you are a patriot and love Russian films? Well, we have a lot of them. What do you like more - good old classics or new films? No matter what your answer is, we've got it all, from early cinema to 2023 films.",
        inOurCatalog:
            'In our catalog you can find a movie of any genre. These are romantic films, and detectives, and action films, and westerns, and science fiction, and art house, and hilarious comedies, and films about war, and horror, and thrillers, and documentaries... In addition to full-length films, on the website there are also short films, as well as foreign and Russian TV series.',
        ifYouAreInterested:
            'If you are interested in watching iconic movies of a particular genre online, the category system will help you easily navigate and find, for example, the best dramas or the best animated films online.',
        doNotMiss:
            "Do not miss a great opportunity to watch movies online without registration, choosing only what you are really interested in, and when it is convenient for you. It's so easy and enjoyable!",
        ratingFrom: 'Rating from:',
        resetFilters: 'Reset filters',
        numberOfRatings: 'Number of ratings (thousands) from:',
        searchByDirector: 'Search by director',
        searchByActor: 'Search by actor',
        showMore: 'Show more',
        purchases: 'Purchases',
        browsingHistory: 'Browsing history',
        subscriptions: 'Subscriptions',
        activate: 'Activate',
        certificateActivation: 'Certificate activation',
        logInWithCode: 'Log in with code',
        purchaseMethods: 'Purchase methods',
        settings: 'Settings',
        help: 'Help',
        logInOrSignUp: 'Log in or sign up',
        otherSubscriptions: 'Other subscriptions',
        similar: 'Similar',
        alreadyWatched: 'Already watched, rate',
        dontLikeIt: `Don't like it`,
        similarMovies: { start: 'Similar movies to', end: '' },
        watchAllDevices: {
            title: { start: 'Watch', end: 'on all devices' },
            subtitle:
                'The application is available for download on iOS, Android, SmartTV and consoles',
            buttonLabel: 'Connect devices',
        },
        profession: {
            director: 'Director',
            actor: 'Actor',
            producer: 'Producer',
            cineatographer: 'Cineatographer',
            screenwriter: 'Screenwriter',
            composer: 'Composer',
        },
        actorsAndCreators: 'Actors and creators',
        showDetails: 'Show details',
        hideDetails: 'Hide details',
        freeMovies: 'Free movies',
        loadingMovie: 'Loading movie...',
        noMovie: 'No movie',
        toMovie: 'To movie',
        creators: 'Creators',
    },

    ru: {
        sortBy: 'Сортировать по',
        byRating: 'Рейтингу',
        byRatesAmount: 'Количеству оценок',
        byReleaseDate: 'Дате выхода',
        byAlphabet: 'Алфавиту',
        genres: 'Жанры',
        countries: 'Страны',
        years: 'Годы',
        more: 'Ещё',
        watchFilms: 'Смотрите фильмы, сериалы и мультфильмы без рекламы',
        thisWeek: 'за неделю',
        search: 'Поиск',
        watch30days: 'Смотреть 30 дней бесплатно',
        watchOnSmartTV: 'Смотрите на Smart TV',
        iviSubscription: 'Подписка Иви',
        subscriptionCost: 'Стоимость 189 ₽ в месяц, продление автоматическое',
        brandNewTVSeries: 'Новинки сериалов',
        andMovies: 'и фильмов',
        weeklyUpdates: 'Еженедельное пополнение каталога',
        moviesAndTVSeries: 'фильмами и сериалами со всего мира',
        moviesWithoutAds: 'Фильмы и сериалы без рекламы',
        familyAccount: 'Семейный аккаунт на 5 устройствах',
        downloadMobile: 'Загрузка на мобильные устройства',
        unsubscribe: 'Отключить можно',
        anyMoment: 'в любой момент',
        subscribeAndWatch: 'Смотреть по подписке',
        movie: 'фильм',
        cartoon: 'мультфильм',
        'tv-series': 'сериал',
        back: 'Назад',
        notEnoughRatings: 'недостаточно оценок',
        iviRating: 'Рейтинг Иви:',
        fullFilmography: 'Полная фильмография',
        watch: 'Смотреть',

        trailer: 'Трейлер',
        filmDetails: 'Детали о фильме',
        iviRatingNoColon: 'Рейтинг Иви',
        interestingPlot: 'Интересный сюжет',
        rate: 'Оценить',
        ratings: 'Оценок',
        watchLater: 'Смотреть позже',
        watchMoviesOnline: 'Фильмы смотреть онлайн',
        doYouLikeWatching:
            'Вы любите смотреть фильмы онлайн и проводите много времени, прочесывая сайты в поисках чего-нибудь интересного? Стоит задержаться на ivi.ru – фильмов, которые собраны у нас, вам хватит надолго. Коллекция постоянно пополняется как новыми фильмами, так и признанными шедеврами прошлых лет! Независимо от того, кто вы – любитель энергичных боевиков или поклонница молодежных сериалов, изобилие нашего каталога заставит вас забыть обо всех других способах проведения досуга, и вы будете пересматривать любимые фильмы онлайн снова и снова!',
        theSelectionOfFilms:
            'Выбор фильмов очень широк и многообразен, так что каждый найдет для себя что-то интересное, каким бы ни были его вкусы. Предпочитаете картины исключительно зарубежного производства? У нас их предостаточно: это и золотая классика Голливуда, и душевные французские комедии, и темпераментные итальянские драмы, и шумные индийские музыкальные фильмы. А может, вы патриот и любите российские фильмы? Что ж, и таких фильмов у нас немало. Что вам больше по вкусу – добрая старая классика или новинки кинопроката? Неважно, каким будет ваш ответ – у нас есть все, как картины эпохи зарождения кинематографа, так и фильмы 2023 года.',
        inOurCatalog:
            'В нашем каталоге вы найдете любые жанры. Это и фильмы про любовь, и детективы, и боевики, и вестерны, и фантастика, и арт-хаус, и уморительные комедии, и фильмы про войну, и ужасы, и триллеры, и документалистика... Кроме «полного метра» на сайте представлены также короткометражные фильмы, а также иностранные и русские сериалы.',
        ifYouAreInterested:
            'Если вас интересуют самые знаковые фильмы онлайн в том или ином жанре, система рубрикации поможет вам без труда сориентироваться и найти, например, лучшие драмы или лучший анимационный фильм онлайн.',
        doNotMiss:
            'Не упустите замечательную возможность смотреть фильмы онлайн без регистрации, выбирая только то, что вам действительно интересно, и тогда, когда вам это удобно. Ведь это так просто и приятно!',
        ratingFrom: 'Рейтинг от:',
        resetFilters: 'Сбросить фильтры',
        numberOfRatings: 'Количество оценок (тыс.) от:',
        searchByDirector: 'Поиск по режиссеру',
        searchByActor: 'Поиск по актеру',
        showMore: 'Показать еще',
        logInOrSignUp: 'Войти или зарегистрироваться',
        otherSubscriptions: 'Другие подписки',
        similar: 'Похожие',
        alreadyWatched: 'Уже смотрел, оценить',
        dontLikeIt: 'Не нравится такое',
        similarMovies: { start: 'С фильмом', end: 'смотрят' },
        watchAllDevices: {
            title: { start: 'Cмотреть', end: 'на всех устройствах' },
            subtitle:
                'Приложение доступно для скачивания на iOS, Android, SmartTV и приставках',
            buttonLabel: 'Подключить устройства',
        },
        profession: {
            director: 'Режиссер',
            actor: 'Актер',
            producer: 'Продюсер',
            cineatographer: 'Оператор',
            screenwriter: 'Сценарист',
            composer: 'Композитор',
        },
        actorsAndCreators: 'Актеры и создатели',
        showDetails: 'Детали о фильме',
        hideDetails: 'Свернуть детали',
        freeMovies: 'Бесплатные фильмы',
        loadingMovie: 'Загрузка фильма...',
        noMovie: 'Нет фильма',
        toMovie: 'К фильму',
        creators: 'Создатели',
    },
}

export const I18nContext = createContext<any>({
    language: 'ru',
    setLanguage: () => {},
    toggleLanguage: () => {},
    i18n: i18n,
})

export const useI18nContext = () => useContext(I18nContext)


export const I18nProvider = ({ children }: any) => {
    const [language, setLanguage] = useState<any>('ru')

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'ru' : 'en')
    }

    return (
        <I18nContext.Provider
            value={{ language, setLanguage, toggleLanguage, i18n }}
        >
            {children}
        </I18nContext.Provider>
    )
}
