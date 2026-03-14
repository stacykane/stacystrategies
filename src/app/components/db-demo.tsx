"use client";

import { createClient } from "@/lib/supabase/client";
import { useState } from "react";

type QueryResult = {
  data: unknown;
  error: string | null;
  rowCount: number | null;
  timestamp: string;
};

export default function DbDemo() {
  const supabase = createClient();
  const [table, setTable] = useState("");
  const [result, setResult] = useState<QueryResult | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleQuery() {
    if (!table.trim()) return;
    setLoading(true);
    const { data, error } = await supabase
      .from(table.trim())
      .select("*")
      .limit(5);

    setResult({
      data: data ?? null,
      error: error?.message ?? null,
      rowCount: data?.length ?? null,
      timestamp: new Date().toISOString(),
    });
    setLoading(false);
  }

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Database (Client-Side)</h2>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Table name (e.g. profiles)"
          value={table}
          onChange={(e) => setTable(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleQuery()}
          className="flex-1 rounded border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-zinc-800"
        />
        <button
          onClick={handleQuery}
          disabled={loading}
          className="rounded bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-700 disabled:opacity-50 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
        >
          {loading ? "..." : "Query"}
        </button>
      </div>
      {result && (
        <pre className="max-h-64 overflow-auto rounded-lg bg-zinc-100 p-3 text-xs dark:bg-zinc-800">
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
      <p className="text-xs text-zinc-500">
        Enter any table name to test the database connection. If the table
        doesn&apos;t exist you&apos;ll see a schema error — that still confirms
        the connection works.
      </p>
    </div>
  );
}
