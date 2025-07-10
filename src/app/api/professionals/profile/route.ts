// app/api/professionals/update/route.ts
import { NextRequest, NextResponse } from "next/server";
import { verifySession } from "@/lib/auth/verifySession";
import { supabaseAdmin } from "@/lib/supabase/supabaseServer";
import { expertProfileSchema } from "@/schemas/profileSchema";
import { getExpertById } from "@/services/server/expertsServices";

export async function PUT(req: NextRequest) {
  const user = await verifySession();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await req.json()) as expertProfileSchema;
  const {
    title,
    specialty,
    bio,
    languages,
    hourly_rate,
    currency,
    availability,
  } = body;

  if (
    !title ||
    !specialty ||
    !bio ||
    !languages ||
    !hourly_rate ||
    !currency ||
    !availability
  ) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  // 1. Update professionals table
  const { error: updateError } = await supabaseAdmin
    .from("professionals")
    .update({
      title,
      specialty,
      bio,
      languages,
      hourly_rate,
      currency,
    })
    .eq("user_id", user.id);

  if (updateError) {
    return NextResponse.json({ error: updateError.message }, { status: 500 });
  }

  // 2. Update expert_availability table smartly
  const { data: existingSlots, error: fetchError } = await supabaseAdmin
    .from("expert_availability")
    .select("id,day,from_time,to_time")
    .eq("expert_id", user.id);

  if (fetchError) {
    return NextResponse.json({ error: fetchError.message }, { status: 500 });
  }

  const existingSet = new Set(
    (existingSlots || []).map((s) => `${s.day}-${s.from_time}-${s.to_time}`)
  );

  const incomingSet = new Set(
    availability.flatMap((entry) =>
      entry.times.map((slot) => `${entry.day}-${slot.from}-${slot.to}`)
    )
  );

  const toInsert = availability.flatMap((entry) =>
    entry.times
      .filter(
        (slot) => !existingSet.has(`${entry.day}-${slot.from}-${slot.to}`)
      )
      .map((slot) => ({
        expert_id: user.id,
        day: entry.day,
        from_time: slot.from,
        to_time: slot.to,
      }))
  );

  const toDelete = (existingSlots || []).filter(
    (s) => !incomingSet.has(`${s.day}-${s.from_time}-${s.to_time}`)
  );

  if (toDelete.length > 0) {
    const idsToDelete = toDelete.map((s) => s.id);
    const { error: deleteError } = await supabaseAdmin
      .from("expert_availability")
      .delete()
      .in("id", idsToDelete);

    if (deleteError) {
      return NextResponse.json({ error: deleteError.message }, { status: 500 });
    }
  }

  if (toInsert.length > 0) {
    const { error: insertError } = await supabaseAdmin
      .from("expert_availability")
      .insert(toInsert);

    if (insertError) {
      return NextResponse.json({ error: insertError.message }, { status: 500 });
    }
  }

  const { data, error } = await supabaseAdmin
    .from("professionals")
    .select("*, expert_availability(*)")
    .eq("id", user.id)
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const { updated_at, ...rest } = data;

  return NextResponse.json(rest);
}

export async function GET() {
  const user = await verifySession();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { data, error } = await getExpertById(user.id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const { updated_at, ...rest } = data;

  return NextResponse.json(rest);
}
