import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProducts } from '../FakeStoreApi';
import { RootState } from '../../app/store';
import { AsyncStatuses, AsyncStatusesType } from '../../utils/status';
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
    status: AsyncStatusesType;
    search: string;
}

const initialState: ProductsState = {
    products: [],
    status: AsyncStatuses.IDLE,
    search: '',
};

export const getProductsAsync = createAsyncThunk(
    'products/fetchProducts',
    async (category: string, _thunkApi) => {
        return await fetchProducts(category);
    }
);

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
    },
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

export const { setSearch } = productsSlice.actions;

export default productsSlice.reducer;

//selectors
export const selectProducts = (state: RootState) => state.products;
