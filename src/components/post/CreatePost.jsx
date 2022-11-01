import { useState } from 'react';
import { BiImageAdd } from 'react-icons/bi';
import { MdInsertEmoticon } from 'react-icons/md'
import './createPost.scss';

const CreatePost = () => {
    const [activeTab, setActiveTab] = useState("post");

  return (
    <div className="create-post">
        <div className="container">
            <div className="tabs">
                <button onClick={() => setActiveTab('post')}
                                className={activeTab === "post" ? 'active' : '' }>
                            create a post
                </button>
                <button onClick={() => setActiveTab('event')}
                                className={activeTab === "event" ? 'active' : '' }>
                            create an event
                </button>

            </div>
            {activeTab === "post" && (
                <div className="new-post">
                    <textarea/>
                    <div className="row">
                        <div>
                            <span><MdInsertEmoticon/></span>
                            <span><BiImageAdd/></span>
                        </div>
                        <button>Add a post</button>
                    </div> 
                </div>      
            )}
            
            {activeTab === "event" && (
                <div className="new-post">
                    <input type="text" placeholder="Title of an event"></input>
                    <textarea placeholder="Description of an event..."/>
                    <div className="row">
                        <input type="date"></input>
                        <button>Add an event</button>
                    </div> 
                </div>
             )}
        
        </div>
    </div>
  )
}

export default CreatePost;
