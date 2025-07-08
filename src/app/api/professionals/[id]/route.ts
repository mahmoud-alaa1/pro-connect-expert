// app/api/professionals/[id]/route.ts
import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/supabaseServer";

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const { data, error } = await supabaseAdmin
    .from("professionals")
    .select("*")
    .eq("user_id", id)
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  if (!data) {
    return NextResponse.json(
      { error: "Professional not found" },
      { status: 404 }
    );
  }

  const { updated_at, ...filteredData } = data;
  return NextResponse.json(filteredData);
}
