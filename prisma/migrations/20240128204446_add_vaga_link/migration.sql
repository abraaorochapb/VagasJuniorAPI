/*
  Warnings:

  - Added the required column `vaga_link` to the `Vaga` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Vaga" ADD COLUMN     "vaga_link" TEXT NOT NULL;
