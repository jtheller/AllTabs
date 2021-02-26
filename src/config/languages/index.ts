import { LanguageType } from "../../lib/types/miscTypes";

import English_Canada from "./en-CA";
// import French_Canada from "./fr-CA";

export const languages: LanguageType[] = [
  {
    id: "en-CA",
    description: "English (Canada)",
    dictionary: English_Canada,
    default: true
  }
];

export type DefaultDictionary = typeof English_Canada;