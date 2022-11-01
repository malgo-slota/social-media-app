import './navbar.scss';
import { BsHouseDoor,   
        BsMoonFill, 
        BsSearch, 
        BsPlusSquare, 
        BsPerson,
        BsBell } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import { useState } from 'react';
import Links from './Links';


const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    isMenuOpen ? document.body.style.overflow="hidden" : document.body.style.overflow="visible";

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
            <div className="hamburger" onClick={()=>setIsMenuOpen(!isMenuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            {isMenuOpen && 
                <div className="mobile-menu">
                    <Links />
                </div>
            }
        </div>
    </nav>
  )
}

export default Navbar;