import { authService } from "@/applications/instance";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const newUser = await authService.signUp(body);
  return Response.json(newUser, { status: 201 });
}
