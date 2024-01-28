import { NextResponse } from "next/server";

export function middleware(req) {
  const path = req.nextUrl.pathname;

  const token = req.cookies.get("token")?.value || "";
  // Public paths
  const isPublicPath =
    path.startsWith("/sign-in") || path.startsWith("/sign-up");

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/sign-in", req.nextUrl));
  }
  if (token) {
    if (isPublicPath) {
      return NextResponse.redirect(new URL("/", req.nextUrl));
    }
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
