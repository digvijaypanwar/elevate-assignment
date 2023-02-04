import './ProfileTools.scss';
import { BsCartFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
export function ProfileTools() {
    return (
        <div className="profile-tools">
            <div className="profile-tool">
                <BsCartFill size={12} />
                <p className="tool-text">CART</p>
            </div>
            <div className="profile-tool">
                <FaUser size={12} />
                <p className="tool-text">CART</p>
            </div>
        </div>
    );
}
