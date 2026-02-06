-- AlterTable
ALTER TABLE "User" ADD COLUMN     "resetPasswordExpires" BIGINT,
ADD COLUMN     "resetPasswordToken" TEXT;
