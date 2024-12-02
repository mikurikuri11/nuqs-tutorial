// Client Component
// 検索条件のTodosのみを取得するパターン

"use client";

import React from "react";
import { useQueryState } from "nuqs";

export default function Todos() {
  const [name, setName] = useQueryState('name')

  return (
    <div className="flex flex-col items-center justify-between p-24">
      <label>Name</label>
      <input
        className="p-3 border-2 border-sky-300"
        value={name || ""}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setName(null)}>Clear</button>
      <p>Hello, {name || "anonymous visitor"}!</p>
    </div>
  );
}
