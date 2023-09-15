-- DropForeignKey
ALTER TABLE "Technology" DROP CONSTRAINT "Technology_projectId_fkey";

-- AlterTable
ALTER TABLE "Technology" ALTER COLUMN "projectId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Technology" ADD CONSTRAINT "Technology_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;
