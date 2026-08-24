import { getPrisma } from '@/lib/db';

export const runtime = 'nodejs';

export async function GET() {
  try {
    const prisma = getPrisma();
    await prisma.$queryRaw`SELECT 1`;
    return Response.json({ ok: true, service: 'institute9-platform', database: 'up' });
  } catch {
    return Response.json({ ok: false, service: 'institute9-platform', database: 'down' }, { status: 503 });
  }
}
