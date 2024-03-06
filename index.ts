import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      role: "",
      email: "",
      surname: "",
      lastname: "",
      department: "",
      position: "",
      contract: 0,
      birthday: new Date(""),
      password: "",
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
