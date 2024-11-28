// 検索条件のPostsのみを取得するパターン

import { searchPostsCache } from "@/features/posts/searchPostsCache";
import { Post } from "@/types/api";
import Form from "next/form";
import { getPost } from "@/features/posts/getPost";
import { getPosts } from "@/features/posts/getPosts";
import { type SearchParams } from "nuqs";

type PageProps = {
  searchParams: Promise<SearchParams>; // Next.js 15+: async searchParams prop
};

export default async function Posts({ searchParams }: PageProps) {
  // ⚠️ Don't forget to call `parse` here.
  // You can access type-safe values from the returned object:
  const posts = await getPosts();

  const { id: id } = await searchPostsCache.parse(searchParams);
  const post = await getPost(id);

  return (
    <div className="flex flex-col items-center justify-between p-24">
      <Form action="/posts" className="flex flex-col gap-3">
        <label>Id</label>
        <input className="p-3 border-2 border-sky-300" name="id" />

        <button className="p-3 bg-sky-500 text-white">Search</button>
      </Form>

      <div>
        <h2 className="text-xl mt-4">Post {id}</h2>
        <ul className="mt-4">
          <li>{post.title}</li>
          <li>{post.body}</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl mt-4">Posts</h2>
        <ul className="mt-4">
          {posts.map((post: Post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
