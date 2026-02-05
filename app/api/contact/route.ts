import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // ✅ 1 — Send message to church/admin
    await resend.emails.send({
      from: "New Song Church <contact@newsongchapel.org>",
      to: [process.env.CONTACT_RECEIVER_EMAIL!],
      replyTo: email,
      subject: subject || "New Contact Message",
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || "-"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // ✅ 2 — Auto-reply to sender
    await resend.emails.send({
      from: "New Song Church <contact@newsongchapel.org>",
      to: [email],
      subject: "We received your message — New Song Church",
      html: `
        <h2>Hello ${name},</h2>
        <p>Thank you for contacting New Song Church.</p>
        <p>We have received your message and our team will respond shortly.</p>

        <hr />

        <p><strong>Your message:</strong></p>
        <p>${message}</p>

        <br/>
        <p>Blessings,</p>
        <p><strong>New Song Church Team</strong></p>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("CONTACT ERROR:", error);

    return NextResponse.json(
      { success: false, message: "Failed to send message" },
      { status: 500 }
    );
  }
}
