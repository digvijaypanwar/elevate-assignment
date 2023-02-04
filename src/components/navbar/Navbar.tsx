import './Navbar.scss';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CategorySelect } from '../category-list/CategorySelect';
import { Search } from '../search/Search';
import { Langlist } from '../lang-list/LangList';
import { ProfileTools } from '../profile-tools/ProfileTools';
export function Navbar() {
    return (
        <div className="navbar">
            <div className="ham-menu-icon">
                <GiHamburgerMenu />
            </div>
            <CategorySelect />
            <Search />
            <Langlist />
            <ProfileTools />
        </div>
    );
}
