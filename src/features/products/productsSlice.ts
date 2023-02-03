import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from '../FakeStoreApi';
import { RootState, AppThunk } from '../../app/store';

export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}
export interface ProductsState {
    products: Product[];
    status: 'idle' | 'loading' | 'failed';
}

const initialState: ProductsState = {
    products: [],
    status: 'idle',
};

export const getProductsAsync = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        return await fetchProducts();
    }
);

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProductsAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getProductsAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.products = action.payload;
            })
            .addCase(getProductsAsync.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export default productsSlice.reducer;

//selectors
export const selectProducts = (state: RootState) => state.products.products;
