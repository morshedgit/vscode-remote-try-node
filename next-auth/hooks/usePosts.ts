import { PostView } from "@/components/post/list";
import { getPosts } from "@/services/api";
import { useEffect, useState } from "react";

export const usePosts = () => {
  const [posts, setPosts] = useState<PostView[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        const posts = await getPosts("posts");
        setPosts(posts);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    loadPosts();
  }, []);

  return { posts, loading, error };
};
