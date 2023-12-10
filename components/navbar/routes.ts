import { customMetadata } from "@/site.config";

export const routes = {
  ar: [
    { children: "معلومات", href: "/about" },
    { children: "مقالات", href: "/articles" },
    { children: "مشاريع", href: "/projects" },
    { children: "حجز موعد", href: customMetadata.scheduleUrl },
  ],
  en: [
    { children: "About", href: "/about" },
    { children: "Articles", href: "/articles" },
    { children: "Projects", href: "/projects" },
    { children: "Schedule", href: customMetadata.scheduleUrl },
  ],
};
