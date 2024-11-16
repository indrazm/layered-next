import { authService } from "@/applications/instance";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const { email, password } = (await request.json()) as { email: string; password: string };
  const session = await authService.signIn(email, password);
  return Response.json(session, { status: 200 });
}
