import { createSupabaseServer } from "@/lib/supabase/supabaseServer";

export async function fetchSpecialties() {
  const { data, error } = await (
    await createSupabaseServer()
  ).rpc("get_specialties");
  if (error) throw error;
  return data;
}

export async function fetchLanguages() {
  const { data, error } = await (
    await createSupabaseServer()
  ).rpc("get_languages");
  if (error) throw error;
  return data;
}
