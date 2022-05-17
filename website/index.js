const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  await prisma.volunteer.create({
    data: {
      name: "Delan",
      email: "delan@prisma.io",
      profile: {
        create: { bio: "I love sushi" },
      },
    },
  });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
