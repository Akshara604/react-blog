import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import { Context } from '../../context/Context';
import "./NavBar.css"

export default function NavBar() {
  const {user,dispatch} = useContext(Context);
  // const PF = "http://localhost:5000/images/";

  const handleLogout = () =>{
    dispatch({type:"LOGOUT"});
  }
  return (
  <div className="NavBar">
    <div className='NavLeft'>
    <i className="fab fa-facebook Icon" ></i>
    <i className="fab fa-twitter-square Icon" ></i>
    <i className="fab fa-pinterest Icon" ></i>
    </div>
    <div className='NavCenter'>
    <ul className='NavList'>
        <li className='NavListItem'><Link className="link" to="/" >HOME</Link></li>
        <li className='NavListItem'><Link className="link" to="/" >ABOUT</Link></li>
        <li className='NavListItem'><Link className="link" to="/" >CONTACT</Link></li>
        <li className='NavListItem'><Link className="link" to="/write" >WRITE</Link></li>
        <li className='NavListItem' onClick={handleLogout}>{user && "LOGOUT"}</li> {/*remember this is react &&} */}
    </ul>
    </div>
    <div className='NavRight'>
    {user ? 
    (
      <Link to="/settings"><img className="ProfPic" src="https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="userprofilepic" /> </Link>
    ) : (
      <ul className='NavList'>
        <li className='NavListItem'>
          <Link className="link" to="/login">LOGIN</Link>
        </li>
        <li className='NavListItem'>
          <Link className="link" to="/register">REGISTER</Link>
        </li>
      </ul>
    )}
        <i className="fas fa-search searchIcon"></i>    
    </div>
  </div>);
}
