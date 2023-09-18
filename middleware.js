import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
  console.log("MiddleWare Executed")
  const authToken = request.cookies.get("JWT")?.value;
  if(request.nextUrl.pathname==="/api/users/signin/route") return;
  console.log(authToken)

  const protectedRoute = request.nextUrl.pathname === '/components/CC_machine/cc_machine' || request.nextUrl.pathname=== '/components/Ladle/ladle';

  // Check if the request is trying to access the protected route
  if (protectedRoute) {
    // If the user is not authenticated, redirect to the login page
    if (!authToken) {
      return NextResponse.redirect(new URL("/components/LoginPage/login", request.url));
    }
  }

  const loggedInUserNotAccessPath = request.nextUrl.pathname === "/components/LoginPage/login" || request.nextUrl.pathname === "/components/signup/Signup" || request.nextUrl.pathname === "/api/users/signin"

  if(loggedInUserNotAccessPath){
    if(authToken){
       return NextResponse.redirect(new URL("/components/Dashboard/dashboard",request.url))
    }
  } else{
    if(!authToken){
        return NextResponse.redirect(new URL("/components/LoginPage/login",request.url))
    }
  }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/components/LoginPage/login','/components/signup/Signup','/components/Dashboard/dashboard','/api/users/:path*','/components/CC_machine/cc_machine','/components/Ladle/ladle'],
}