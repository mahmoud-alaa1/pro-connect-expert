import { verifySession } from "./verifySession";

export async function getUser() {
  const user = await verifySession();
  if (!user) throw new Error("Unauthorized");
  return user;
}
