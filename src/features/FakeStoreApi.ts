import { Product } from './products/productsSlice';

const fakeStoreApiUrl = 'https://fakestoreapi.com';

export function fetchProducts() {
    return fetch(`${fakeStoreApiUrl}/products`)
        .then((res) => res.json() as Promise<Product[]>)
        .catch((_err) => [] as Product[]);
}

export function fetchCategories() {
    return fetch(`${fakeStoreApiUrl}/products/categories`)
        .then((res) => res.json() as Promise<string[]>)
        .catch((_err) => [] as string[]);
}
