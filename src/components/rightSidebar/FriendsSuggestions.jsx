import './rightSidebar.scss';
import { BsPerson } from 'react-icons/bs';

const FriendsSuggestions = () => {
  return (
    <div className="container">
        <span>Suggested friends</span>
        <div className="friend">
          <div className="profile-img">
              <div>
                    <BsPerson/>
              </div>
          </div>
          <span>Charley Witherspoon</span>
          <button>+</button>
        </div>
        <div className="friend">
          <div className="profile-img">
              <div>
                    <BsPerson/>
              </div>
          </div>
          <span>Diane Nguyen</span>
          <button>+</button>
        </div>
        <div className="friend">
          <div className="profile-img">
              <div>
                    <BsPerson/>
              </div>
          </div>
          <span>Todd Chavez</span>
          <button>+</button>
        </div>
      </div>
  )
}

export default FriendsSuggestions;
 