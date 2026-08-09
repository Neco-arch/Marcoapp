-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "users_Macronutrients" JSONB NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usergoal" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "weightGoal" DOUBLE PRECISION,
    "weightKg" DOUBLE PRECISION,
    "heightCm" DOUBLE PRECISION,

    CONSTRAINT "Usergoal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FoodHistory" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "carb" DOUBLE PRECISION,
    "protein" DOUBLE PRECISION,
    "fat" DOUBLE PRECISION,
    "loggedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FoodHistory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Usergoal_userId_key" ON "Usergoal"("userId");

-- AddForeignKey
ALTER TABLE "Usergoal" ADD CONSTRAINT "Usergoal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FoodHistory" ADD CONSTRAINT "FoodHistory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
