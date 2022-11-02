import { BsFillChatDotsFill, BsFillPersonPlusFill, BsPerson } from 'react-icons/bs'
import { FaGoodreads, FaInstagramSquare, FaPinterestSquare, FaTwitterSquare } from 'react-icons/fa';
import { MdPlace } from 'react-icons/md';
import Posts from '../../components/post/Posts';
import './profile.scss';

const Profile = () => {
  return (
    <div className="profile">
        <div className="profile-banner">
            <div className="profile-img">
              <div><BsPerson /></div>
            </div>
        </div>
    
        <div className="profile-info">
          <div className="info">
            <span className="name">Wanda Pierce</span>
            <span><MdPlace/>Holywoo</span>
          </div>
          <span>44 friends</span>
          <div className="sm-wrapper">
            <a href="http://instagram.com"><FaInstagramSquare/></a>
            <a href="http://twitter.com"><FaTwitterSquare/></a>
            <a href="http://pinterest.com"><FaPinterestSquare/></a>
            <a href="http://goodreads.com"><FaGoodreads/></a>
          </div>
          <div className="buttons">
            <button><BsFillPersonPlusFill/></button>
            <button><BsFillChatDotsFill/></button>
          </div>
        </div>
      <div className="post-wrapper">
        <Posts />
        <Posts />
        <Posts />
      </div>
    </div>
  )
}

export default Profile;