import React from 'react';
import {Link} from 'react-router-dom';
import "./NavBar.css"

export default function NavBar() {
  const user = false;
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
        <li className='NavListItem'>{user && "LOGOUT"}</li> {/*remember this is react &&} */}
    </ul>
    </div>
    <div className='NavRight'>
    {user ? (
      <img className="ProfPic" src="https://images.pexels.com/photos/315998/pexels-photo-315998.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
        alt="userprofilepic" />
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
