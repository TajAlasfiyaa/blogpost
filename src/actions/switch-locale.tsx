"use server";

import { cookies, headers } from "next/headers";

export async function switchLocaleAction(value: string) {
  cookies().set("language", value, { maxAge: 99999999 });
  //   headers().set("language", value);

  // It does not matter what we return here
  return {
    status: "success",
  };
}
