import { z } from "zod";

const contactSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  practiceArea: z.string().optional(),
  message: z.string().min(5),
  howHeard: z.string().optional(),
  preferredContact: z.enum(["Email", "Phone"]).optional(),
  urgency: z.string().optional(),
  type: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return Response.json(
        { success: false, error: "Invalid submission data." },
        { status: 400 }
      );
    }

    // Log submission (placeholder for Resend/SendGrid integration)
    console.log("[Contact Submission]", {
      timestamp: new Date().toISOString(),
      ...parsed.data,
    });

    return Response.json(
      { success: true, message: "Message received. We will be in touch within one business day." },
      { status: 200 }
    );
  } catch {
    return Response.json(
      { success: false, error: "Internal server error." },
      { status: 500 }
    );
  }
}
