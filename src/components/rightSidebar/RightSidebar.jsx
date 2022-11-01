import './rightSidebar.scss';
import FriendsSuggestions from './FriendsSuggestions';
import Events from './Events';
import News from './News';
import Activity from './Activity';
import FriendsOnline from './FriendsOnline';

const RightSidebar = () => {
  return (
    <div className="right-sidebar">
      <FriendsSuggestions />
      <Events />
      <News />
      <Activity />
      <FriendsOnline />
    </div>     
  )
}

export default RightSidebar;