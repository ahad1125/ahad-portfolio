import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

async function verifyTurnstile(token) {
  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: token,
      }),
    },
  );

  const data = await response.json();
  return data.success;
}

export default async function handler(request, response) {
  if (request.method !== "POST") {
    return response.status(405).json({ error: "Method not allowed" });
  }

  try {
    const body = request.body;
    const { fullName, email, message, turnstileToken } = body;

    if (!fullName || !email) {
      return response
        .status(400)
        .json({ error: "Full name and email are required" });
    }

    if (!turnstileToken) {
      return response
        .status(400)
        .json({ error: "Please complete the verification" });
    }

    const isValidToken = await verifyTurnstile(turnstileToken);
    if (!isValidToken) {
      return response
        .status(400)
        .json({ error: "Verification failed. Please try again." });
    }

    const { data, error } = await resend.emails.send({
      from: "UserAccess Contact <contact@useraccess.live>",
      to: ["abdahad.722@gmail.com"],
      replyTo: email,
      subject: `New Contact Form Submission from ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0066FF;">New Contact Form Submission</h2>
          <hr style="border: 1px solid #eee;" />
          
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          
          <h3 style="color: #333;">Message:</h3>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; border-left: 4px solid #0066FF;">
            <p style="margin: 0; white-space: pre-wrap;">${message || "No message provided"}</p>
          </div>
          
          <hr style="border: 1px solid #eee; margin-top: 30px;" />
          <p style="color: #666; font-size: 12px;">
            This email was sent from the UserAccess contact form.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return response.status(500).json({ error: "Failed to send email" });
    }

    return response.status(200).json({ success: true, messageId: data?.id });
  } catch (error) {
    console.error("API error:", error);
    return response.status(500).json({ error: "Internal server error" });
  }
}
