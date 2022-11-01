
import CreatePost from '../../components/post/CreatePost';
import Posts from '../../components/post/Posts';
import './home.scss';

const Home = () => {
  
  return (
    <div className="home">
      <CreatePost />
      <Posts/>
      <Posts/>
      <Posts/>
      <Posts/>
      <Posts/>
      <Posts/>
    </div>
  )
}

export default Home;