import React, { useEffect, useState } from "react";
import "./feed.css";
import Share from "../share/Share";
import Post from "../post/Post";
import axios from "axios";
const API = process.env.REACT_APP_API;

const Feed = ({ username }) => {
  const [posts, setPosts] = useState([]);
  const [text, setText] = useState("");

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const res = username
  //       ? await axios.get("`${API}/posts/profile/` + username")
  //       : await axios.get("`${API}posts/timeline/` + user._id");
  //     setPosts(res.data);
  //   };
  //   fetchPosts();
  // }, [username]);

  useEffect(() => {
    axios
      .get(`${API}posts/timeline/607d21edd6ed7f0774a81bc3`)
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
