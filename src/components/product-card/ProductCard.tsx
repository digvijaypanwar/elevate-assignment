import { Product } from '../../features/products/productsSlice';
import './ProductCard.scss';
interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    const { title, price, image } = product;
    return (
        <div className="product-card-container">
            <div className="product-card">
                <div className="product-name" title={title}>
                    <p className="product-name-title">{title}</p>
                </div>
                <div className="product-price">
                    <p className="product-price-text">Price</p>
                    <p className="product-price-currency">$</p>
                    <p className="product-price-value">{price}</p>
                </div>
                <div className="product-image">
                    <img src={image} alt={title.substring(0, 10) + '...'} />
                </div>
            </div>
        </div>
    );
}
