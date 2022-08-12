import { Dispatch, useState } from "react";
import { useRouter } from "next/router";

export type Language = "EN" | "DE";
export const useLanguage = (): [Language, Dispatch<Language>] => {
  const router = useRouter();
  const lang =
    router.query.state && router.isReady
      ? (router.query.state as Language)
      : "DE";

  const [language, setLanguage] = useState<Language>(lang);
  return [language, setLanguage];
};
