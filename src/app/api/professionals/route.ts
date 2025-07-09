import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/supabaseServer";
import { PROFESSIONALS_PER_PAGE } from "@/lib/constants";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const page = parseInt(searchParams.get("page") || "1", 10);
  const pageSize = parseInt(
    searchParams.get("pageSize") || PROFESSIONALS_PER_PAGE.toString(),
    10
  );

  const search = searchParams.get("name");
  const minRating = searchParams.get("minRating");
  const maxHourly = searchParams.get("maxHourlyRate");
  const specialty = searchParams.get("specialty");
  const title = searchParams.get("title");

  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  let query = supabaseAdmin
    .from("professionals")
    .select(
      `
      id,
      user_id,
      title,
      specialty,
      bio,
      languages,
      hourly_rate,
      currency,
      rating,
      total_reviews,
      availability_status,
      avatar,
      verified,
      rating,
      name                
    `,
      { count: "exact" }
    )
    .range(from, to);

  if (search) {
    query = query.ilike("name", `%${search}%`);
  }

  if (minRating) {
    query = query.gte("rating", Number(minRating));
  }

  if (maxHourly) {
    query = query.lte("hourly_rate", Number(maxHourly));
  }
  if (specialty) {
    query = query.ilike("specialty", `%${specialty}%`);
  }
  if (title) {
    query = query.ilike("title", `%${title}%`);
  }

  const { data, error, count } = await query;

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const totalPages = count ? Math.ceil(count / pageSize) : 1;

  return NextResponse.json({
    data,
    meta: {
      total: count,
      totalPages,
      page,
      pageSize,
    },
  });
}
