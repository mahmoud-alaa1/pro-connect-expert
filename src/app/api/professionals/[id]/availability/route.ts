import { supabaseAdmin } from "@/lib/supabase/supabaseServer";
import { NextResponse } from "next/server";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const expertId = (await params).id;

  // 1. Fetch availability
  const { data: availability, error: availError } = await supabaseAdmin
    .from("expert_availability")
    .select("id, day, from_time, to_time")
    .eq("expert_id", expertId);

  if (availError) {
    return NextResponse.json({ error: availError.message }, { status: 500 });
  }

  // 2. Fetch sessions
  const today = new Date().toISOString().split("T")[0];
  const { data: sessions, error: sessionError } = await supabaseAdmin
    .from("sessions")
    .select("time_id, date, status")
    .eq("expert_id", expertId)
    .neq("status", "cancelled")
    .gte("date", today);

  if (sessionError) {
    return NextResponse.json({ error: sessionError.message }, { status: 500 });
  }

  const bookedMap = new Set(sessions.map((s) => `${s.time_id}-${s.date}`));

  const grouped: Partial<Record<DayOfWeek, AvailabilitySlot[]>> = {};

  for (const slot of availability) {
    const day = slot.day;

    if (!grouped[day]) grouped[day] = [];

    const isBooked = [...bookedMap].some((b) => b.startsWith(slot.id));

    grouped[day]?.push({
      id: slot.id,
      from: slot.from_time,
      to: slot.to_time,
      isBooked,
    });
  }

  // Convert to array format
  const result = Object.entries(grouped).map(([day, times]) => ({
    day: day,
    times,
  }));
  console.log(result, "availability result");

  return NextResponse.json(result);
}

// export async function GETT(
//   req: Request,
//   { params }: { params: Promise<{ id: string }> }
// ) {
//   const expertId = (await params).id;
//   const { searchParams } = new URL(req.url);
//   const date = searchParams.get("date");

//   if (!date) {
//     return NextResponse.json({ error: "Missing date" }, { status: 400 });
//   }

//   // 1. Get all availability slots for the expert
//   const { data: availability, error: availError } = await supabaseAdmin
//     .from("expert_availability")
//     .select("id, day, from_time, to_time")
//     .eq("expert_id", expertId);

//   if (availError) {
//     return NextResponse.json({ error: availError.message }, { status: 500 });
//   }

//   // 2. Get all sessions for that date
//   const { data: sessions, error: sessionError } = await supabaseAdmin
//     .from("sessions")
//     .select("time_id")
//     .eq("expert_id", expertId)
//     .eq("date", date)
//     .neq("status", "cancelled");

//   if (sessionError) {
//     return NextResponse.json({ error: sessionError.message }, { status: 500 });
//   }

//   const bookedTimeIds = new Set(sessions.map((s) => s.time_id));

//   const grouped: Record<
//     string,
//     { id: string; from: string; to: string; isBooked: boolean }[]
//   > = {};

//   for (const slot of availability) {
//     const isBooked = bookedTimeIds.has(slot.id);

//     if (!grouped[slot.day]) grouped[slot.day] = [];
//     grouped[slot.day].push({
//       id: slot.id,
//       from: slot.from_time,
//       to: slot.to_time,
//       isBooked,
//     });
//   }

//   const result = Object.entries(grouped).map(([day, times]) => ({
//     day,
//     times,
//   }));

//   return NextResponse.json(result);
// }

// /api/expert/[id]/availability-with-booking

