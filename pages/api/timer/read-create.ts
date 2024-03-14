import prisma from "@/lib/prisma";

// im folgenden passiert read und create (CRUD)

async function readTimer() {
  await prisma.user.create({
    data: {
      // hier müssen die time stamps kreiert werden, bzw. an die Datenbank gesendet werden.
      // Start Time Stamp
      // Stop Time Stamp
    },
  });

  const allUsers = await prisma.user.findMany({
    where: {
      email: "js.schwerdt@gmail.com",
      // hier sollte nicht die mail hard gecoded sein, sondern die mail der aktiven session stehen. also vllt mit get session??
      timers: {
       // hier sollten die timer intervalle abgerufen werden, die bereits in der datenbank erstellt wurden.
      },
    },
  });
  console.dir(allUsers, { depth: null }); // keene ahnung was das macht!
}

/// müsste das weiter unten dann nicht in einem anderen dokument stehen?? Die Funktion muss dann ausgeführt werden, wenn man auf stop klickt, 
/// damit dann der Start Time Stamp und der Stop Time Stamp an die Datenbank weitergeleitet werden können.  

readTimer()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
