/*
  Warnings:

  - A unique constraint covering the columns `[name,departmentId]` on the table `Designation` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `Designation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Designation" ADD COLUMN     "name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Designation_name_departmentId_key" ON "Designation"("name", "departmentId");
