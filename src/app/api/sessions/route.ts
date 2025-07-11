import { verifySession } from "@/lib/auth/verifySession";
import { supabaseAdmin } from "@/lib/supabase/supabaseServer";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const user = await verifySession();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const status = request.nextUrl.searchParams.get("status"); // 'upcoming' | 'past' | 'all'
  const role = request.nextUrl.searchParams.get("role"); // 'expert' | 'client'

  if (!role || (role !== "expert" && role !== "client")) {
    return NextResponse.json(
      { error: "Missing or invalid role" },
      { status: 400 }
    );
  }

  const today = new Date().toISOString().split("T")[0];

  // Build query
  let query = supabaseAdmin
    .from("sessions")
    .select(
      `
      *,
      client:client_id (
        full_name,
        email,
        avatar_url
      ),
     professional:expert_id (
      id,
      title,
      currency,
      hourly_rate,
      specialty,
      profile:user_id (
        full_name,
        email,
        avatar_url
      )
    ),
      expert_availability:time_id (
        day,
        from_time,
        to_time,
        duration
      )
    `
    )
    .order("date", { ascending: true });

  // Filter by role
  if (role === "expert") {
    query = query.eq("expert_id", user.user.id);
  } else {
    query = query.eq("client_id", user.user.id);
  }

  // Filter by status
  if (status === "upcoming") {
    query = query.gte("date", today);
  } else if (status === "past") {
    query = query.lt("date", today);
  }

  const { data, error } = await query;

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}
