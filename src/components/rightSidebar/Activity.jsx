import './rightSidebar.scss';
import { BsPerson } from 'react-icons/bs';

const Activity = () => {
  return (
    <div className="container">
        <span>Leatest activities</span>
        <div className="activity">
          <div className="profile">
              <div>
                    <BsPerson/>
              </div>
          </div>
          <div>
            <span>Jane Doe</span>
             <p>Added a post <span> • 3 minutes ago</span></p>
          </div>
        </div>

        <div className="activity">
          <div className="profile">
              <div>
                    <BsPerson/>
              </div>
          </div>
          <div>
            <span>Rebecca White</span>
            <p>Created an event<span> • 1 day ago</span></p>
          </div>
        </div>
      </div>
  )
}

export default Activity;