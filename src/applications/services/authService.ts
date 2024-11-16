import { SessionRepo } from "@/infrastructure/db/sessionRepo";
import { UserRepo } from "@/infrastructure/db/userRepo";
import { User } from "@prisma/client";
import { inject, injectable } from "inversify";
import bcrypt from "bcrypt";
import { TYPES } from "@/infrastructure/types";
import "reflect-metadata";

@injectable()
export class AuthService {
  private userRepository: UserRepo;
  private sessionRepository: SessionRepo;

  constructor(@inject(TYPES.userRepo) userRepository: UserRepo, @inject(TYPES.sessionRepo) sessionRepository: SessionRepo) {
    this.userRepository = userRepository;
    this.sessionRepository = sessionRepository;
  }

  public async signUp(user: Omit<User, "id">) {
    // Check if the user already exists
    const existingUser = await this.userRepository.getUserByEmail(user.email);
    if (existingUser) {
      throw new Error("User already exists");
    }

    // Hash the password
    user.password = await bcrypt.hash(user.password, 10);

    return this.userRepository.createUser(user);
  }

  public async signIn(email: string, password: string) {
    // Check if the user exists
    const user = await this.userRepository.getUserByEmail(email);
    if (!user) {
      throw new Error("User not found");
    }

    // Compare the password
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      throw new Error("Invalid password");
    }

    // Create a session
    return this.sessionRepository.createSession(user.id);
  }
}
