import { prisma } from "@/utils/prisma";
import { injectable } from "inversify";
import "reflect-metadata";

@injectable()
export class SessionRepo {
  getSession(id: string) {
    return prisma.session.findUnique({
      where: {
        id,
      },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            name: true,
          },
        },
      },
    });
  }

  createSession(userId: string) {
    return prisma.session.create({
      data: {
        userId,
      },
    });
  }
}
