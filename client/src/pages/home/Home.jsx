import LeftBar from "../../components/leftBar/LeftBar"
import Navbar from "../../components/navbar/Navbar"
import RightBar from "../../components/rightBar/RightBar"
import Posts from "../../components/posts/Posts"
import "./home.scss"
import Share from "../../components/share/Share"
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

const Home = () => {

  const { user } = useContext(AuthContext);

  return (
    <div className="home">
    <Navbar/>
    <div style={{ display: "flex" }}>
    <LeftBar/>
    <div style={{ flex: 6}}>
    {user.role==="Student Leader" ? <Share/> : null}
    <Posts />
    </div>
    <RightBar/>
    </div>
    </div>

  )
}

export default Home
