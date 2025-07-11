import { supabaseAdmin } from "@/lib/supabase/supabaseServer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const supabase = supabaseAdmin;

  const { expert_id, client_id, time_id, date, notes } = await req.json();

  if (!expert_id || !client_id || !time_id || !date) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  // Check if the time_id belongs to expert
  const { data: timeSlot, error: timeError } = await supabase
    .from("expert_availability")
    .select("*")
    .eq("id", time_id)
    .eq("expert_id", expert_id)
    .single();

  if (!timeSlot || timeError)
    return NextResponse.json({ error: "Invalid time slot" }, { status: 400 });

  // Check if already booked
  const { data: existing } = await supabase
    .from("sessions")
    .select("id")
    .eq("expert_id", expert_id)
    .eq("time_id", time_id)
    .eq("date", date)
    .neq("status", "cancelled")
    .maybeSingle();

  if (existing)
    return NextResponse.json({ error: "Slot already booked" }, { status: 409 });

  const { data: professional } = await supabase
    .from("professionals")
    .select("hourly_rate")
    .eq("user_id", expert_id)
    .single();
  if (!professional) {
    return NextResponse.json(
      { error: "Professional not found" },
      { status: 404 }
    );
  }

  // Create session
  const { data, error } = await supabase
    .from("sessions")
    .insert({
      expert_id,
      client_id,
      time_id,
      date,
      notes,
      status: "pending",
      payment_status: "unpaid",
      price: timeSlot.duration * professional.hourly_rate,
    })
    .select()
    .single();

  if (error)
    return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ session: data }, { status: 201 });
}
