import NextAuth from "next-auth";
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  /**
   * Erweitert die Session-Schnittstelle um benutzerdefinierte Felder.
   */
  interface Session {
    user: {
      id: string;
      email?: string;
      surname?: string;
      lastname?: string;
    } & Partial<DefaultSession["user"]>;
  }
  interface ExtendedUser {
    id: string;
    email: string;
    surname: string;
    lastname: string;
  }
}
