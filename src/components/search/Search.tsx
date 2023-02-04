import { useState, useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useAppDispatch } from '../../app/hooks';
import { setSearch } from '../../features/products/productsSlice';
import './Search.scss';

export function Search() {
    const dispatch = useAppDispatch();
    const [input, setInput] = useState('');

    const handleSearch = () => {
        if (input !== '') {
            dispatch(setSearch(input));
            setInput('');
        }
    };

    useEffect(() => {
        return () => {
            dispatch(setSearch(''));
        };
    }, [dispatch]);

    return (
        <div className="search-container">
            <input
                id="item-search"
                type="text"
                placeholder="Search this blog"
                value={input}
                onChange={(e) => {
                    setInput(e.target.value);
                }}
                onKeyUp={(e) => {
                    if (e.key === 'Enter') {
                        handleSearch();
                    }
                }}
                required
            />

            <button
                title="search"
                className="search-icon"
                onClick={handleSearch}
            >
                <BsSearch />
            </button>
        </div>
    );
}
