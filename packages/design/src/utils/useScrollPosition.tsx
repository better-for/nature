import { useRef, useLayoutEffect } from 'react';

export const isBrowser = typeof window !== `undefined`;

const getScrollPosition = ({
  useWindow,
}: {
  useWindow: boolean;
}): { x: number; y: number } => {
  if (!isBrowser) return { x: 0, y: 0 };

  const position = document.body.getBoundingClientRect();

  return useWindow
    ? { x: window.scrollX, y: window.scrollY }
    : { x: position.left, y: position.top };
};

export const useScrollPosition = (
  effect: Function,
  deps: any[],
  useWindow: boolean,
  wait: number
) => {
  const position = useRef(getScrollPosition({ useWindow }));

  let throttleTimeout: null | number = null;

  const callBack = () => {
    const currPos = getScrollPosition({ useWindow });
    effect({ prevPos: position.current, currPos });
    position.current = currPos;
    throttleTimeout = null;
  };

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout === null) {
          throttleTimeout = window.setTimeout(callBack, wait);
        }
      } else {
        callBack();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, deps);
};
