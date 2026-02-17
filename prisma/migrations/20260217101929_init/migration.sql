-- AlterTable
ALTER TABLE "User" ADD COLUMN     "spouseName" TEXT;

-- CreateTable
CREATE TABLE "FinancialDetails" (
    "id" TEXT NOT NULL,
    "bankName" TEXT,
    "accountNo" TEXT,
    "ifscCode" TEXT,
    "panNumber" TEXT,
    "uanNo" TEXT,
    "esicNo" TEXT,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FinancialDetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PayrollSettings" (
    "id" TEXT NOT NULL,
    "overtime" BOOLEAN NOT NULL DEFAULT false,
    "conveyance" BOOLEAN NOT NULL DEFAULT false,
    "medical" BOOLEAN NOT NULL DEFAULT false,
    "pf" BOOLEAN NOT NULL DEFAULT false,
    "es" BOOLEAN NOT NULL DEFAULT false,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PayrollSettings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FinancialDetails_userId_key" ON "FinancialDetails"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "PayrollSettings_userId_key" ON "PayrollSettings"("userId");

-- AddForeignKey
ALTER TABLE "FinancialDetails" ADD CONSTRAINT "FinancialDetails_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PayrollSettings" ADD CONSTRAINT "PayrollSettings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
