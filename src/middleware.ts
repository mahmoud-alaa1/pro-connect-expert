import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const protectedAuthRoutes = ["login", "signup"];
const intlMiddleware = createMiddleware(routing);

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  const paths = request.nextUrl.pathname.split("/");

  const accessingAuthPage = paths.some((segment) =>
    protectedAuthRoutes.includes(segment)
  );

  console.log( accessingAuthPage,request.url);

  if (token && accessingAuthPage) {
    const loginUrl = new URL("/", request.url);
    return NextResponse.redirect(loginUrl);
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
