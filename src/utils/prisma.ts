// If you are deploying to Vercel
// you should use the singleton pattern to avoid ->
// creating a new PrismaClient instance on every request.

import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();
