import './navbar.scss';
import { BsHouseDoor,   
        BsMoonFill, 
        BsSearch, 
        BsPlusSquare, 
        BsPerson,
        BsBell } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';

const Navbar = () => {
  return (
    <nav>
        <div className="left">
            <span>so<small>_</small>social</span>
            <BsHouseDoor/>
            <BsMoonFill/>
        </div>

        <div className="middle">
            <input type="text" />
            <BsSearch/>
        </div>
        <div className="right">
            <BsPlusSquare/>
            <BsBell/>
            <FiMail/>
            <div className="profile">
                <div>
                    <BsPerson/>
                </div>
                <span>Joe</span>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;