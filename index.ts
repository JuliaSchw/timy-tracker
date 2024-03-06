import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      role: "Nutzer",
      email: "t.nauerz@uronovis.de",
      surname: "Tobias",
      lastname: "Nauerz",
      department: "Innendienst",
      position: "Customer-Service",
      contract: 38.5,
      birthday: new Date("2001-01-01"),
      password: "uronovis",
    },
  });

  const allUsers = await prisma.user.findMany({});
  console.dir(allUsers, { depth: null });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
