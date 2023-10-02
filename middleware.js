import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
  console.log("MiddleWare Executed")
  const authToken = request.cookies.get("JWT")?.value;
  if(request.nextUrl.pathname==="/api/users/signin/route") return;
  if(request.nextUrl.pathname==="/api/users/signup/route") return;
  console.log(authToken)

  const protectedRoute = request.nextUrl.pathname === '/ccm' || request.nextUrl.pathname=== '/ladle';

  // Check if the request is trying to access the protected route
  if (protectedRoute) {
    // If the user is not authenticated, redirect to the login page
    if (!authToken) {
      return NextResponse.redirect(new URL("/signin", request.url));
    }
  }

  const loggedInUserNotAccessPath = request.nextUrl.pathname === "/signin" || request.nextUrl.pathname === "/signup"

  if(loggedInUserNotAccessPath){
    if(authToken){
       return NextResponse.redirect(new URL("/dashboard",request.url))
    }
  } else{
    if(!authToken){
        return NextResponse.redirect(new URL("/signin",request.url))
    }
  }

}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/signin','/signup','/dashboard','/admin','/dashboard_security','/dashboard_history','/pricing' ,'/api/users/:path*','/ccm','/ladle'],
}
