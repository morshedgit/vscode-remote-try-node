// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isAuthenticated } from "./lib/auth";

export function middleware(request: NextRequest) {
  // Call our authentication function to check the request
  if (!isAuthenticated(request)) {
    // Respond with JSON indicating an error message
    return new NextResponse(
      JSON.stringify({ success: false, message: "authentication failed" }),
      {
        status: 401,
        headers: {
          "Content-Type": "application/json",
          // "Access-Control-Allow-Origin": "*",
          // "Access-Control-Allow-Credentials": "true",
        },
      }
    );
  }
  // console.log("Checking authentication...");
  // const response = NextResponse.next();
  // response.headers.set(
  //   "Access-Control-Allow-Origin",
  //   "http://localhost:3000, http://localhost:3001"
  // );
  // response.headers.set("Access-Control-Allow-Credentials", "true");
  // return response;
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/api/:path*",
};
