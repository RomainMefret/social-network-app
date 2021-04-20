 // useEffect(() => {
  //   axios
  //     .get(`${API}posts/timeline/607d21edd6ed7f0774a81bc3`)
  //     .then((res) => {
  //       console.log(res);
  //       setPosts(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       const res = username
//         ? await axios.get(`${API}posts/profile/${username}`)
//         : await axios.get(`${API}posts/timeline/${userId}`);
//       setPosts(res.data);
//     };
//     fetchPosts();
//   }, [username]);

// const API = process.env.REACT_APP_API;