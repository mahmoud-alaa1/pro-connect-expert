import { NextRequest, NextResponse } from "next/server";
import { verifySession } from "@/lib/auth/verifySession";
import { uploadAvatar } from "@/services/server/uploadAvatar";
import { getPublicUrl } from "@/services/server/getPublicUrl";
import { updateProfileAvatar } from "@/services/server/updateProfileAvatar";

export async function POST(req: NextRequest) {
  const user = await verifySession();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await req.formData();
  const file = formData.get("file") as File;

  if (!file) {
    return NextResponse.json({ error: "Missing file" }, { status: 400 });
  }

  try {
    const filePath = await uploadAvatar(user.user?.id, file);
    const publicUrl = await getPublicUrl(filePath);
    await updateProfileAvatar(user.user?.id, publicUrl);

    return NextResponse.json({ avatar_url: publicUrl });
  } catch (error: unknown) {
    console.error("[Upload Avatar Error]", error);

    let message = "Failed to upload avatar";

    if (error instanceof Error) {
      message = error.message;
    }

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
