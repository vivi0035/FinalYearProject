import LeftBar from "../../components/leftBar/LeftBar"
import Navbar from "../../components/navbar/Navbar"
import Posts from "../../components/posts/Posts"
import RightBar from "../../components/rightBar/RightBar"
import "./profile.scss"
import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

const Profile = ({post}) => {

  const { user, dispatch } = useContext(AuthContext);
  
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user2,setUser2] = useState({})

  const username = useParams().username;
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${username}`);
      setUser2(res.data)
    };
    fetchUser();
  }, [username]);


  return (
    <div>
    <Navbar/>
    <div style={{ display: "flex" }}>
    <LeftBar/>
    <div className="profile" style={{ flex: 6}}>
      <div className="images">
        <img
        src= {user2.coverPicture || PF + "person/noCover.png"}
          alt=""
          className="cover"
        />
        <img
          src={user2.img || PF + "person/noAvatar.png"}
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="center">
            <span>{user2.name ? user2.name : user2.username}</span>
            <div className="info">
            {user2.about}
            </div>
            <div className="info">
            {user2.username === user.username ? <button>Edit Profile</button> : null}
            </div>
          </div>
        </div>
      </div>
    <Posts username={username}/>
      </div>
      
      <RightBar user={user}/>
      </div>
    </div>
  );
}

export default Profile
