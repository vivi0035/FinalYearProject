import LeftBar from "../../components/leftBar/LeftBar"
import Navbar from "../../components/navbar/Navbar"
import RightBar from "../../components/rightBar/RightBar"
import Posts from "../../components/posts/Posts"
import "./communitySingle.scss"
import Share from "../../components/share/Share"
import Electronics from "../../img2/post.jpeg"
import { useState } from "react";
import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";



const CommunitySingle = () => {

  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const {data, loading} = useFetch(`/communities/find/${id}`);

  const [isJoined,setIsJoined] = useState(true);
  const joinHandler =()=>{
    setIsJoined(!isJoined)
  }


  return (
    <div>
    <Navbar />
    <div style={{ display: "flex" }}>
    <LeftBar />
    {loading ? (
        "loading") : (
          <>
    <div className="profile" style={{ flex: 6}}>
      <div className="images">
        <img
          src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="cover"
        />
        <img
          src={PF + data.img}
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="center">
            <span>{data.name}</span>
            <div className="info">
            {data.about}
            </div>
            <button onClick={joinHandler}>{isJoined ? "joined" : "join"}</button>
          </div>
        </div>
      </div>
      {isJoined ? <Share/> : ""}
    <Posts />
      </div>

      <div className="profile">
      <div className="profileContainer">
      <div className="uInfo" style={{padding:"10px 20px", borderRadius:"1px", backgroundColor:"#FFFF88"}}>

        <div className="item" style={{display:"flex", flexDirection:"column", gap:"10px"}}>
          <span style={{fontSize:'14px', fontWeight : 'bold'}}>House Rules</span>
          <hr/>
          

           {/* <span>{data.rules}</span> */}
           <ul>
            <li>Be respectul towards each other.</li>
            <li>Do not post any quiz question.</li>
           </ul>
     
        </div>

    </div>
    </div>
    </div>

      </>
      )}

      </div>
    </div>
    
  )
}

export default CommunitySingle
