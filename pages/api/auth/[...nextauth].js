import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default NextAuth({
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER, // Konfiguration Ihres E-Mail-Servers
      from: process.env.EMAIL_FROM, // Die "Von"-Adresse für E-Mails
    }),
  ],
  adapter: PrismaAdapter(prisma),
  // Weitere Konfigurationsoptionen...
});
