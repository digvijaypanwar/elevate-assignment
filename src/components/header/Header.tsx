import { Carousel } from '../carousel/Carousel';
import { InfoLinks } from '../info-links/InfoLinks';
import { Navbar } from '../navbar/Navbar';
import './Header.scss';

export function Header() {
    return (
        <header className="header">
            <InfoLinks />
            <p className="title">eflyer</p>
            <Navbar />
            <Carousel />
            <button className="header-button">buy now</button>
        </header>
    );
}
