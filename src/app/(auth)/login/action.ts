"use server";

import { authService } from "@/applications/instance";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAction(prevState: unknown, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const session = await authService.signIn(email, password);
  (await cookies()).set("session", JSON.stringify(session));

  return redirect("/dashboard");
}
