import NavBar from "./Components/NavBar/NavBar";
import Home from "./Pages/Home/Home";
import Login from "./Pages/login/Login";
import Register from "./Pages/register/Register";
import Settings from "./Pages/settings/Settings";
import Single from "./Pages/single/Single";
import Write from "./Pages/write/Write";
import { Routes, Route, } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";


function App() {
  const {user} = useContext(Context);
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route  path="/register" element={user ? <Home /> :<Register />} />
        <Route  path="/login" element={user ? <Home /> :<Login />} />
        <Route  path="/write" element={user ? <Write /> : <Register />} />
        <Route  path="/settings" element={user ? <Settings /> : <Register />} />
        <Route  path="/post/:postId" element={<Single />} />
      </Routes>
    </>
  );
}

export default App;
