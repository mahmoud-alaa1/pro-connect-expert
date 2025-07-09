import { Database } from "@/lib/database.types";

export type TAvailability = Array<{
  day: string;
  times: Array<{ from: string; to: string }>;
}> | null;

export type TProfessional =
  Database["public"]["Tables"]["professionals"]["Row"];
