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
                <form className="new-post">
                    <textarea/>
                    <div className="row">
                        <div>
                            <span><MdInsertEmoticon/></span>
                            <span><BiImageAdd/></span>
                        </div>
                        <button type="submit">Add a post</button>
                    </div> 
                </form>      
            )}
            
            {activeTab === "event" && (
                <form className="new-post">
                    <input type="text" placeholder="Title of an event"></input>
                    <textarea placeholder="Description of an event..."/>
                    <div className="row">
                        <div className="event-date">
                            <div>
                                <label>Day</label>
                                <input type="text" 
                                        placeholder='DD'
                                        maxLength="2"
                                        pattern="^(0?[1-9]|[12][0-9]|3[01])$"
                                        required>
                                </input>
                            </div>
                            <div>
                                <label>Month</label>
                                <input type="text" 
                                        placeholder='MM'
                                        maxLength="2"
                                        pattern="^(0?[1-9]|1[012])$"
                                        required>
                                </input>
                            </div>
                            <div>
                                <label>Year</label>
                                <input type="text" 
                                        placeholder='YYYY'
                                        maxLength="4"
                                        pattern="^(19|20)\d{2}$"
                                        required>
                                </input>
                            </div>
                        </div>
                        <button type="submit">Add an event</button>
                    </div> 
                </form>
             )}
        
        </div>
    </div>
  )
}

export default CreatePost;
