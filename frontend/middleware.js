import { NextResponse } from 'next/server'
import Axios from '@/helper/axios.helper'
 
// This function can be marked `async` if using `await` inside
export function middleware(request, res , next) {
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64')
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-nonce', nonce)
  let cookie = request.cookies.get('vechaitoken')
  if(!cookie || !cookie.value) return NextResponse.redirect(new URL('/login', request.url))
  // console.log('Cookieee:::', cookie)
  const { name, value } = cookie
  return fetch(process.env['SERVERHOST'] + '/api/customer/authen', {
    method: 'GET',
    headers: {
      'authorization': value
    },
  }).then(response => response.json())
    .then((data) => {
      // console.log('Data:::::', data)
      const {customerId, customerEmail, customerRole} = data
      Axios.defaults.headers.common['authorization'] = value;
      return NextResponse.next({
        headers: requestHeaders,
        request: {
          headers: requestHeaders,
        },
      })
    }).catch((err) => {
      console.log(err)
      NextResponse.redirect(new URL('/login', request.url))
    })
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/dashboard/:path*',
}