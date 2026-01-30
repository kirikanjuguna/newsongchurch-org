import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("admin_token")?.value;
  const { pathname } = request.nextUrl;

  // Allow login page
  if (pathname === "/admin/login") {
    // If already logged in → redirect to dashboard
    if (token) {
      return NextResponse.redirect(new URL("/admin/news/list", request.url));
    }
    return NextResponse.next();
  }

  // Protect ALL /admin routes
  if (pathname.startsWith("/admin")) {
    if (!token) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  return NextResponse.next();
}

// Tell Next.js where middleware applies
export const config = {
  matcher: ["/admin/:path*"],
};
