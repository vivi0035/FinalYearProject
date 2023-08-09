import "./post.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ReportHorizIcon from "@mui/icons-material/Report";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Comments from "../comments/Comments";
import axios from "axios";
import {format} from "timeago.js";
import { AuthContext } from "../../context/AuthContext";


const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);

  const [like,setLike] = useState(post.likes.length)
  const [isLiked,setIsLiked] = useState(false)
  const [user,setUser] = useState({})
  const {user:currentUser} = useContext(AuthContext);

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);


  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`);
      setUser(res.data)
    };
    fetchUser();
  }, [post.userId]);

  const likeHandler = () => {
    try {
      axios.put("/posts/" + post._id + "/like", { userId: currentUser._id });
    } catch (err) {}
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  const handleReport = () => {
     if (window.confirm("Are you sure you want to report this post?")) {
      alert("Post has been reported.")
     }
    return
  }

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={user.img || PF + "person/noAvatar.png" } alt="" />
            <div className="details">
            <div className="postDetails">
              <Link
                to={`/profilepage/${user.username}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{user.username}</span>
                </Link>
                <Link
                to={`/community/${post.community}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {post.community ? <span style={{ color : "#28A6CD"}}>  • {post.community} • </span> : ""}
              </Link>
              </div>
              <span className="date">{format(post.createdAt)}</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="content">
          <p>{post?.desc}</p>
          <img src={PF + post.img} alt="" />
        </div>
        <div className="info">
          <div className="item" onClick={likeHandler}>
            {isLiked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
            {like} Likes
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <TextsmsOutlinedIcon />
            {post.comment} Comments
        

            </div>
          
          <div className="item">
            <ShareOutlinedIcon />
            Share
          </div>
          <div className="item" onClick={handleReport}>
            <ReportHorizIcon />
            Report
            
          </div>
        </div>
      {commentOpen && <Comments/>}

      </div>

   </div>
  );
};

export default Post;