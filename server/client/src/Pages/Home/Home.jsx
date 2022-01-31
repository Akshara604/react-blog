import {useEffect, useState} from "react";
import "./home.css"
import Header from "../../Components/Header/Header";
import Posts from "../../Components/posts/Posts";
import SideBar from "../../Components/SideBar/SideBar";
import { useLocation } from "react-router-dom";
import { axiosInstance } from "../../config";

export default function Home() {

  const [posts, setPosts] = useState([]);
  const {search} = useLocation();

  
  useEffect(() =>{
    const fetchPosts = async () =>{
        const res= await axiosInstance.get("/posts" + search);
        setPosts(res.data);
    }
      fetchPosts();
   },[search]);
  return (
    <>
      <Header />
      <div className="home">
      <Posts posts={posts} />
      <SideBar />
      </div>
    </>);  
}

