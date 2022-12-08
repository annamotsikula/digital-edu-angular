export interface IProduct {
    id: number,
    title: string,
    price: number,
    discountPercentage: number,
    description: string,
    category: string,
    images: string[],
    rating: number,
    stock: number,
    thumbnail: string,
    brand: string,
    oldPrice?: number

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

export interface IProductBaseReponse {
    limit: number,
    total: number,
    skip: number,
    products: IProduct[]
}

export interface IAddProduct { 
    id: string
}

export interface IDeletedProduct extends IProduct {
    isDeleted: boolean,
    deletedOn: string
}