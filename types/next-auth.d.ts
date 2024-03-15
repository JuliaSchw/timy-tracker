import NextAuth from "next-auth";
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  /**
   * Erweitert die Session-Schnittstelle um benutzerdefinierte Felder.
   */

  //ich glaube die ersten zwei interfaces sind unnötig ?
  // types/index.ts

  export interface User {
    id: string;
    email?: string;
    emailVerified?: Date;
    image?: string;
    surname?: string;
    lastname?: string;
    birthday?: Date;
    accounts: Account[];
    sessions: Session[];
    timers: Timer[];
  }

  export interface Account {
    id: string;
    userId: string;
    type: string;
    provider: string;
    providerAccountId: string;
    refresh_token?: string;
    access_token?: string;
    expires_at?: number;
    token_type?: string;
    scope?: string;
    id_token?: string;
    session_state?: string;
    user: User;
  }

  export interface Session {
    id: string;
    sessionToken: string;
    userId: string;
    expires: Date;
    user: User;
  }

  export interface Timer {
    id: string;
    startTime?: Date;
    endTime?: Date;
    userId: string;
    user: User;
  }
}
