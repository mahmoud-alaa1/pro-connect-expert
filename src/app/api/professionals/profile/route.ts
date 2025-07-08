// app/api/professionals/update/route.ts
import { NextRequest, NextResponse } from "next/server";
import { verifySession } from "@/lib/auth/verifySession";
import { supabaseAdmin } from "@/lib/supabase/supabaseServer";

export async function PATCH(req: NextRequest) {
  const user = await verifySession();
  if (!user)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();

  const { error, data } = await supabaseAdmin
    .from("professionals")
    .update(body)
    .eq("user_id", user.id)
    .select()
    .single();

  if (error)
    return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json(data);
}
export async function GET() {
  const user = await verifySession();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { data, error } = await supabaseAdmin
    .from("professionals")
    .select("*")
    .eq("id", user.id)
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const { updated_at, ...rest } = data;

  return NextResponse.json(rest);
}
