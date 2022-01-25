import "./settings.css";
import SideBar from "../../Components/SideBar/SideBar"

export default function Settings() {
  return (
  <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Account</span>
            </div>
            <form className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsPP">
                    <img src="https://images.pexels.com/photos/315998/pexels-photo-315998.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                        alt="profilepic" />
                    <label htmlFor="fileInput">
                            <i className=" settingsPPIcon fas fa-user-circle"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}}/>
                </div>
                <label>Username</label>
                <input type="text" placeholder="Akshara" />
                <label>Email</label>
                <input type="email" placeholder="akshara@gmail.com" />
                <label>Password</label>
                <input type="password" />
                <button className="settingsSubmit">Update</button>
            </form>
        </div>
        <SideBar />
  </div>);
}
