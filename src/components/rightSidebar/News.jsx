import './rightSidebar.scss';

const News = () => {
  return (
    <div className="container">
        <span>Today's news</span>
        <div className="news">
          <div className="news-img"></div>
          <div>
            <p>Something very good just happend</p>
            <div> 
              <span>2 days ago</span>
              <span> • </span>
              <span>politics</span>
            </div>
          </div>  
        </div>

        <div className="news">
          <div className="news-img"></div>
          <div>
            <p>Another good news!</p>
            <div> 
              <span>1 day ago</span>
              <span> • </span>
              <span>enviroment</span>
            </div>
          </div>  
        </div>

      </div>
  )
}

export default News;