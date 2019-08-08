import debounce from "lodash.debounce";
import { createContext, useContext, useEffect, useState } from "react";

type ScrollerContextType = {
  scrollTop: number;
};

const ScrollerContext = createContext<ScrollerContextType>({
  scrollTop: 0,
});

type ScrollerProviderProps = {
  delay?: number;
};

export const ScrollerProvider: React.FC<ScrollerProviderProps> = ({
  children,
  delay = 10,
}) => {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const getWindowScrollTop = (): number =>
      window.pageYOffset || document.documentElement.scrollTop;

    const scrollHandler = debounce(() => {
      window.requestAnimationFrame(() => {
        setScrollTop(getWindowScrollTop());
      });
    }, delay);

    window.addEventListener("scroll", scrollHandler);

    scrollHandler(); // Call on first render

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <ScrollerContext.Provider value={{ scrollTop }}>
      {children}
    </ScrollerContext.Provider>
  );
};

export const useScrollTop = () => {
  const { scrollTop } = useContext(ScrollerContext);

  return scrollTop;
};
