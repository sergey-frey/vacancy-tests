import { Currency } from "@/entites/ticket";
import { createParser } from "nuqs";

export const currencyQueryStateParser = createParser({
  parse: (value) => value.toString() as Currency,
  serialize: (value) => value,
});

currencyQueryStateParser.clearOnDefault = false;
