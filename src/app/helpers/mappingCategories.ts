import { Category } from "../models/category.models";
import { v4 as uuid } from 'uuid';

export function mappingCategories(data: string[]): Category[] {
    let categorias: Category[] = [];

    data.forEach(data => {
        categorias.push({
            id: uuid(),
            title: data
        });
    });

    return categorias;
}