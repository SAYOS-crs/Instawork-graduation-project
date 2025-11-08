
import { NextResponse, NextRequest } from 'next/server'
import {  getToken } from 'next-auth/jwt'
import { getSession } from 'next-auth/react';




const protectedAuth = ['/Login', '/Register'];
const protectedRoutes = ['/Dashbord', '/services', '/Jobs'];

export async function proxy(request: NextRequest) {
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

  const { pathname } = request.nextUrl;

  if (token && protectedAuth.includes(pathname)) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  if (!token && protectedRoutes.some(route => pathname.startsWith(route))) {
    return NextResponse.redirect(new URL('/Login', request.url));
  }

  return NextResponse.next();
}
