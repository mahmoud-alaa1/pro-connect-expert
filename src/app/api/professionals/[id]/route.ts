import { NextResponse } from "next/server";
import { getExpertById } from "@/services/server/expertsServices";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
): Promise<NextResponse> {
  const { id } = await params;

  const { data, error } = await getExpertById(id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  if (!data) {
    return NextResponse.json(
      { error: "Professional not found" },
      { status: 404 }
    );
  }

  const { updated_at, ...filteredData } = data;
  return NextResponse.json(filteredData);
}
