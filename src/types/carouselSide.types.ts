import type { AmenityImage } from "./animateImage.types";

type Side = "prev" | "next";

export interface PropsSide {
  image: AmenityImage;
  side: Side;
  onClick: () => void;
}
