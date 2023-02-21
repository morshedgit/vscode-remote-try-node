import AddPost from "@/components/post/add";
import PostList, { PostView } from "@/components/post/list";
import { usePosts } from "@/hooks/usePosts";
import { useState } from "react";

export default function Home() {
  const { posts, error, loading } = usePosts();
  const [showAddPost, setShowAddPost] = useState(false);
  const [selectedPost, setSelectedPost] = useState<PostView | undefined>(
    undefined
  );

  const handleSelectPost = (post: PostView) => {
    setSelectedPost(post);
    setShowAddPost(true);
  };

  return (
    <section className="px-4">
      <dialog
        open={showAddPost}
        className="fixed top-12 w-64 h-fit shadow-lg rounded-lg"
      >
        <button
          className="text-gray-400 hover:text-gray-600 active:text-gray-800 absolute right-2"
          onClick={() => {
            setShowAddPost(false);
            setSelectedPost(undefined);
          }}
        >
          <span className="material-symbols-outlined">close</span>
        </button>
        <AddPost post={selectedPost} />
      </dialog>
      <span className="text-5xl border-b-2 my-4 flex gap-4 justify-between">
        <h1>Posts</h1>
        <button
          className="text-gray-400 hover:text-gray-600 active:text-gray-800"
          onClick={() => setShowAddPost(true)}
        >
          <span className="material-symbols-outlined">add_circle_outline</span>
        </button>
      </span>
      {loading && <p>Loading...</p>}
      {error && <p>Error:{error}</p>}
      {!error && !loading && (
        <PostList posts={posts} onSelect={handleSelectPost} />
      )}
    </section>
  );
}
