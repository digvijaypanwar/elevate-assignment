import { useEffect } from 'react';
import { Counter } from './features/counter/Counter';
import { getProductsAsync } from './features/products/productsSlice';
import './App.css';
import { useAppDispatch } from './app/hooks';
import { getCategoriesAsync } from './features/categorySlice';
import { Products } from './features/products/Products';
import { Header } from './components/header/Header';

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getProductsAsync());
        dispatch(getCategoriesAsync());
    }, [dispatch]);

    return (
        <div className="app">
            <Header />
            <Products />
        </div>
    );
}

export default App;
