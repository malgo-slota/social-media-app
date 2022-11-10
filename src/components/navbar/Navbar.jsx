import './navbar.scss';
import { BsMoonFill, 
         BsSearch, 
         BsPlusSquare, 
         BsPerson,
         BsBell,
         BsFillSunFill } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import { useState } from 'react';
import Links from './Links';
import Footer from '../leftSidebar/Footer';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';
import { AuthContext } from '../../context/authContext';


const Navbar = () => {

    const { currentUser } = useContext(AuthContext);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    isMenuOpen ? document.body.style.overflow="hidden" : document.body.style.overflow="visible";

    const {darkMode, toggleTheme} = useContext(DarkModeContext);

  return (
    <nav>
        <div className="left">
            <NavLink to="/"><span>so<small>_</small>social</span></NavLink>
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
            <div className="profile-img">
                <div>
                    <BsPerson/>
                </div>
                <span>{currentUser.name}</span>
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