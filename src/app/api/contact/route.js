import {Resend} from 'resend'
import {NextResponse} from 'next/server';
import ContactTemplate from "../../../../mail/contactTemplate";

const resend = new Resend(process.env.RESEND_API_KEY || 'fallback')

export async function POST(req) {
    try {
        const {name, email, message, website} = await req.json()
        console.log('name server', name)
        console.log('email server', email)
        console.log('msg server', message)
        console.log('website server', website)

        if (website && website.trim() !== '') //used to handle bot mailer
            return NextResponse.json({succcess: false}, {status: 400})

        const {_, error} = await resend.emails.send({
            from: `${name} request <contact@tvoosai.dev>`, // Resend requires a verified domain, keeping the original or a generic one.
            to: ['vjanikashvili@gmail.com'],
            trackClicks: false,
            trackOpens: false,
            subject: `Contacted by ${name}`,
            replyTo: email,
            react: <ContactTemplate name={name} email={email} message={message}/>
        })

        if (error)
            return NextResponse.json({success: false, error: error}, {status: 400})
        return NextResponse.json({success: true}, {status: 200})
    } catch (e) {
        console.error(e)
        NextResponse.json({success: false, error: e}, {status: 500})
    }

}