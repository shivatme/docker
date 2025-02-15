import { Prisma, PrismaClient } from "@prisma/client";
import express from "express";

const app = express();

const prisma = new PrismaClient();

app.get("/users", async (req, res) => {
  const response = await prisma.user.findMany();
  res.send(response);
});

app.post("/user", async (req, res) => {
  await prisma.user.create({
    data: {
      email: Math.random().toString(36).substring(7) + "@gmail.com",
      password: Math.random().toString(36).substring(7),
    },
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
