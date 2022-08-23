import { PrismaClient } from '@prisma/client'
import { add } from 'date-fns'
import { userInfo } from 'os'

const prisma = new PrismaClient()

// A `main` function so that we can use async/await
async function main() {
  await prisma.user.deleteMany({})
  const firstUser = await prisma.user.create({
    data:{
      email:'user@gmail.com',
      name : 'first user',
      social:{
        facebook: 'first user',
        linkedin: 'first user',
      },

    }
  })
  console.log(firstUser)
}

main()
  .catch((e: Error) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    // Disconnect Prisma Client
    //await prisma.disconnect()
  })
