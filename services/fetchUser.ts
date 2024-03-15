// services/userService.ts
import { getSession } from "next-auth/react";
import prisma from "@/lib/prisma";

interface UserBasicInfo {
  surname?: string | null;
  lastname?: string | null;
}

export const fetchUserSurnameAndLastnameBySession = async (
  req: any
): Promise<UserBasicInfo | null> => {
  const session = await getSession({ req });

  // Falls keine Session vorhanden ist, tue nichts
  if (!session || !session.user?.email) return null;

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
      select: {
        surname: true,
        lastname: true,
      },
    });

    return user;
  } catch (error) {
    console.error("Fehler beim Abrufen des Benutzers:", error);
    return null;
  }
};
