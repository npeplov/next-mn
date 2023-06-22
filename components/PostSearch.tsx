"use client";

import { getPostsBySearch } from "@/services/getPosts";
import { FormEventHandler, useState } from "react";

type Props = {
  onSearch: (value: any[]) => void;
};

export const PostSearch = ({ onSearch }: Props) => {
  const [search, setSearch] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const posts = await getPostsBySearch(search);

    onSearch(posts);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="search"
        value={search}
        onChange={({ target }) => {
          setSearch(target.value);
        }}
        className="border-blue-500 border p-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2">
        Search
      </button>
    </form>
  );
};
