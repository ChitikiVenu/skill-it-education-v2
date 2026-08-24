import { z } from 'zod';
import { getPrisma } from '@/lib/db';

export const runtime = 'nodejs';

const LeadSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(180),
  phone: z.string().trim().min(7).max(30),
  interest: z.enum(['Cyber Security', 'AI Engineering', 'Data Science']),
  message: z.string().trim().max(2000).optional().or(z.literal('')),
  consent: z.union([z.literal('true'), z.literal(true)]),
});

export async function GET() {
  return Response.json({ ok: true, service: 'Institute 9 leads API' });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = LeadSchema.parse(body);
    const prisma = getPrisma();
    const lead = await prisma.lead.create({
      data: {
        name: data.name,
        email: data.email.toLowerCase(),
        phone: data.phone,
        interest: data.interest,
        message: data.message || null,
        consent: true,
        source: 'website',
      },
      select: { id: true },
    });
    return Response.json({ ok: true, id: lead.id }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) return Response.json({ ok: false, message: 'Please check the form details and consent.' }, { status: 400 });
    console.error('lead_create_error', error);
    return Response.json({ ok: false, message: 'We could not save your request. Please try again.' }, { status: 500 });
  }
}
