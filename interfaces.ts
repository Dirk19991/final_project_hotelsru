interface IviItem {
    id: number
    movie: boolean
    series: boolean
    nameRu: string | null
    nameEn: string | null
    description: string
    country: string | string[]
    director: string | string[]
    actors: string | string[]
    producer: string | string[]
    cinematographer: string | string[]
    screenwriter: string | string[]
    composer: string | string[]
    genres: string[]
    trailer?: string // опционально, если получится парсить ссылки на трейлеры
    similarMovies: number[] // тут id фильмов, которые на kinopoisk в разделе "Если вам понравился этот фильм",
    startYear: number // startYear и endYear одинаковы для фильмов
    endYear: number
    rating: number
    ratingCount: number
    imageUrl: string //  нужна только маленькая картинка, в API кинопоиска posterUrlPreview
    reviews: IviReview[]
    reviewCount: number
    duration: string // в минутах, либо в строке оставить "113 минут"
}

interface IviReview {
    author: string
    title: string
    text: string
}

interface IviData {
    data: IviItem[]
    meta: {
        resultCount: number
        // остальное для пагинации, не очень в этом разбираюсь
    }
}

// запросы:

// /movies - все фильмы. Фильтры по жанрам, странам, кол-ву оценок (можно задавать от и до), рейтингу. Сортировка по названию RU/EN, дате выхода,  количеству оценок, рейтингу. Максимальное количество возвращаемых фильмов может быть около 100

// /movies/{id} - получить данные по конкретному id фильма

// /movies/director/{name} - получить список фильмов по подстроке имени режиссера (будет поиск с автосаджестом, новый запрос после каждого введенного символа)
