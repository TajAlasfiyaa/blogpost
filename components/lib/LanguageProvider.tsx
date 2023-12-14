// src/lib/LanguageProvider.tsx
import { ClientLanguageProvider } from "@/components/lib/ClientLanguageProvider";
import { setLanguageTag, languageTag } from "@/paraglide/runtime";
import { cookies, headers } from "next/headers";

export default function LanguageProvider(props: { children: React.ReactNode }) {
  setLanguageTag(() => {
    return cookies().get("language")?.value as any;
  });
  return (
    <>
      <ClientLanguageProvider language={languageTag()} />
      {props.children}
    </>
  );
}
