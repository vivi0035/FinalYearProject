import { useContext, useEffect, useState } from 'react';
import './leftBar.scss'
import { AuthContext } from "../../context/AuthContext";
import { Link } from 'react-router-dom';
import axios from 'axios';

export const LeftBar = () => {

  const { user } = useContext(AuthContext);
  const [friends, setFriends] = useState([]);

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get("/users/friends/" + user._id);
        setFriends(friendList.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [user._id]);

  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
       
          <div className="user">
          <Link to={`/profilepage/${user.username}`} >
            <img
              src={user.img || PF + "person/noAvatar.png"}
              alt=""
            />
            </Link>
            {user.username}
            <span>{user.role==="Student Leader" ? "[Leader]" : "[Member]"}</span>
          </div>
          <div className="item">
            <span style={{color:"gray"}}>{user.about}</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>My Community</span>
          <div className="item">
          <div className="user">
            <span>Network Design</span>
          </div>
          </div>
          <div className="item">
          <div className="user">
            <span>Signal Processing</span>
          </div>
          </div>
          <div className="item">
            <span>Electronics</span>
          </div>
        </div>
        <hr />
        
        <div className="menu">
          <span>My Friends</span>
          <div className="item">
          <ul className="sidebarFriendList">
          {friends.map((friend) => (
            <li className="sidebarFriend">
            <img 
            className="sidebarFriendImg" 
            src={friend.img
            ? friend.img
            : PF + "person/noAvatar.png"
            } alt="" />
            <span className="sidebarFriendName">{friend.username}</span>
            </li>
          ))}
          </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LeftBar