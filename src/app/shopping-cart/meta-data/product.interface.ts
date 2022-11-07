export interface IProductCard {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: IProductRating,
    inStock: boolean,
    qty: number,

}
export interface IProductRating {
    rate: number
    count: number
}
export enum ICategory {
    MEN = "MEN",
    WOMEN = "WOMEN",
    JEWELRY = "JEWELRY"

}