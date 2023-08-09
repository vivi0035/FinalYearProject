import Post from "../post/Post";
import "./posts.scss";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useEffect, useState } from "react";

const Posts = ({username}) => { 

//   const posts = [
//   {
//       id: 1,
//     desc: "Love For All, Hatred For None.",
//     img: "post/1.jpeg",
//     date: "5 mins ago",
//     userId: 1,
//     like: 32,
//     comment: 9,
//     community: "Electronics"
//   },
//   {
//       id: 2,
//     img: "post/2.jpeg",
//     date: "15 mins ago",
//     userId: 2,
//     like: 2,
//     comment: 1,
//     community: "Signal Processing"
//   },
//   {
//     id: 3,
//     desc: "Every moment is a fresh beginning.",
//     img: "post/3.jpeg",
//     date: "1 hour ago",
//     userId: 3,
//     like: 61,
//     comment: 2,
//     community:"International Students" 
//  },
//   {
//     id: 4,
//     img: "post/4.jpeg",
//     date: "4 hours ago",
//     userId: 4,
//     like: 7,
//     comment: 3,
//     community:"Hall Life"
//   },
//   ];

  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
      ? await axios.get("/posts/profile/" + username)
      : await axios.get("posts/timeline/" + user._id);
      setPosts(res.data.sort((p1, p2) => {
        return new Date(p2.createdAt) - new Date(p1.createdAt);
      }));
    };
    fetchPosts();
  }, [username, user._id]);

  return <div className="posts">
    {posts.map((p) => (
      <Post key={p._id} post={p}/>
    ))}
  </div>;
};

export default Posts;