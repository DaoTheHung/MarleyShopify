import { NextResponse } from "next/server";



export function middleware(req) {
    const token = req.cookies.get('token');
    const url = req.url
    const path = ['/account/register', '/account']

    if (!token && url.includes('/account') && !url.includes('/account/register') && !url.includes('/account/login')) {
        return NextResponse.redirect(new URL('/account/login', url))
    }

    if (!token && url.includes('/admin')) {
        return NextResponse.redirect(new URL('/account/login', url))
    }


    if (token && url.includes('/account/login')) {
        return NextResponse.redirect(new URL('/account', url))
    }

    if (token && url.includes('/account/register')) {
        return NextResponse.redirect(new URL('/account', url))
    }


}