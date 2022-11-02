import './leftSidebar.scss';
import { BsPerson } from 'react-icons/bs';
import Footer from './Footer';
import Links from '../navbar/Links';
      
const LeftSidebar = () => {
  return (
    <div className="left-sidebar">

      <div className="profile-short">
        <div className="profile-banner">
          <div className="profile-img">
            <div>
              <BsPerson/>
            </div>
            <span>Joe</span>
          </div>
        </div>
      </div>
      <Links />
      <Footer />
    </div>
    
  )
}

export default LeftSidebar;