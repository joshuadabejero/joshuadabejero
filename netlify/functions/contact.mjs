export default async (request) => {
  if (request.method !== "POST") {
    return Response.json({ message: "Method not allowed." }, { status: 405 });
  }

  try {
    const { name, email, time, subject, message, recaptchaToken } =
      await request.json();

    if (
      !name?.trim() ||
      !email?.trim() ||
      !subject?.trim() ||
      !message?.trim() ||
      !recaptchaToken
    ) {
      return Response.json(
        { message: "Missing required fields." },
        { status: 400 },
      );
    }

    // Verify token with Google
    const params = new URLSearchParams({
      secret: process.env.RECAPTCHA_SECRET_KEY,
      response: recaptchaToken,
    });

    const googleResponse = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params,
      },
    );

    const verification = await googleResponse.json();

    // Validate Google's response
    if (
      !verification.success ||
      verification.action !== "contact" ||
      verification.hostname !== process.env.SITE_HOSTNAME ||
      verification.score < 0.5
    ) {
      return Response.json(
        { message: "Security verification failed." },
        { status: 403 },
      );
    }

    // Send email through EmailJS REST API
    const emailResponse = await fetch(
      "https://api.emailjs.com/api/v1.0/email/send",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: process.env.EMAILJS_SERVICE_ID,
          template_id: process.env.EMAILJS_TEMPLATE_ID,
          user_id: process.env.EMAILJS_PUBLIC_KEY,
          template_params: {
            name,
            email,
            time,
            subject,
            message,
          },
        }),
      },
    );

    if (!emailResponse.ok) {
      throw new Error("EmailJS delivery failed.");
    }

    return Response.json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error("Contact function error:", error);

    return Response.json(
      { message: "Unable to send your message." },
      { status: 500 },
    );
  }
};

export const config = {
  path: "/api/contact",
};
