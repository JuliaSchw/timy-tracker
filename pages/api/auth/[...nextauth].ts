import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import nodemailer from "nodemailer";
import prisma from "@/lib/prisma";
import { NextAuthOptions } from "next-auth";

const nextAuthOptions: NextAuthOptions = {
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER as string,
      from: process.env.EMAIL_FROM as string,
      sendVerificationRequest: async ({
        identifier: email,
        url,
        provider: { server, from },
      }) => {
        const allowedEmail = await prisma.allowedEmail.findUnique({
          where: { email },
        });

        if (!allowedEmail) {
          console.log(`Access denied for: ${email}`);
          return;
        }

        const transporter = nodemailer.createTransport(server);
        const { host } = new URL(url);

        await transporter.sendMail({
          to: email,
          from,
          subject: `Sign in to Your App`,
          text: `Sign in to your app by clicking the following link:\n\n${url}\n\n`,
          html: `<p>Sign in to your app by clicking the following link:</p><p><a href="${url}">${url}</a></p>`,
        });
      },
    }),
  ],
  adapter: PrismaAdapter(prisma),
  callbacks: {
    async session({ session, user }) {
      console.log("Session: ", session);
      console.log("User: ", user);
      return session;
    },
  },
};
export { nextAuthOptions };
export default NextAuth(nextAuthOptions);
