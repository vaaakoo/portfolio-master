import { Resend } from 'resend'
import { NextResponse } from 'next/server';
import ContactTemplate from "../../../../mail/contactTemplate";

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req) {
    try {
        const { name, email, message, website } = await req.json()

        if (website && website.trim() !== '') // Honeypot for bots
            return NextResponse.json({ success: false }, { status: 400 })

        if (!process.env.RESEND_API_KEY) {
            console.error('RESEND_API_KEY is missing');
            return NextResponse.json({ success: false, error: 'Email service not configured' }, { status: 500 })
        }

        const { data, error } = await resend.emails.send({
            // IMPORTANT: If you haven't verified a domain on Resend, 
            // you MUST use 'onboarding@resend.dev' as the 'from' address.
            from: `Portfolio Contact <onboarding@resend.dev>`,
            to: ['vaaakoo@gmail.com'],
            subject: `New Message from ${name}`,
            replyTo: email,
            react: <ContactTemplate name={name} email={email} message={message} />
        })

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json({ success: false, error: error }, { status: 400 })
        }

        return NextResponse.json({ success: true }, { status: 200 })
    } catch (e) {
        console.error('Server error:', e)
        return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 })
    }
}