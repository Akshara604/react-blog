import "./Post.css";
import {Link} from "react-router-dom"; 
import Posts from "../posts/Posts";

export default function Post({post}) { //post prop from Posts.jsx
  // const PF = "http://localhost:5000/images/";
  return (
  <div className="post">
  {post.photo &&(
    <img
     className="postImg"
     src="https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    //  {PF + post.photo}
     alt="postPhoto" />
  )}
    
     <div className="postInfo">
        <div className="postCategs">
          {post.categories.map((c)=> (
            <span className="postCateg">{c.name}</span>
          ))}
        </div>
        {/* <Link to={`/post/${post._id}`}></Link> */}
        <span className="postTitle">
        <Link className="link" to={`/post/${post._id}`}>{post.title}</Link>
        </span>
        <hr />
        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
     </div>
     <p className="postDescrip">
         {post.descrip}
     </p>
  </div>);
}
