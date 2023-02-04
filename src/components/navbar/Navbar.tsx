import './Navbar.scss';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CategorySelect } from '../category-list/CategorySelect';
import { Search } from '../search/Search';
import { Langlist } from '../lang-list/LangList';
import { ProfileTools } from '../profile-tools/ProfileTools';
export function Navbar() {
    return (
        <div className="navbar">
            <GiHamburgerMenu color="white" size={36} />
            <CategorySelect />
            <Search />
            <Langlist />
            <ProfileTools />
        </div>
    );
}
