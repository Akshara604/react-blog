import { useEffect, useState , useContext} from "react";
import { Link, useLocation } from "react-router-dom";
import "./singlePost.css";
import axios from "axios";
import { Context } from "../../context/Context";

//ERROR: JUSTIFY CONTENT SPACE BETWEEN IS NOT APPLIED CHECK LATER
export default function SinglePost() {
    const location = useLocation();
    const path = location.pathname.split("/")[2]; //Split("/") splits the string as before and after '/'
    const [post,setPost] = useState({}); //{} empty object
    // const PF = "http://localhost:5000/images/";
    const {user} = useContext(Context);
    const [title,setTitle] = useState("");
    const [descrip,setDescrip] = useState("");
    const [updateMode,setUpdateMode] = useState(false);
 

    useEffect(() =>{
        const getPost = async() =>{
            const response = await axios.get("http://localhost:5000/api/posts/"+path);
            setPost(response.data);
            setTitle(response.data.title);
            setDescrip(response.data.descrip);
        }
        getPost();
    }, [path]) //[path] is equivalent to "Whenever the path changes do this"

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:5000/api/posts/${post._id}`, {data:{username: user.username}});
            window.location.replace("/");
        } catch (error) {
            
        } 
    }

    const handleUpdate = async () =>{
        try {
            await axios.put(`http://localhost:5000/api/posts/${post._id}`, 
          {username: user.username, title:title, descrip:descrip}  );
            // window.location.reload();
            setUpdateMode(false);
        } catch (error) {
            
        } 
    }
  return (
  <div className="singlePost">
        <div className="singlePostWrapper">
        {post.photo && 
            <img className="singlePostImg"
                src="https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                // {PF + post.photo}
                alt="postImage" />
        }
        {updateMode ? 
        <input 
            type="text" 
            value={title} 
            className="singlePostTitleInput" 
            autoFocus
            onChange={(e) => setTitle(e.target.value)}  /> : (
            
            <h1 className="singlePostTitle">
                {title}
                {post.username === user?.username && (
                    <div className="singlePostEdit">
                    <i className="singlePostIcon far fa-edit" onClick={()=> setUpdateMode(true)}></i>
                    <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
                </div>
                )} 
            </h1>
        )

        }

        <div className="singlePostInfo">
                <span className="singlePostAuthor">Author:
                    <Link to={`/?user=${post.username}`} className="link"><b>{post.username}</b></Link> 
                </span>
                <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
            </div>
            {
                updateMode ? 
                <textarea className="singlePostDescripInput" 
                          value={descrip} 
                          onChange={(e) => setDescrip(e.target.value)} 
                          autoFocus /> : (
                    <p className="singlePostDescrip">
                        {descrip}
                    </p>
                )
            }
            {updateMode && (
                <button className="singlePostButton" onClick={handleUpdate}>Update</button>  
            )}
        </div>
  </div>);
}
