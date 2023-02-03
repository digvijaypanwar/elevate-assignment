import { useAppSelector } from '../../app/hooks';
import { ProductCard } from '../../components/product-card/ProductCard';
import { selectProducts } from './productsSlice';
import './Products.scss';

export function Products() {
    const products = useAppSelector(selectProducts);

    return (
        <div className="products-container">
            <h3 className="title">SomeTitle</h3>
            <div className="products-grid">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
