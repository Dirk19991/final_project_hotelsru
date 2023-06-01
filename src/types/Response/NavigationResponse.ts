export interface Subcategory {
    id: number
    nameRu?: string
    year?: string
    nameEn?: string
    link: string
}

export interface Category {
    genre: Subcategory[]
    country: Subcategory[]
    year: Subcategory[]
    selection: Subcategory[]
}

export default interface NavigationResponse {
    movies_categories?: Category
    series_categories?: Category
    animation_categories?: Category
}
