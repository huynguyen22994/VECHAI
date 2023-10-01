import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
  // let cookie = request.cookies.get('nextjs')
  // console.log(cookie)
  // if(true) {

  //   return NextResponse.redirect(new URL('/login', request.url))
  // } else {

  // }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/dashboard/:path*',
}