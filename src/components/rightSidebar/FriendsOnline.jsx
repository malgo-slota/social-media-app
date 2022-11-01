import './rightSidebar.scss';
import { BsPerson } from 'react-icons/bs';

const FriendsOnline = () => {
  return (
   <div className="container">
        <span>Friends online</span>
        <div className="friend">
          <div className="profile">
              <div>
                    <BsPerson/>
              </div>
              <div className="green-dot"></div>
          </div>
          <span>Kelsey Jannings</span>
        </div>
        <div className="friend">
          <div className="profile">
              <div>
                    <BsPerson/>
              </div>
              <div className="green-dot"></div>
          </div>
          <span>Michael Morgan</span>
        </div>
        <div className="friend">
          <div className="profile">
              <div>
                    <BsPerson/>
              </div>
              <div className="green-dot"></div>
          </div>
          <span>Margo Martindale</span>
        </div>
        <div className="friend">
          <div className="profile">
              <div>
                    <BsPerson/>
              </div>
              <div className="green-dot"></div>
          </div>
          <span>Courtney Portnoy</span>
        </div>
        <div className="friend">
          <div className="profile">
              <div>
                    <BsPerson/>
              </div>
              <div className="green-dot"></div>
          </div>
          <span>Wanda Pierce</span>
        </div>
    </div>
  )
}

export default FriendsOnline;