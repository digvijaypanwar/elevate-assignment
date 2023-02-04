import { CategoryDefault } from '../utils/category.util';
import { Product } from './products/productsSlice';

const fakeStoreApiUrl = 'https://fakestoreapi.com';

export function fetchProducts(category = '') {
    const newCategory = category === CategoryDefault ? '' : category;
    const url = `${fakeStoreApiUrl}/products${
        newCategory ? `/category/${newCategory}` : ''
    }`;
    return fetch(url)
        .then((res) => res.json() as Promise<Product[]>)
        .catch((_err) => [] as Product[]);
}

export function fetchCategories() {
    return fetch(`${fakeStoreApiUrl}/products/categories`)
        .then((res) => res.json() as Promise<string[]>)
        .catch((_err) => [] as string[]);
}
