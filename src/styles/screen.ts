import { css } from "@emotion/css";
import facepaint from "facepaint";

const SCREEN_SIZE = ["640px", "768px", "1024px", "1280px", "1536px"];
export const responsive = facepaint(
  SCREEN_SIZE.map((size) => `@media (min-width: ${size})`)
);
