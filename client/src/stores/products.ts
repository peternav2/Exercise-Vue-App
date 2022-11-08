import data from '../data/products.json';

export interface Product {
    id: number 
    title: string
    description: string
    price: number
    discountPercentage: number
    rating: number
    stock: number
    brand: string
    category: string
    thumbnail: string
    images: string[]
}

export const getProducts = () => {
    return data.products as Product[]; // as Product[] is a type assertion
                                       // is it necessary?

}
export function getProduct(id: number) { //why dont we assert a type return?
    return getProducts().find(product => product.id === id);
}


