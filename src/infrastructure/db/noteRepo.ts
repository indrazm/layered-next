import { prisma } from "@/utils/prisma";
import { Note } from "@prisma/client";
import { injectable } from "inversify";
import "reflect-metadata";

@injectable()
export class NoteRepo {
  public async getAll(userId: string) {
    return prisma.note.findMany({
      where: {
        authorId: userId,
      },
    });
  }

  public async getOne(noteId: string) {
    return prisma.note.findUnique({
      where: {
        id: noteId,
      },
    });
  }

  public async create(note: Omit<Note, "id">) {
    return prisma.note.create({
      data: note,
    });
  }

  public async update(noteId: string, note: Partial<Note>) {
    return prisma.note.update({
      where: {
        id: noteId,
      },
      data: note,
    });
  }

  public async delete(noteId: string) {
    return prisma.note.delete({
      where: {
        id: noteId,
      },
    });
  }
}
