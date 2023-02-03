import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchCategories } from './FakeStoreApi';

export interface CategoryState {
    categories: string[];
    status: 'idle' | 'loading' | 'failed';
    searchCategories: string[];
}

const initialState: CategoryState = {
    categories: [],
    status: 'idle',
    searchCategories: [],
};

export const getCategoriesAsync = createAsyncThunk(
    'products/fetchCategories',
    async () => {
        return await fetchCategories();
    }
);

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        addSearchCategory: (state, action: PayloadAction<string>) => {
            if (state.searchCategories.indexOf(action.payload) === -1) {
                state.searchCategories.push(action.payload);
            }
        },
        removeSearchCategory: (state, action: PayloadAction<string>) => {
            if (state.searchCategories.indexOf(action.payload) !== -1) {
                state.searchCategories = state.searchCategories.filter(
                    (category) => category !== action.payload
                );
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCategoriesAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getCategoriesAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.categories = action.payload;
            })
            .addCase(getCategoriesAsync.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export const { addSearchCategory, removeSearchCategory } =
    categorySlice.actions;

export default categorySlice.reducer;
