import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const authOptions = {
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
  ],
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: "/auth/signin", // A custom sign-in page
    signOut: "/auth/signout", // A custom sign-out page
    error: "/auth/error", // A custom error page
    verifyRequest: "/auth/verify-request", // A custom verify request page
  },
  callbacks: {
    async session({ session, user }) {
      // Send properties to the client, like user's role from your Prisma schema
      session.user.id = user.id;
      session.user.role = user.role;
      session.user.surname = user.surname;
      return session;
    },
  },
};

export default NextAuth(authOptions);
