"use server";

import { cookies, headers } from "next/headers";

export async function switchLocaleAction(value: string) {
  cookies().set("language", value);
  //   headers().set("language", value);

  // It does not matter what we return here
  return {
    status: "success",
  };
}
