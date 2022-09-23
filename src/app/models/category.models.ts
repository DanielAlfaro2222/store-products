import { Product } from "./product.models";

export interface Category {
    title: string,
    products: Product[]
}