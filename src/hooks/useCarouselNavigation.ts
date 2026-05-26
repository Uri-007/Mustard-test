import { useCallback } from "react";
import type {
  OptionsNavigation,
  UseCarouselNavigationReturn,
} from "../types/carouselNavigation.types";
import type { SlideDirection } from "../types/slideDirection.types";

export function useCarouselNavigation({
  total,
  current,
  onChange,
  triggerAnimation,
}: OptionsNavigation): UseCarouselNavigationReturn {
  const prevIndex = (current - 1 + total) % total;
  const nextIndex = (current + 1) % total;

  const goTo = useCallback(
    (index: number) => {
      const normalized = (index + total) % total;

      if (normalized === current) return;

      const dir: SlideDirection =
        (normalized - current + total) % total <= total / 2 ? "next" : "prev";
      triggerAnimation(dir);
      onChange(normalized);
    },
    [current, total, onChange, triggerAnimation],
  );
  const prev = useCallback(() => {
    triggerAnimation("prev");
    onChange(prevIndex);
  }, [prevIndex, onChange, triggerAnimation]);

  const next = useCallback(() => {
    triggerAnimation("next");
    onChange(nextIndex);
  }, [nextIndex, onChange, triggerAnimation]);

  return { prev, next, goTo, prevIndex, nextIndex };
}
