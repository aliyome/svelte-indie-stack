import { prisma } from "$lib/db.server";
import type { RequestHandler } from "@sveltejs/kit";

export const get: RequestHandler = async () => {
  try {
    // if we can connect to the database and make a simple query
    await prisma.user.count();
    return new Response("OK");
  } catch (error: unknown) {
    console.log("healthcheck ❌", { error });
    return new Response("ERROR", { status: 500 });
  }
};
