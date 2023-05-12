import { useState, useEffect } from "react";

import { postAPI } from "../services/postService";
import PostItem from "./postItem";

const PostContainer = () => {
  const [limit, setLimit] = useState(10);
  const {
    data: posts,
    isLoading,
    error,
  } = postAPI.useFetchAllPostsQuery(limit);

  useEffect(() => {
    setTimeout(() => {
      setLimit(5);
    }, 2000);
  }, []);

  return (
    <div>
      <div className="post__list">
        {isLoading && <h2>loading...</h2>}
        {error && <h2>Произошла ошибка при загрузке</h2>}
        {posts && posts.map((post) => <PostItem key={post.id} post={post} />)}
      </div>
    </div>
  );
};

export default PostContainer;
