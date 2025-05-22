// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/sendEmail'; // adjust path as needed

export async function POST(req: Request) {
    const body = await req.json();
    const { name, email, message, subject } = body;

    const result = await sendEmail(name, email, message, subject);
    return NextResponse.json(result);
}