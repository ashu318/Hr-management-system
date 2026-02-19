/*
  Warnings:

  - You are about to drop the column `total` on the `LeaveBalance` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId,leaveType,year]` on the table `LeaveBalance` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "LeaveBalance_userId_leaveType_key";

-- AlterTable
ALTER TABLE "LeaveBalance" DROP COLUMN "total",
ADD COLUMN     "allocated" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "remaining" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "used" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "year" INTEGER NOT NULL DEFAULT 2025;

-- CreateIndex
CREATE UNIQUE INDEX "LeaveBalance_userId_leaveType_year_key" ON "LeaveBalance"("userId", "leaveType", "year");
