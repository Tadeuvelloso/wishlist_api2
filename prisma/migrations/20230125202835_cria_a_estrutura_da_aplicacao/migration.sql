-- CreateTable
CREATE TABLE "movies" (
    "id" SERIAL NOT NULL,
    "genre" VARCHAR(50) NOT NULL,
    "name" TEXT NOT NULL,
    "platform" TEXT NOT NULL,
    "description" TEXT,
    "watched" BOOLEAN NOT NULL,
    "entity" TEXT NOT NULL,

    CONSTRAINT "movies_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "movies_name_key" ON "movies"("name");
