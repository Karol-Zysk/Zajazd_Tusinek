import { useEffect, useState } from "react";

export type WindowType = {
  offsetY: number | undefined;
};

export function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/

  const [windowScroll, setWindowScroll] = useState<WindowType>({
    offsetY: undefined,
  });
  function handleScroll(): void {
    // Set window width/height to state
    setWindowScroll({
      offsetY: window.pageYOffset,
    });
  }

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== "undefined") {
      handleScroll();

      // Add event listener
      window.addEventListener("scroll", handleScroll);

      // Call handler right away so state gets updated with initial window size
      handleScroll();

      // Remove event listener on cleanup
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowScroll;
}
