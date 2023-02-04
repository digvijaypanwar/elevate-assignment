import './LangList.scss';
import { BiChevronDown } from 'react-icons/bi';
export function Langlist() {
    return (
        <div className="lang-list">
            <div className="flag">
                <span className="fi fi-gb"></span>
            </div>
            <div className="lang-value">English</div>
            <BiChevronDown />
        </div>
    );
}
