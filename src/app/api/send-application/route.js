import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const formData = await request.formData();

    const vorname = formData.get("vorname");
    const nachname = formData.get("nachname");
    const email = formData.get("email");
    const telefon = formData.get("telefon");

    // Process file attachments
    const attachments = [];
    const fileFields = ["lebenslauf", "motivationsschreiben", "andereDateien"];

    for (const field of fileFields) {
      const file = formData.get(field);
      if (file && file.size > 0) {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        attachments.push({
          filename: file.name,
          content: buffer,
        });
      }
    }

    // Send email to YOUR Gmail
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["info@invinicus.ch"],
      subject: `Neue Bewerbung von ${vorname} ${nachname}`,
      html: `
        <h2>Neue Bewerbung</h2>
        <p><strong>Name:</strong> ${vorname} ${nachname}</p>
        <p><strong>Nachname:</strong> ${nachname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${telefon}</p>
      `,
      attachments: attachments,
    });

    if (error) {
      return Response.json({ error }, { status: 400 });
    }

    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
