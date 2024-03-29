# New Next Project

### Local Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run dev` to start a development server and open the displayed URL in a browser.

Use `npm run test` to run the tests.

### Scripts

You can use the following commands:

- `npm run dev` to start a development server
- `npm run build` to build the project
- `npm run start` to start a production server
- `npm run test` to run the tests
- `npm run lint` to run the linter

- `prisma format` to format the prisma schema
- `npx prisma studio` to open your data base in prisma studio
- `npx ts-node database.ts` run the code to CREATE an entry
- `npx prisma migrate dev` If you also need to apply migrations to your database (i.e., you've made changes to your schema that affect the database structure)
- `npx prisma migrate dev --name init`
- `npx prisma generate` generates or updates the Prisma Client based on the latest changes in your Prisma schema
