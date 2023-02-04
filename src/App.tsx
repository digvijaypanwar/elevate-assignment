import { useEffect } from 'react';
import { Counter } from './features/counter/Counter';
import { getProductsAsync } from './features/products/productsSlice';
import './App.css';
import '/node_modules/flag-icons/css/flag-icons.min.css';

import { useAppDispatch, useAppSelector } from './app/hooks';
import {
    getCategoriesAsync,
    selectCurrentCategory,
} from './features/categorySlice';
import { Products } from './features/products/Products';
import { Header } from './components/header/Header';

function App() {
    const dispatch = useAppDispatch();
    const currentCategory = useAppSelector(selectCurrentCategory);

    useEffect(() => {
        dispatch(getProductsAsync(currentCategory));
        dispatch(getCategoriesAsync());
    }, [dispatch, currentCategory]);

    return (
        <div className="app">
            <Header />
            <Products />
        </div>
    );
}

export default App;
