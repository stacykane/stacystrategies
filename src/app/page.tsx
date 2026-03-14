import { createClient } from "@/lib/supabase/server";
import AuthDemo from "./components/auth-demo";
import DbDemo from "./components/db-demo";

async function getSupabaseStatus() {
  const supabase = await createClient();

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  const { error: dbError } = await supabase
    .from("_test_connection")
    .select("*")
    .limit(1);

  const dbConnected =
    !dbError ||
    dbError.message?.includes("does not exist") ||
    dbError.message?.includes("schema cache");

  return {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL ?? "not set",
    authConnected: !authError || authError.message === "Auth session missing!",
    authUser: user?.email ?? null,
    dbConnected,
    dbDetail: dbError?.message ?? "no error",
    timestamp: new Date().toISOString(),
  };
}

export default async function Home() {
  const status = await getSupabaseStatus();

  return (
    <div className="flex min-h-screen items-start justify-center bg-zinc-50 px-4 py-12 font-sans dark:bg-zinc-950">
      <main className="w-full max-w-2xl space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Stacy Strategies
          </h1>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            System status &amp; Supabase integration dashboard
          </p>
        </div>

        {/* Connection Status — Server Component */}
        <section className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <h2 className="mb-4 text-lg font-semibold">
            Connection Status
            <span className="ml-2 text-xs font-normal text-zinc-400">
              (server-side)
            </span>
          </h2>

          <div className="space-y-3">
            <StatusRow label="Supabase URL" value={status.url} ok />
            <StatusRow
              label="Auth Service"
              value={status.authConnected ? "Connected" : "Error"}
              ok={status.authConnected}
            />
            <StatusRow
              label="Auth User"
              value={status.authUser ?? "No active session"}
              ok={status.authUser !== null}
              neutral={status.authUser === null}
            />
            <StatusRow
              label="Database"
              value={status.dbConnected ? "Connected" : "Error"}
              ok={status.dbConnected}
              detail={status.dbDetail}
            />
            <StatusRow
              label="Server Time"
              value={status.timestamp}
              ok
            />
          </div>
        </section>

        {/* Stack Info */}
        <section className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <h2 className="mb-4 text-lg font-semibold">Stack</h2>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <StackItem label="Framework" value="Next.js 16" />
            <StackItem label="Hosting" value="Vercel" />
            <StackItem label="Database" value="Supabase (Postgres)" />
            <StackItem label="Auth" value="Supabase Auth" />
            <StackItem label="Styling" value="Tailwind CSS v4" />
            <StackItem label="DNS" value="Cloudflare" />
          </div>
        </section>

        {/* Auth Demo — Client Component */}
        <section className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <AuthDemo />
        </section>

        {/* DB Demo — Client Component */}
        <section className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <DbDemo />
        </section>

        {/* API Test Link */}
        <section className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <h2 className="mb-2 text-lg font-semibold">API Route</h2>
          <p className="mb-3 text-sm text-zinc-500 dark:text-zinc-400">
            Raw JSON endpoint for programmatic access:
          </p>
          <a
            href="/api/supabase-test"
            className="inline-block rounded bg-zinc-100 px-3 py-1.5 font-mono text-sm text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
          >
            GET /api/supabase-test →
          </a>
        </section>

        <footer className="pb-8 text-center text-xs text-zinc-400">
          stacystrategies.com
        </footer>
      </main>
    </div>
  );
}

function StatusRow({
  label,
  value,
  ok,
  neutral,
  detail,
}: {
  label: string;
  value: string;
  ok: boolean;
  neutral?: boolean;
  detail?: string;
}) {
  return (
    <div className="flex items-start justify-between gap-4 text-sm">
      <span className="text-zinc-500 dark:text-zinc-400">{label}</span>
      <div className="text-right">
        <div className="flex items-center gap-2">
          <span
            className={`h-2 w-2 rounded-full ${
              neutral
                ? "bg-zinc-400"
                : ok
                  ? "bg-green-500"
                  : "bg-red-500"
            }`}
          />
          <span
            className={`font-mono text-xs ${
              neutral
                ? "text-zinc-500"
                : ok
                  ? "text-green-700 dark:text-green-400"
                  : "text-red-700 dark:text-red-400"
            }`}
          >
            {value}
          </span>
        </div>
        {detail && (
          <span className="mt-0.5 block font-mono text-[10px] text-zinc-400">
            {detail}
          </span>
        )}
      </div>
    </div>
  );
}

function StackItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-zinc-50 px-3 py-2 dark:bg-zinc-800">
      <div className="text-xs text-zinc-400">{label}</div>
      <div className="font-medium">{value}</div>
    </div>
  );
}
