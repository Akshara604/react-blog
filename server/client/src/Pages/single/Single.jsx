import SideBar from "../../Components/SideBar/SideBar";
import SinglePost from "../../Components/singlePost/SinglePost";
import "./Single.css";

export default function Single() {
  return (
  <div className="single">
    {/* post */}
    <SinglePost />
    <SideBar />
  </div>);
}
