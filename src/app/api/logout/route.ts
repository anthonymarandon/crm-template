import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const cookieStore = await cookies();
    cookieStore.delete('token');
    return NextResponse.json({ success: true, redirect: '/auth/login' });
}
