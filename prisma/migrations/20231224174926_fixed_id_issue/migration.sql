/*
  Warnings:

  - The primary key for the `Vaga` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Vaga" DROP CONSTRAINT "Vaga_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Vaga_pkey" PRIMARY KEY ("id");
