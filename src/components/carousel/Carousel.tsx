import './Carousel.scss';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
export function Carousel() {
    return (
        <div className="carousel-static">
            <div className="round left">
                <FiChevronLeft />
            </div>
            <p className="carousel-text">
                Get Start <br />
                your favriot shoping
            </p>
            <div className="round right">
                <FiChevronRight />
            </div>
        </div>
    );
}
