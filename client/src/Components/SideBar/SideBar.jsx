import "./SideBar.css";
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function SideBar() {

    const [categs,setCategs] = useState([])

    useEffect(() =>{
        const getCategs = async()=> {
            const res = await axios.get("http://localhost:5000/api/categories");
            setCategs(res.data);
        }
        getCategs();
        }, [])
  return (
  <div className="sideBar">
        <div className="sideBarItem">
            <span className="sideBarTitle">ABOUT ME </span><br/>
            <img className="sideBarImg"
            src="https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="laptop"/>
            <p>
                loremAd nisi non ex laborum. 
                Aliquip exercitation tempor qui incididunt aliquip et pariatur e
            </p>
        </div>
        <div className="sideBarItem">
        <span className="sideBarTitle">CATEGORIES</span>
        <ul className="sideBarList">
        {categs.map((c) =>(
            <Link to={`/?categ=${c.name}`} className="link"><li className="sideBarListItem">{c.name}</li></Link>   
        ))}  
        </ul>
        </div>
        <div className="sideBarItem">
            <span className="sideBarTitle">FOLLOW US AT: </span>
            <div className="sideBarSocial">
            <i className="fab fa-facebook sideBarIcon" ></i>
            <i className="fab fa-twitter-square sideBarIcon" ></i>
            <i className="fab fa-pinterest sideBarIcon" ></i>
            </div>
            
        </div>
  </div>);
}
