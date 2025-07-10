// app/api/sessions/book/route.ts
import { supabaseAdmin } from "@/lib/supabase/supabaseServer";
import { NextResponse } from "next/server";

// Helper to parse "14:00-15:00" -> [14:00, 15:00]
function parseTimeRange(range: string): [string, string] {
  const [start, end] = range.split("-");
  return [start, end];
}

function isOverlapping(t1: [string, string], t2: [string, string]) {
  return t1[0] < t2[1] && t2[0] < t1[1];
}

export async function POST(req: Request) {
  try {
    const { expert_id, client_id, date, time, notes } = await req.json();

    if (!expert_id || !client_id || !date || !time) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const sessionDate = new Date(date).toISOString().split("T")[0];
    const [newStart, newEnd] = parseTimeRange(time);

    const { data: existing, error: overlapError } = await supabaseAdmin
      .from("sessions")
      .select("time")
      .eq("expert_id", expert_id)
      .eq("date", sessionDate)
      .not("status", "eq", "cancelled");

    if (overlapError) {
      return NextResponse.json(
        { error: overlapError.message },
        { status: 500 }
      );
    }

    const hasConflict = existing?.some((session) => {
      const [start, end] = parseTimeRange(session.time);
      return isOverlapping([newStart, newEnd], [start, end]);
    });

    if (hasConflict) {
      return NextResponse.json(
        { error: "This time slot is already booked" },
        { status: 409 }
      );
    }

    const { data, error } = await supabaseAdmin
      .from("sessions")
      .insert({
        expert_id,
        client_id,
        date: sessionDate,
        time,
        notes,
        status: "pending",
      })
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ data }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Unexpected server error" },
      { status: 500 }
    );
  }
}
