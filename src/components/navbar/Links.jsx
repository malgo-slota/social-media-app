import './links.scss';
import { FcTemplate,
        FcSettings,
        FcCalendar,
        FcLike,
        FcGlobe,
        FcSms,
        FcBookmark,
        FcContacts,
        } from 'react-icons/fc';

const Links = () => {
  return (
        <div className="container">
            <span>
                <FcTemplate />Feed
            </span>
            <span> 
                <FcContacts />Friends
            </span>
            <span>
                <FcCalendar />Events
            </span>
            <span>
                <FcGlobe />News
            </span>
            <span>
                <FcLike />Liked posts
            </span>
            <span>
                <FcBookmark />Saved posts
            </span>
            <span>
                <FcSms />Messages
            </span>
            <span>
                <FcSettings />Settings
            </span>
        </div>
  )
}

export default Links;
