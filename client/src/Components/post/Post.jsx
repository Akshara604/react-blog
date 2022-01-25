import "./Post.css";
import {Link} from "react-router-dom"; 

export default function Post() {
  return (
  <div className="post">
    <img
     className="postImg"
     src="https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
     alt="trees" />
     <div className="postInfo">
        <div className="postCategs">
            <span className="postCateg">Music</span>
            <span className="postCateg">Life</span>
        </div>
        <span className="postTitle">
        <Link className="link" to="/post/:postId">Esse commodo commodo eiusmod laboris.</Link>
        </span>
        <hr />
        <span className="postDate">1 hr ago</span>
     </div>
     <p className="postDescrip">
         Dolor laboris tempor adipisicing tempor amet deserunt. 
         Incididunt do sunt deserunt anim. 
         Nostrud ut consectetur aliqua voluptate pariatur consequat excepteur id ut ipsum ut excepteur minim. 
         Pariatur reprehenderit amet qui consequat qui commodo consectetur.
     </p>
  </div>);
}
