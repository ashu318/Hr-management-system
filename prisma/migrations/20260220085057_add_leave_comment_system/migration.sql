-- CreateTable
CREATE TABLE "LeaveComment" (
    "id" TEXT NOT NULL,
    "leaveId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LeaveComment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "LeaveComment_leaveId_idx" ON "LeaveComment"("leaveId");

-- CreateIndex
CREATE INDEX "LeaveComment_userId_idx" ON "LeaveComment"("userId");

-- AddForeignKey
ALTER TABLE "LeaveComment" ADD CONSTRAINT "LeaveComment_leaveId_fkey" FOREIGN KEY ("leaveId") REFERENCES "LeaveApplication"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LeaveComment" ADD CONSTRAINT "LeaveComment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
