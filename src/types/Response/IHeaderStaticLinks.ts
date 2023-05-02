export interface IHeaderStaticLinks {
    movies_categories?: ISubMenuData
    series_categories: ISubMenuData
    animation_categories: ISubMenuData
}

export interface ISubMenuData {
    genre: IHeaderLink[]
    country: IHeaderLink[]
    year: IHeaderLink[]
    selection: IHeaderLink[]
}

export interface IHeaderLink {
    id: number
    nameRu?: string
    nameEn?: string
    year?: string
    link: string
}
