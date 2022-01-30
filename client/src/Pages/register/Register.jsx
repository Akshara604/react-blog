import "./register.css";
import {Link} from "react-router-dom"; 
import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
	e.preventDefault(); //to not refresh the page everytime it's clicked
	setError(false);
  try {
    
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        username,email,password
      });
	  res.data && window.location.replace("/login")
  } catch (error) {
      setError(true);
  }
  }
  return (
  <div className="register">
    <form className="registerForm" onSubmit={handleSubmit}>
    <span className="registerTitle">Register</span>
        <label>Username</label>
        <input type="text" 
              className="registerInput" 
              placeholder="Enter your username.."
              onChange={e => setUsername(e.target.value)} /> {/*e is event*/}
        <label>Email</label>
        <input type="email" className="registerInput" 
              placeholder="Enter your email.." onChange={e => setEmail(e.target.value)}/>
        <label>Password</label>
        <input type="password" className="registerInput" 
          placeholder="Enter your password.." onChange={e => setPassword(e.target.value)}/>
        <button className="registerButton" type="submit">Register</button>
    </form>
    <button className="registerLoginButton"><Link className="link" to="/login">Login</Link></button>
	{error && <span>Something went wrong!</span> }
  </div>);
}