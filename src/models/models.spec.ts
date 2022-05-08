import { beforeAll, expect, it } from "vitest";
import { createUser } from "./user.server";
import { prisma } from "$lib/db.server";

beforeAll(async () => {
  await prisma.user.deleteMany();
});

it("should create user", async () => {
  const u = await createUser("xxx@yyy.zzz", "123456");
  expect(u.email).toBe("xxx@yyy.zzz");
});
