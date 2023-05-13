import { useState, useEffect } from "react";
import { IPost } from "../models/IPost";
import { postAPI } from "../services/postService";
import PostItem from "./postItem";

const PostContainer = () => {
  const [limit, setLimit] = useState(0);
  const {
    data: posts,
    isLoading,
    error,
  } = postAPI.useFetchAllPostsQuery(limit);
  const [createPost, {}] = postAPI.useCreatePostMutation();
  const [deletePost, {}] = postAPI.useDeletePostMutation();
  const [updatePost, {}] = postAPI.useUpdatePostMutation();

  useEffect(() => {
    setTimeout(() => {
      setLimit(20);
    }, 2000);
  }, []);

  const handleCreate = async () => {
    const title = prompt();
    await createPost({ title, body: title } as IPost);
  };

  const handleUpdate = (post: IPost) => {
    updatePost(post);
  };

  const handleRemove = (post: IPost) => {
    deletePost(post);
  };

  return (
    <div>
      <div className="post__list">
        <button onClick={handleCreate}>Add new post</button>
        {isLoading && <h2>loading...</h2>}
        {error && <h2>Произошла ошибка при загрузке</h2>}
        {posts &&
          posts.map((post) => (
            <PostItem
              update={handleUpdate}
              remove={handleRemove}
              key={post.id}
              post={post}
            />
          ))}
      </div>
    </div>
  );
};

export default PostContainer;
