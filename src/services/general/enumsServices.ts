import { supabaseClient } from "@/lib/supabase/supabaseClient";

export async function fetchSpecialties() {
  const { data, error } = await supabaseClient.rpc("get_specialties");
  if (error) throw error;
  return data; // data is string[] like ["Digital Marketing Strategy", "SEO & SEM", ...]
}

export async function fetchLanguages() {
  const { data, error } = await supabaseClient.rpc("get_languages");
  if (error) throw error;
  return data;
}
