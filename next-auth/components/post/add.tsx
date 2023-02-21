import { create, update } from "@/services/api";
import React, { useCallback } from "react";
import { PostView } from "./list";

const AddPost: React.FC<{
  post?: PostView;
  onDone?: (post: PostView) => void;
}> = (props) => {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const { title, content } = Object.fromEntries(formData);

    if (props.post) {
      const post = await update("posts", { id: props.post.id, title, content });
      return;
    }
    const post = await create("posts", { title, content });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="mb-4">Add post</h2>
      <input
        name="title"
        placeholder="title"
        type="text"
        className="border-b-2 px-2"
        defaultValue={props.post?.title}
      />
      <input
        name="content"
        placeholder="content"
        type="text"
        className="border-b-2 px-2"
        defaultValue={props.post?.content}
      />

      <div className="flex gap-4 mt-4">
        <button type="reset"> Reset</button>
        <button className="btn-primary" type="submit">
          {" "}
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddPost;
