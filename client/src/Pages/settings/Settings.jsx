import "./settings.css";
import SideBar from "../../Components/SideBar/SideBar"
import { useContext ,useState} from "react";
import { Context } from "../../context/Context";
import axios from "axios";

export default function Settings() {
    const {user, dispatch} = useContext(Context);
    const [file,setFile] = useState(null);
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [success,setSuccess] = useState(false);
    // const PF = "http://localhost:5000/images/"

    const handleSubmit = async(e) =>{
        e.preventDefault();
        dispatch({type:"UPDATE_START"});
        const updatedUser ={
          userId: user._id,
          username, email, password //username:username so we just give username
        }
        if(file){
          const data = new FormData();
          const filename = Date.now() + file.name; //to prevent user from uploading different image with same name
          data.append("name",filename);
          data.append("file",file);
          // updatedUser.profilePic = filename;
          try {
            await axios.post("http://localpost:5000/api/upload" ,data)
          } catch (error) {  }
        }
        try {
           const res = await axios.put("http://localhost:5000/api/users/" + user._id, updatedUser);
           setSuccess(true);
           dispatch({type:"UPDATE_SUCCESS", payload : res.data});
        } catch (error) {
           dispatch({type:"UPDATE_FAILURE"});
          } 
      }
  return (
  <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Account</span>
            </div>
            <form className="settingsForm" onSubmit={handleSubmit}>
                <label>Profile Picture</label>
                <div className="settingsPP">
                    <img src="https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    // {file ? URL.createObjectURL(file) :PF + user.profilePic} 
                        alt="profilepic" />
                    <label htmlFor="fileInput">
                            <i className=" settingsPPIcon fas fa-user-circle"></i>
                    </label>
                    <input type="file" 
                           id="fileInput" 
                           style={{display:"none"}}
                           onChange={(e) =>setFile(e.target.files[0])}
                    />
                </div>
                <label>Username</label>
                <input type="text" placeholder={user.username} onChange={(e) => setUsername(e.target.value)} />
                <label>Email</label>
                <input type="email" placeholder={user.email} onChange={(e) => setEmail(e.target.value)}/>
                <label>Password</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)}/>
                <button className="settingsSubmit" type="submit">Update</button>
                {success && <span style={{color:"green"}}>Profile has been updated...</span>}
            </form>
        </div>
        <SideBar />
  </div>);
}
