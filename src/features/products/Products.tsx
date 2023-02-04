import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectProducts, setSearch } from './productsSlice';
import './Products.scss';
import { selectCurrentCategory } from '../categorySlice';
import { AsyncStatuses } from '../../utils/status';
import Spinner from '../../components/spinner/Spinner';
import { ProductList } from './ProductList';

export function Products() {
    const dispatch = useAppDispatch();
    const { products, status, search } = useAppSelector(selectProducts);
    const currentCategory = useAppSelector(selectCurrentCategory);

    const capitalize = (input: string) => {
        return input
            .split(' ')
            .map((word) =>
                word
                    .split('')
                    .map((l, i) => {
                        if (i === 0) {
                            return l.toUpperCase();
                        }
                        return l;
                    })
                    .join('')
            )
            .join(' ');
    };

    const getTitle = () => {
        if (search) {
            return `Search for "${search}" in ${capitalize(currentCategory)}`;
        }

        return capitalize(currentCategory);
    };

    const filterProducts = () => {
        if (search) {
            const pattern = search
                .split('')
                .map((x) => {
                    return `(?=.*${x})`;
                })
                .join('');
            const regex = new RegExp(`${pattern}`, 'g');
            return products.filter((product) => regex.test(product.title));
        }

        return products;
    };
    return (
        <div className="products-container">
            <div className="title-container">
                <p className={'title'}>{getTitle()}</p>
                {search && (
                    <button onClick={() => dispatch(setSearch(''))}>
                        Reset
                    </button>
                )}
            </div>

            {status === AsyncStatuses.LOADING && <Spinner />}
            {status === AsyncStatuses.FAILED && <p>No products found!</p>}
            {status === AsyncStatuses.IDLE && (
                <ProductList products={filterProducts()} />
            )}
        </div>
    );
}
