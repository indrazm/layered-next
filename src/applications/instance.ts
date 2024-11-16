import { NoteRepo } from "@/infrastructure/db/noteRepo";
import { UserRepo } from "@/infrastructure/db/userRepo";
import { TYPES } from "@/infrastructure/types";
import { Container } from "inversify";
import { NoteService } from "./noteService";
import { SessionRepo } from "@/infrastructure/db/sessionRepo";
import { AuthService } from "./authService";

const container = new Container();

container.bind<NoteRepo>(TYPES.noteRepo).to(NoteRepo);
container.bind<UserRepo>(TYPES.userRepo).to(UserRepo);
container.bind<SessionRepo>(TYPES.sessionRepo).to(SessionRepo);

container.bind<NoteService>(NoteService).toSelf();
container.bind<AuthService>(AuthService).toSelf();

export const noteService = container.get<NoteService>(NoteService);
export const authService = container.get<AuthService>(AuthService);
