import { useState } from 'react';
import { BsPerson, BsBookmark, BsHeart } from 'react-icons/bs';
import './posts.scss';
import Comment from '../comments/Comments';

const Posts = () => {
  const [commentsOpen, setCommentsOpen] = useState(false);

  return (
    <div className="post">
      <div className="row">
            <div className="profile-img">
              <div className="icon">
                <BsPerson />
              </div>
              <div>
                <span>Jane Doe</span> 
                <span className="time"> 3 minutes ago </span>
              </div>
            </div>
            <span><BsBookmark/></span>
      </div>
      
      <div className="content">
        <img src="https://images.pexels.com/photos/3063478/pexels-photo-3063478.jpeg" alt="group of friends" />
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione ullam, sunt maxime esse odio modi consequuntur corrupti unde quia laboriosam rerum eveniet, suscipit, ipsa iusto beatae ducimus necessitatibus dicta ipsum!
        </div>
      </div>
      
      <div className="row">
        <span><BsHeart /> 3 likes</span>
        <span onClick={()=>setCommentsOpen(!commentsOpen)}>2 Comments</span>
      </div>

      {commentsOpen && <Comment />}
     
    </div>
  )
}

export default Posts;
