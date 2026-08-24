import { getPrisma } from '@/lib/db';
import { courses as fallbackCourses } from '@/lib/courses';

export const runtime = 'nodejs';

export async function GET() {
  try {
    const prisma = getPrisma();
    const courses = await prisma.course.findMany({ where: { active: true }, orderBy: { name: 'asc' } });
    return Response.json({ courses });
  } catch {
    return Response.json({ courses: fallbackCourses, source: 'fallback' });
  }
}
