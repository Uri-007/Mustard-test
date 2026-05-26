import { useCallback, useState } from "react";
import {
  type AnimState,
  type SlideDirection,
  type UseCarouselAnimationReturn,
} from "../types/slideDirection.types";

export function useCarouselAnimation(): UseCarouselAnimationReturn {
  const [animState, setAnimState] = useState<AnimState>({
    animKey: 0,
    direction: "next",
  });

  const triggerAnimation = useCallback((dir: SlideDirection) => {
    setAnimState((prev) => ({
      animKey: prev.animKey + 1,
      direction: dir,
    }));
  }, []);

  return { animState, triggerAnimation };
}
