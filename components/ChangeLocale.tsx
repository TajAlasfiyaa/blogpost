"use client";
import React from "react";
import { switchLocaleAction } from "@/actions/switch-locale";
import {
  AvailableLanguageTag,
  availableLanguageTags,
} from "@/src/paraglide/runtime";
import { redirect, usePathname } from "next/navigation";
import * as m from "@/paraglide/messages";

export default function ChangeLocale({
  locale,
}: {
  locale: AvailableLanguageTag;
}) {
  const pathname = usePathname();
  const handleLocaleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    switchLocaleAction(event.target.value);
    redirect(pathname);
  };

  return (
    <div>
      <select onChange={handleLocaleChange} value={locale}>
        {availableLanguageTags.map((lang) => (
          <option value={lang}>{lang == "ar" ? "العربية" : "english"}</option>
        ))}
      </select>
    </div>
  );
}
