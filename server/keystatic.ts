import "server-only";

import keystaticConfig from "@/keystatic.config";
import { createReader } from "@keystatic/core/reader";
import { cache } from "react";

export const getReader = cache(() =>
  createReader(process.cwd(), keystaticConfig)
);
export const getHomeSingleton = cache(getReader().singletons.home.readOrThrow);
