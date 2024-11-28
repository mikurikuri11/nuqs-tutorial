// Usesを全て取得した上で、検索条件に合致するユーザーを表示するパターン

import { getUsers } from "@/lib/getUsers";
import { searchParamsCache } from "@/lib/searchParams";
import { User } from "@/types/api";
import { type SearchParams } from "nuqs/server";
import Form from "next/form";

type PageProps = {
  searchParams: Promise<SearchParams>; // Next.js 15+: async searchParams prop
};

export default async function Page({ searchParams }: PageProps) {
  // ⚠️ Don't forget to call `parse` here.
  // You can access type-safe values from the returned object:
  const { email: email, city: city } = await searchParamsCache.parse(
    searchParams
  );
  const users = await getUsers();

  return (
    <div className="flex flex-col items-center justify-between p-24">
      {/* TODO:actionを叩くこともできる */}
      <Form action="/" className="flex flex-col gap-3">
        <label>City</label>
        <input className="p-3 border-2 border-sky-300" name="city" />

        <label>Email</label>
        <input className="p-3 border-2 border-sky-300" name="email" />

        <button className="p-3 bg-sky-500 text-white">Search</button>
      </Form>

      <div>
        <h2 className="text-xl mt-4">Users</h2>
        <ul className="mt-4">
          {users.map((user: User) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-xl mt-4">Users in {city}</h2>
        <ul className="mt-4">
          {users
            .filter(
              (user: User) =>
                user.address.city === city && user.email.includes(email)
            )
            .map((user: User) => (
              <li key={user.id}>{user.name}</li>
            ))}
        </ul>
      </div>
    </div>
  );
}
