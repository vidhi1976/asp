// lib/prisma.ts
import { PrismaClient } from "@prisma/client";

// Avoid instantiating multiple Prisma Clients in development
const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ['query', 'info', 'warn', 'error'], // Optional: Logging for debugging
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;