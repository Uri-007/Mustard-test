import { useCallback, useRef } from "react";
import type { OptionsSwipe } from "../types/dragSwipe.types";

export function useDragSwipe({
  onNext,
  onPrev,
  threshold = 30,
  moveThreshold = 4,
}: OptionsSwipe) {
  const dragStartX = useRef<number | null>(null);
  const isDraggingRef = useRef(false);

  const handleStart = useCallback((x: number) => {
    dragStartX.current = x;
    isDraggingRef.current = false;
  }, []);

  const handleMove = useCallback(
    (x: number) => {
      if (
        dragStartX.current !== null &&
        Math.abs(x - dragStartX.current) > moveThreshold
      ) {
        isDraggingRef.current = true;
      }
    },
    [moveThreshold],
  );

  const handleEnd = useCallback(
    (x: number) => {
      if (dragStartX.current === null) return;
      const diff = x - dragStartX.current;
      if (Math.abs(diff) > threshold) {
        if (diff < 0) {
          onNext();
        } else {
          onPrev();
        }
      }
      dragStartX.current = null;
      requestAnimationFrame(() => {
        isDraggingRef.current = false;
      });
    },
    [threshold, onNext, onPrev],
  );

  const isDragging = useCallback(() => isDraggingRef.current, []);

  const mouseHandlers = {
    onMouseDown: (e: React.MouseEvent) => handleStart(e.clientX),
    onMouseMove: (e: React.MouseEvent) => handleMove(e.clientX),
    onMouseUp: (e: React.MouseEvent) => handleEnd(e.clientX),
    onMouseLeave: (e: React.MouseEvent) => handleEnd(e.clientX),
  };

  const touchHandlers = {
    onTouchStart: (e: React.TouchEvent) => handleStart(e.touches[0].clientX),
    onTouchMove: (e: React.TouchEvent) => handleMove(e.touches[0].clientX),
    onTouchEnd: (e: React.TouchEvent) => handleEnd(e.changedTouches[0].clientX),
  };

  return { isDragging, mouseHandlers, touchHandlers };
}
