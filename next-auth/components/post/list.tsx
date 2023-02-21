import { remove } from "@/services/api";
import { formatTimePassed } from "@/services/common";
import { Post } from "@prisma/client";
import React from "react";

export type PostView = Pick<Post, "title" | "content" | "id"> & {
  createdAt: string;
  updatedAt: string;
};

function PostList(props: {
  posts: PostView[];
  onSelect: (post: PostView) => void;
}) {
  const handleDelete = (post: PostView) => {
    remove("posts", { id: post.id });
  };

  const handleEdit = (post: PostView) => {
    props.onSelect(post);
  };

  return (
    <ul className="grid grid-cols-1 gap-4">
      {props.posts.map((post) => (
        <li
          key={post.id}
          className={`grid grid-cols-[auto_2fr_1fr] bg-white rounded-lg overflow-hidden shadow-lg ${
            false ? "border-2 border-blue-500" : ""
          }`}
        >
          <img src="https://picsum.photos/100" alt="" className="w-fit h-24" />
          <div className="p-4">
            <span className="flex items-center gap-4">
              <h3 className="text-lg font-medium">{post.title}</h3>

              {/* <p className="text-sm text-gray-500">
                    <span className="material-symbols-outlined">magic_button</span> <span>{formatTimePassed(post.createdAt)}</span>
                </p> */}
              <p className="text-xs text-gray-500">
                <span className="material-symbols-outlined text-xs">edit</span>
                <span className="capitalize">
                  {formatTimePassed(post.updatedAt)}
                </span>
              </p>
            </span>
            <p className="text-gray-600">{post.content}</p>
          </div>
          <div className="mt-4 flex justify-end">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2"
              onClick={() => handleEdit(post)}
            >
              <span className="material-symbols-outlined">edit</span>
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-lg"
              onClick={() => handleDelete(post)}
            >
              <span className="material-symbols-outlined">delete</span>
            </button>
          </div>
        </li>
      ))}
      {/* <li className="bg-white rounded-lg overflow-hidden shadow-lg">
        <div className="p-4 flex justify-center items-center h-full">
          <button className="text-gray-400" disabled>
            <span className="material-symbols-outlined">
              add_circle_outline
            </span>
          </button>
        </div>
      </li> */}
    </ul>
  );
}

export default PostList;
