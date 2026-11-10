import { PrismaClient } from '@prisma/client'
import { hashPassword } from '../src/password.js'

const prisma = new PrismaClient()

try {
  const users = await prisma.user.findMany({ select: { id: true, password: true } })
  let migrated = 0

  for (const user of users) {
    if (user.password.startsWith('$argon2id$')) continue

    await prisma.user.update({
      where: { id: user.id },
      data: { password: await hashPassword(user.password) }
    })
    migrated++
  }

  console.log(`${migrated} senha(s) convertida(s) para Argon2id.`)
}
finally {
  await prisma.$disconnect()
}
