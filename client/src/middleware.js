import { NextResponse } from 'next/server'

export function middleware(request) {
  const session = request.cookies.get('aura_session');

  
  if (request.nextUrl.pathname.startsWith('/add-item')) {
    if (!session) {
      
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  return NextResponse.next();
}


export const config = {
  matcher: ['/add-item/:path*'],
}
