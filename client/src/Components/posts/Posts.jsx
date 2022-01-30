import Post from "../post/Post";
import "./posts.css";

export default function Posts({posts}) { //posts prop from Home.jsx (useState)
  return (
  <div className="posts">
        {posts.map((p)=>(
          <Post post={p}/>
        ))}
  
  </div>);
}
