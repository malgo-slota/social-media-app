import './leftSidebar.scss';
import { BsPerson } from 'react-icons/bs';
import Footer from './Footer';
import Links from '../navbar/Links';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
      
const LeftSidebar = () => {

  const { currentUser } = useContext(AuthContext);

  return (
    <div className="left-sidebar">

      <div className="profile-short">
        <div className="profile-banner">
          <div className="profile-img">
            <div>
              <BsPerson/>
            </div>
            <span>{currentUser.name}</span>
          </div>
        </div>
      </div>
      <Links />
      <Footer />
    </div>
    
  )
}

export default LeftSidebar;