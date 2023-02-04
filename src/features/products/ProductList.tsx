import { ProductCard } from '../../components/product-card/ProductCard';
import { Product } from './productsSlice';

interface ProductListProps {
    products: Product[];
}
export function ProductList({ products }: ProductListProps) {
    if (products.length === 0) {
        return <p>No products found</p>;
    }
    return (
        <div className="products-grid">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}
