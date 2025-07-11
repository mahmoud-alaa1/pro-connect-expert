import { supabaseAdmin } from "@/lib/supabase/supabaseServer";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const expertId = (await params).id;
  const { searchParams } = new URL(req.url);
  const date = searchParams.get("date"); // Optional

  // 1. Get expert availability
  const { data: availability, error: availError } = await supabaseAdmin
    .from("expert_availability")
    .select("id, day, from_time, to_time")
    .eq("expert_id", expertId);

  if (availError) {
    return NextResponse.json({ error: availError.message }, { status: 500 });
  }

  // Prepare an empty set if no date
  const bookedTimeIds = new Set<string>();

  if (date) {
    // 2. Get booked sessions for that date
    const { data: sessions, error: sessionError } = await supabaseAdmin
      .from("sessions")
      .select("time_id")
      .eq("expert_id", expertId)
      .eq("date", date)
      .neq("status", "cancelled");

    if (sessionError) {
      return NextResponse.json(
        { error: sessionError.message },
        { status: 500 }
      );
    }

    sessions.forEach((s) => bookedTimeIds.add(s.time_id));
  }

  // 3. Group by day and mark isBooked if needed
  const grouped: Record<
    string,
    { id: string; from: string; to: string; isBooked: boolean }[]
  > = {};

  for (const slot of availability) {
    const isBooked = bookedTimeIds.has(slot.id);

    if (!grouped[slot.day]) grouped[slot.day] = [];
    grouped[slot.day].push({
      id: slot.id,
      from: slot.from_time,
      to: slot.to_time,
      isBooked,
    });
  }

  const result = Object.entries(grouped).map(([day, times]) => ({
    day,
    times,
  }));

  return NextResponse.json(result);
}
