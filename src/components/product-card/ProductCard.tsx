import { Product } from '../../features/products/productsSlice';

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    const { title, price, image } = product;
    return (
        <div className="product-card">
            <div className="product-name">
                <h4 className="product-name-title">{title}</h4>
            </div>
            <div className="product-price">
                <p className="product-price-text">Price</p>
                <p className="product-price-currency">$</p>
                <p className="product-price-value">{price}</p>
            </div>
            <div className="product-image"></div>
        </div>
    );
}
