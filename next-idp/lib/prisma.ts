import { PrismaClient } from "@prisma/client";

declare var global: {
    prisma:PrismaClient
}

const prisma = global.prisma || new PrismaClient()

global.prisma = prisma

export default prisma