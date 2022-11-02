import './comments.scss';
import { BsPerson } from 'react-icons/bs';

const Comments = () => {
  return (
    <div className="comments">
      
      <div className="new-comment">
        <div className="profile-img">
                <div className="icon">
                  <BsPerson />
                </div>
        </div>
        <input type="text" placeholder="write a comment"/>
        <button>send</button>
      </div>
     
     <div className="comment">
        <div className="profile-img">
                <div className="icon">
                  <BsPerson />
                </div>
          </div>
          <div>
              <div>
                  <span>Jane Doe</span> 
              </div>
              <p>Qui animi ab ratione explicabo magnam! laceat voluptatum, quibusdam aliquam minima explicabo quasi nemo.</p>
              <span className="time"> 3 minutes ago </span>
          </div>
      </div>

      <div className="comment">
        <div className="profile-img">
                <div className="icon">
                  <BsPerson />
                </div>
          </div>
          <div className="content">
              <div>
                  <span>Brian Doe</span> 
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <span className="time"> 12 minutes ago </span>
          </div>
      </div>


    </div>
        
  )
}

export default Comments;
