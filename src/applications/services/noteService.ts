import { NoteRepo } from "@/infrastructure/db/noteRepo";
import { TYPES } from "@/infrastructure/types";
import { Note } from "@prisma/client";
import { inject, injectable } from "inversify";

@injectable()
export class NoteService {
  private noteRepository: NoteRepo;

  constructor(@inject(TYPES.noteRepo) noteRepository: NoteRepo) {
    this.noteRepository = noteRepository;
  }

  public async getNotes(userId: string) {
    return this.noteRepository.getAll(userId);
  }

  public async getNoteById(noteId: string) {
    return this.noteRepository.getOne(noteId);
  }

  public async createNote(note: Omit<Note, "id">) {
    return this.noteRepository.create(note);
  }

  public async updateNote(noteId: string, note: Partial<Note>) {
    return this.noteRepository.update(noteId, note);
  }

  public async deleteNote(noteId: string) {
    return this.noteRepository.delete(noteId);
  }
}
