import axios from "axios";
import React, { useEffect, useState } from "react";

const UseEffectPost = () => {
  const [id, setId] = useState(0);
  const [searchButton, setSearchButton] = useState(0);
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${searchButton}`)
      .then((result) => {
        setPost(result.data);
      })
      .catch((err) => {});
  }, [searchButton]);

  const handleSearch = () => {
    setSearchButton(id);
  };

  return (
    <>
      <input type="text" onChange={(e) => setId(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <h1>{post.title}</h1>
    </>
  );
};

export default UseEffectPost;
