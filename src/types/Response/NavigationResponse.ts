interface Subcategory {
    id: number
    nameRu?: string
    year?: string
    nameEn?: string
    link: string
}

interface Category {
    genre: Subcategory[]
    country: Subcategory[]
    year: Subcategory[]
    selection: Subcategory[]
}

export interface INavigation {
    movies_categories?: Category
    series_categories?: Category
    animation_categories?: Category
}
