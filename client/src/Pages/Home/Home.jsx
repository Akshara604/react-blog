import {useEffect, useState} from "react";
import "./home.css"
import Header from "../../Components/Header/Header";
import Posts from "../../Components/posts/Posts";
import SideBar from "../../Components/SideBar/SideBar";
import axios from "axios";

export default function Home() {

  const [posts, setPosts] = useState([]);
  useEffect(() =>{
    const fetchPosts = async () =>{
        const res= await axios.get("/api/posts");
        console.log(res);
    }
      fetchPosts();
   },[])
  return (
    <>
      <Header />
      <div className="home">
      <Posts />
      <SideBar />
      </div>
    </>);  
}

