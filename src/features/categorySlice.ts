import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchCategories } from './FakeStoreApi';
import { RootState } from '../app/store';
import { AsyncStatuses, AsyncStatusesType } from '../utils/status';
import { CategoryDefault } from '../utils/category.util';

export interface CategoryState {
    categories: string[];
    status: AsyncStatusesType;
    currentCategory: string;
}

const initialState: CategoryState = {
    categories: [],
    status: AsyncStatuses.IDLE,
    currentCategory: CategoryDefault,
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
        setCurrentCategory: (state, action: PayloadAction<string>) => {
            if (state.categories.indexOf(action.payload) !== -1) {
                state.currentCategory = action.payload;
            }
        },
        // removeSearchCategory: (state, action: PayloadAction<string>) => {
        //     if (state.searchCategories.indexOf(action.payload) !== -1) {
        //         state.searchCategories = state.searchCategories.filter(
        //             (category) => category !== action.payload
        //         );
        //     }
        // },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCategoriesAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getCategoriesAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.categories = [CategoryDefault, ...action.payload];
            })
            .addCase(getCategoriesAsync.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export const { setCurrentCategory } = categorySlice.actions;

export default categorySlice.reducer;

/** Selectors */
export const selectCategories = (state: RootState) => state.category.categories;
export const selectCurrentCategory = (state: RootState) =>
    state.category.currentCategory;
