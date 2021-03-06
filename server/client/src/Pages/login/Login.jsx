import "./login.css";
import {Link} from "react-router-dom"; 
import { useContext, useRef } from "react";
import { Context } from "../../context/Context";
import { axiosInstance } from "../../config";

export default function Login() {

  const userRef = useRef();
  const passwordRef = useRef();

  const {dispatch, isFetching} = useContext(Context);
  const handleSubmit = async (e) => {
    e.preventDefault(); //to not refresh the page everytime it's clicked
    dispatch({type:"LOGIN_START"});
    try {
      const res = await axiosInstance.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({type:"LOGIN_SUCCESS", payload: res.data});
      // dispatch(LoginSuccess(res.data))
    } catch (error) {
      dispatch({type:"LOGIN_FAILURE"});
    }
  }
  
  return (
  <div className="login">
    <form className="loginForm" onSubmit={handleSubmit}>
    <span className="loginTitle">Login</span>
        <label>Username</label>
        <input type="text" className="loginInput" placeholder="Enter your username.." ref={userRef} />
        <label>Password</label>
        <input type="password" className="loginInput" placeholder="Enter your password.." ref={passwordRef}/>
        <button className="loginButton" type="submit" disabled={isFetching}>Login</button>
    </form>
    <button className="loginRegisterButton"><Link className="link" to="/register">Register</Link></button>
  </div>);
}
