import { supabaseAdmin } from "@/lib/supabase/supabaseServer";

export async function getExpertById(id: string) {
  return await supabaseAdmin
    .from("professionals")
    .select("*, expert_availability(*)")
    .eq("id", id)
    .single();
}
export async function getAllExperts() {
  const { data, error } = await supabaseAdmin
    .from("professionals")
    .select("*, expert_availability(*)");

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
