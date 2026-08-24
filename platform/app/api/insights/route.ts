import { getPrisma } from '@/lib/db';

export const runtime = 'nodejs';

export async function GET() {
  try {
    const prisma = getPrisma();
    const posts = await prisma.blogPost.findMany({ where: { published: true }, orderBy: { publishedAt: 'desc' }, take: 20 });
    return Response.json({ posts });
  } catch {
    return Response.json({ posts: [] });
  }
}
