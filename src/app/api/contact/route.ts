import { Resend } from 'resend'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error('RESEND_API_KEY is not set')
      return NextResponse.json({ success: false, error: 'Server configuration error' }, { status: 500 })
    }

    const resend = new Resend(apiKey)

    const body = await request.json()
    const { name, company, message } = body

    const emailContent = `
Name: ${name}
Company: ${company || 'Not specified'}
Message:
${message}
    `.trim()

    const result = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'cstuedeman@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      text: emailContent,
    })

    console.log('Resend response:', result)

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 })
  }
}
