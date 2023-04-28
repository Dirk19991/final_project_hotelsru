import React, { createContext, useState, ReactNode, useContext } from 'react'

export type Language = 'en' | 'ru'

export interface I18nContextType {
    language: Language
    setLanguage: (language: Language) => void
    toggleLanguage: () => void
    i18n: {
        [key in Language]: {
            sortBy: string
            byRating: string
            byRatesAmount: string
            byReleaseDate: string
            byAlphabet: string
            genres: string
            countries: string
            years: string
            aboutUs: string
            aboutCompany: string
            vacancies: string
            betaTestingProgram: string
            informationForPartners: string
            advertising: string
            userAgreement: string
            privacyPolicy: string
            compliance: string
            sections: string
            myIvi: string
            whatsNew: string
            movies: string
            tvSeries: string
            cartoons: string
            whatToWatch: string
            activateCertificate: string
            thirtyDays1Rouble: string
            support: string
            readyToHelp: string
            ourOperators: string
            openChat: string
            FAQ: string
            watchFilms: string
            downloadIn: string
            availableIn: string
            watchOn: string
            allDevices: string
            LLC: string
            onlineCinema: string
            everyDay: string
            videoLibrary: string
            expand: string
            hide: string
            onlineCinemaIvi: string
            uniqueRecommendation: string
            oneTouch: string
            opportunityToDownload: string
            uniqueConditions: string
            advancedNotification: string
            opportunityToAdd: string
            content: string
            watchingOnlineContent: string
            discoverOpportunity: string
            thisWeek: string
            search: string
            watch30days: string
            watchOnSmartTV: string
            iviSubscription: string
            subscriptionCost: string
            brandNewTVSeries: string
            andMovies: string
            weeklyUpdates: string
            moviesAndTVSeries: string
            moviesWithoutAds: string
            familyAccount: string
            downloadMobile: string
            unsubscribe: string
            anyMoment: string
            subscribeAndWatch: string
            catalog: string
            more: string
            movie: string
            cartoon: string
            'tv-series': string
        }
    }
}

const i18n: I18nContextType['i18n'] = {
    en: {
        sortBy: "Sort by",
        byRating: "Rating",
        byRatesAmount: "Amount of rates",
        byReleaseDate: "Release date",
        byAlphabet: "Alphabet",
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
        LLC: 'LLC «Ivi.ru»',
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
    },
    ru: {
        sortBy: "Сортировать по",
        byRating: "Рейтингу",
        byRatesAmount: "Количеству оценок",
        byReleaseDate: "Дате выхода",
        byAlphabet: "Алфавиту",
        genres: 'Жанры',
        countries: 'Страны',
        years: 'Годы',
        more: 'Ещё',
        catalog: 'Каталог',
        aboutUs: 'О нас',
        aboutCompany: 'О компании',
        vacancies: 'Вакансии',
        betaTestingProgram: 'Программа бета-тестирования',
        informationForPartners: 'Информация для партнёров',
        advertising: 'Размещение рекламы',
        userAgreement: 'Пользовательское соглашение',
        privacyPolicy: 'Политика конфиденциальности',
        compliance: 'Комплаенс',
        sections: 'Разделы',
        myIvi: 'Мой Иви',
        whatsNew: 'Что нового',
        movies: 'Фильмы',
        tvSeries: 'Сериалы',
        cartoons: 'Мультфильмы',
        whatToWatch: 'Что посмотреть',
        activateCertificate: 'Активировать сертификат',
        thirtyDays1Rouble: '30 дней подписки за 1 ₽',
        support: 'Служба поддержки',
        readyToHelp: 'Мы всегда готовы вам помочь.',
        ourOperators: 'Наши операторы онлайн 24/7',
        openChat: 'Написать в чате',
        FAQ: 'Ответы на вопросы',
        watchFilms: 'Смотрите фильмы, сериалы и мультфильмы без рекламы',
        downloadIn: 'Загрузить в',
        availableIn: 'Доступно в',
        watchOn: 'Смотрите на',
        allDevices: 'Все устройства',
        LLC: 'ООО «Иви.ру»',
        onlineCinema:
            'Онлайн-кинотеатр Иви: фильмы в хорошем качестве всегда приносят настоящее удовольствие',
        everyDay:
            'Каждый день миллионы людей ищут фильмы онлайн, и никто не хочет усложнять себе жизнь – и вы наверняка один из них! А раз так, то Иви – это именно тот ресурс, который вам нужен. От лучших кинолент в HD-качестве вас отделяет буквально один клик. Мы не просто освобождаем от необходимости идти в кинотеатр или изучать программу телепередач – у посетителей нашего ресурса гораздо больше возможностей.',
        videoLibrary:
            'Видеотека Иви – это постоянно пополняющаяся коллекция в рунете, которая насчитывает более 60 тысяч отечественного и зарубежного контента, доступного для просмотра онлайн. Мы первыми в России подписали контракты с крупнейшими голливудскими студиями (Walt Disney, Warner Bros., Sony, 20th Century Fox, Universal, Paramount, MGM и другими) и на постоянной основе сотрудничаем с крупнейшими российскими компаниями и телеканалами.',
        expand: 'Развернуть',
        hide: 'Скрыть',
        onlineCinemaIvi: 'Онлайн-кинотеатр ivi.ru – это:',
        uniqueRecommendation:
            'уникальная рекомендательная система, учитывающая ваши предпочтения и предлагающая посмотреть именно то, что точно придется вам по душе;',
        oneTouch:
            'просмотр в одно касание на любом из устройств, подключенном к вашему Иви-аккаунту – от смартфонов до телевизоров с технологией Smart TV;',
        opportunityToDownload:
            'возможность скачивать в память мобильного устройства лицензионный контент и смотреть его без доступа к Интернету;',

        uniqueConditions:
            'уникальные условия и преимущества для обладателей подписки Иви, делающей кинопросмотр комфортным и приятным;',
        advancedNotification:
            'удобная и продвинутая система уведомлений, вы не пропустите выход крутого обсуждаемого блокбастера – мы известим о появлении подходящим для вас способом;',
        opportunityToAdd:
            'возможность добавлять фильмы в «смотреть позже», чтобы вернуться к ним в свободное время;',
        content:
            'контент, для просмотра которого не требуется устанавливать видеоплееры или искать кодеки;',
        watchingOnlineContent:
            'просмотр онлайн контента хорошего разрешения без регистрации и смс.',
        discoverOpportunity:
            'Откройте для себя возможность смотреть фильмы онлайн бесплатно в отличном качестве с кинотеатром Иви!',
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
    },
}

export const I18nContext = createContext<I18nContextType>({
    language: 'ru',
    setLanguage: () => {},
    toggleLanguage: () => {},
    i18n: i18n,
})

export const useI18nContext = () => useContext(I18nContext)

interface I18nProviderProps {
    children: ReactNode
}

interface I18nProviderProps {
    children: ReactNode
}

// Create Provider component
export const I18nProvider = ({ children }: I18nProviderProps) => {
    const [language, setLanguage] = useState<Language>('ru')

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'ru' : 'en')
    }

    return (
        // Provide i18n context to all child components
        <I18nContext.Provider
            value={{ language, setLanguage, toggleLanguage, i18n }}
        >
            {children}
        </I18nContext.Provider>
    )
}
