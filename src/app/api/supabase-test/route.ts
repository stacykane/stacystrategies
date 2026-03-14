import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET() {
  const supabase = await createClient();

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  const { error: dbError } = await supabase
    .from("_test_connection")
    .select("*")
    .limit(1);

  return NextResponse.json({
    success: true,
    connection: "ok",
    auth: {
      user: user?.email ?? null,
      error: authError?.message ?? null,
    },
    database: {
      // "relation does not exist" confirms the connection works
      status:
        !dbError ||
        dbError.message?.includes("does not exist") ||
        dbError.message?.includes("schema cache")
          ? "connected"
          : "error",
      detail: dbError?.message ?? "no error",
    },
    timestamp: new Date().toISOString(),
  });
}
