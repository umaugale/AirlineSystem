    -- CreateTable
    CREATE TABLE "User" (
        "id" TEXT NOT NULL,
        "name" TEXT NOT NULL,
        "email" TEXT NOT NULL,
        "password" TEXT NOT NULL,
        "gender" TEXT,
        "contact" TEXT,
        "age" INTEGER,
        "street" TEXT,
        "city" TEXT,
        "pin" TEXT,
        "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

        CONSTRAINT "User_pkey" PRIMARY KEY ("id")
    );

    -- CreateTable
    CREATE TABLE "Airline" (
        "id" TEXT NOT NULL,
        "name" TEXT NOT NULL,
        "code" TEXT NOT NULL,
        "description" TEXT,
        "totalSeats" INTEGER NOT NULL,
        "economySeats" INTEGER NOT NULL,
        "businessSeats" INTEGER NOT NULL,
        "firstClassSeats" INTEGER NOT NULL,
        "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

        CONSTRAINT "Airline_pkey" PRIMARY KEY ("id")
    );

    -- CreateTable
    CREATE TABLE "FlightBooking" (
        "id" TEXT NOT NULL,
        "origin" TEXT NOT NULL,
        "destination" TEXT NOT NULL,
        "date" TIMESTAMP(3) NOT NULL,
        "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

        CONSTRAINT "FlightBooking_pkey" PRIMARY KEY ("id")
    );

    -- CreateIndex
    CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

    -- CreateIndex
    CREATE UNIQUE INDEX "Airline_code_key" ON "Airline"("code");
