import { useContext, useState } from "react";
import "./write.css";
import {Context} from "../../context/Context"
import { axiosInstance } from "../../config";

export default function Write() {

  const [title,setTitle] = useState("");
  const [descrip,setDescrip] = useState("");
  const [file,setFile] = useState(null);
  const {user} = useContext(Context);

  const handleSubmit = async(e) =>{
    e.preventDefault();
    const newPost ={
      username: user.username,
      title,
      descrip,
    }
    if(file){
      const data = new FormData();
      const filename = Date.now() + file.name; //to prevent user from uploading different image with same name
      data.append("name",filename);
      data.append("file",file);
      newPost.photo = filename;
      try {
        await axiosInstance.post("/upload" ,data)
      } catch (error) {
        
      }
    }
    try {
      const res = await axiosInstance.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id); //to switch to single posts window
    } catch (error) {
      
    }
    
  }
  return (
  <div className="write">
  {file && (
    <img className="writeImg"
                src={URL.createObjectURL(file)}
                alt="post image" />
  )}

    <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
         {/*The plus icon opens the folder to insert file */}
           <label htmlFor="fileInput">
                <i className=" writeIcon fas fa-plus"></i>
            </label>
            <input type="file" id="fileInput" 
               style={{display:"none"}} onChange={(e)=> setFile(e.target.files[0])}/> {/*style to remove the choose button*/}
            <input type="text" placeholder="Title" 
              className="writeInput" autoFocus={true}  
              onChange={(e)=>setTitle(e.target.value)}/> {/*Autofocus true ensures that when u refresh the page the title gets focused and ready to type */}
        </div>
        <div className="writeFormGroup">
            <textarea placeholder="Tell your story..." type="text" 
              className="writeInput writeText" onChange={(e)=>setDescrip(e.target.value)}/>
        </div>
        <button className="writeSubmit" type="submit">Publish</button>
    </form>
  </div>);
}
