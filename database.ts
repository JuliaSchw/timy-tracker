import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      role: "Admin",
      email: "js.schwerdt@gmail.com",
      surname: "Julia",
      lastname: "Schwerdtfeger",
      department: "Tester",
      position: "Tester",
      contract: 40,
      cVacation: 100,
      birthday: new Date("1994-05-27"),
      password: "test",
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
