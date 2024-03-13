import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import nodemailer from "nodemailer";

const prisma = new PrismaClient();

export default NextAuth({
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
      sendVerificationRequest: async ({
        identifier: email,
        url,
        provider: { server, from },
      }) => {
        const allowedEmail = await prisma.allowedEmail.findUnique({
          where: { email },
        });

        if (!allowedEmail) {
          // Werfen Sie hier eventuell einen Fehler oder loggen Sie den Versuch
          console.log(`Zugriff verweigert für: ${email}`);
          return;
        }

        // Nodemailer Transport konfigurieren
        const transporter = nodemailer.createTransport(server);
        const { host } = new URL(url);

        // E-Mail senden
        await transporter.sendMail({
          to: email,
          from,
          subject: `Anmeldung bei Ihrer App`,
          text: `Melden Sie sich bei Ihrer App an, indem Sie auf den folgenden Link klicken:\n\n${url}\n\n`,
          html: `<p>Melden Sie sich bei Ihrer App an, indem Sie auf den folgenden Link klicken:</p><p><a href="${url}">${url}</a></p>`,
        });
      },
    }),
  ],
  adapter: PrismaAdapter(prisma),

  callbacks: {
    session({ session, token, user }) {
      session.user.id = user.id;
      return session;
    },
  },
});
