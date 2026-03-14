"use client";

import { createClient } from "@/lib/supabase/client";
import { useState } from "react";

export default function AuthDemo() {
  const supabase = createClient();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<{
    text: string;
    type: "success" | "error" | "info";
  } | null>(null);
  const [user, setUser] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function checkSession() {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    setUser(user?.email ?? null);
  }

  async function handleSignUp() {
    setLoading(true);
    setMessage(null);
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      setMessage({ text: error.message, type: "error" });
    } else {
      setMessage({
        text: "Check your email for a confirmation link!",
        type: "success",
      });
    }
    setLoading(false);
  }

  async function handleSignIn() {
    setLoading(true);
    setMessage(null);
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      setMessage({ text: error.message, type: "error" });
    } else {
      setUser(data.user?.email ?? null);
      setMessage({ text: "Signed in successfully!", type: "success" });
    }
    setLoading(false);
  }

  async function handleSignOut() {
    await supabase.auth.signOut();
    setUser(null);
    setMessage({ text: "Signed out.", type: "info" });
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Auth (Client-Side)</h2>
        <button
          onClick={checkSession}
          className="rounded bg-zinc-200 px-3 py-1 text-sm text-zinc-700 hover:bg-zinc-300 dark:bg-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-600"
        >
          Check Session
        </button>
      </div>

      {user ? (
        <div className="space-y-3">
          <div className="flex items-center gap-2 rounded-lg bg-green-50 p-3 dark:bg-green-900/20">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            <span className="text-sm text-green-800 dark:text-green-300">
              Signed in as <strong>{user}</strong>
            </span>
          </div>
          <button
            onClick={handleSignOut}
            className="rounded bg-red-100 px-4 py-2 text-sm font-medium text-red-700 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-400 dark:hover:bg-red-900/50"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-zinc-800"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-zinc-800"
          />
          <div className="flex gap-2">
            <button
              onClick={handleSignIn}
              disabled={loading}
              className="rounded bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-700 disabled:opacity-50 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
            >
              {loading ? "..." : "Sign In"}
            </button>
            <button
              onClick={handleSignUp}
              disabled={loading}
              className="rounded border border-zinc-300 px-4 py-2 text-sm font-medium hover:bg-zinc-100 disabled:opacity-50 dark:border-zinc-600 dark:hover:bg-zinc-800"
            >
              {loading ? "..." : "Sign Up"}
            </button>
          </div>
        </div>
      )}

      {message && (
        <div
          className={`rounded-lg p-3 text-sm ${
            message.type === "success"
              ? "bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-300"
              : message.type === "error"
                ? "bg-red-50 text-red-800 dark:bg-red-900/20 dark:text-red-300"
                : "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
          }`}
        >
          {message.text}
        </div>
      )}
    </div>
  );
}
