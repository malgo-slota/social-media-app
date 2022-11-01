import './navbar.scss';
import { BsHouseDoor,   
        BsMoonFill, 
        BsSearch, 
        BsPlusSquare, 
        BsPerson,
        BsBell,
        BsFillSunFill } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import { useState } from 'react';
import Links from './Links';
import Footer from '../leftSidebar/Footer';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';


const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    isMenuOpen ? document.body.style.overflow="hidden" : document.body.style.overflow="visible";

    const {darkMode, toggleTheme} = useContext(DarkModeContext);

  return (
    <nav>
        <div className="left">
            <span>so<small>_</small>social</span>
            <BsHouseDoor/>
            {darkMode ? <BsFillSunFill onClick={toggleTheme}/> : <BsMoonFill onClick={toggleTheme}/>}
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
                    <div>
                        <hr/>
                        <Footer />
                    </div>
                </div>
            }
        </div>
    </nav>
  )
}

export default Navbar;