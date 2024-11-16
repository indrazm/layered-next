import { prisma } from "@/utils/prisma";
import { User } from "@prisma/client";
import { injectable } from "inversify";
import "reflect-metadata";

@injectable()
export class UserRepo {
  async getAllUsers() {
    return await prisma.user.findMany();
  }

  async getUserById(id: string) {
    return await prisma.user.findUnique({
      where: { id: id },
    });
  }

  async getUserByEmail(email: string) {
    return await prisma.user.findUnique({
      where: { email: email },
    });
  }

  async createUser(data: Omit<User, "id">) {
    return await prisma.user.create({
      data: data,
    });
  }

  async updateUser(id: string, data: Partial<User>) {
    return await prisma.user.update({
      where: { id: id },
      data: data,
    });
  }

  async deleteUser(id: string) {
    return await prisma.user.delete({
      where: { id: id },
    });
  }
}
