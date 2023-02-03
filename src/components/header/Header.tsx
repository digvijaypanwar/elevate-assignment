import { InfoLinks } from '../info-links/InfoLinks';
import './Header.scss';

export function Header() {
    return (
        <header className="header">
            <InfoLinks />
        </header>
    );
}
