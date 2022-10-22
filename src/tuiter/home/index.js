import postsArray from '../post-list/posts.json';
import PostItem from "../post-list/post-item.js";
import "./index.css";

const Home = () => {
    return (
        <div className="list-group">
            {
                postsArray.map(item => <PostItem key={item.userName}  post={item}/>)
            }
        </div>
    )
}

export default Home;