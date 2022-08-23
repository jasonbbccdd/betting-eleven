-- CreateTable
CREATE TABLE "Tournament" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT,
    "logo" TEXT,
    "confederationId" INTEGER,

    CONSTRAINT "Tournament_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Confederation" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT,
    "logo" TEXT,
    "map" TEXT,

    CONSTRAINT "Confederation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Tournament_code_key" ON "Tournament"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Confederation_code_key" ON "Confederation"("code");

-- AddForeignKey
ALTER TABLE "Tournament" ADD CONSTRAINT "Tournament_confederationId_fkey" FOREIGN KEY ("confederationId") REFERENCES "Confederation"("id") ON DELETE SET NULL ON UPDATE CASCADE;
