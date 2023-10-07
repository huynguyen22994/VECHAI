import { NextResponse } from 'next/server'
import Axios from '@/helper/axios.helper'
 
// This function can be marked `async` if using `await` inside
export function middleware(request, res , next) {
  let cookie = request.cookies.get('vechaitoken')
  if(!cookie || !cookie.value) return NextResponse.redirect(new URL('/login', request.url))
  request.test ='1'
  // console.log('Cookieee:::', cookie)
  const { name, value } = cookie
  fetch(process.env['SERVERHOST'] + '/api/customer/authen', {
    method: 'GET',
    headers: {
      'authorization': value
    },
  }).then(response => response.json())
    .then((data) => {
      // console.log('Data:::::', data)
      const {customerId, customerEmail, customerRole} = data
      Axios.defaults.headers.common['authorization'] = value;
    }).catch((err) => {
      console.log(err)
      NextResponse.redirect(new URL('/login', request.url))
    })
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/dashboard/:path*',
}