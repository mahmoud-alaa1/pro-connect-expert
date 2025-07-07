import { verifySession } from "@/lib/auth/verifySession";
import { supabaseAdmin } from "@/lib/supabase/supabaseServer";
import { NextResponse } from "next/server";

export async function PATCH(req: Request) {
  const user = await verifySession();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id, full_name } = await req.json();

  if (!id || !full_name) {
    return NextResponse.json(
      { error: "Missing id or full_name" },
      { status: 400 }
    );
  }

  const { error, data } = await supabaseAdmin
    .from("profiles")
    .update({ full_name })
    .eq("id", user.id)
    .select("*")
    .single();

  console.log("profile: ", data);
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ...data });
}
