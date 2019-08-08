import debounce from "lodash.debounce";
import React, { createContext, useContext, useEffect, useState } from "react";

type ResizeContextProps = {
  screenWidth: number;
  setScreenWidth: (screenWidth: number) => void;
};

const ResizerContext = createContext<ResizeContextProps>({
  screenWidth: 0,
  setScreenWidth: () => {
    console.warn("ResizerProvider is not initialized");
  },
});

type ResizerProviderProps = {
  delay?: number;
};

export const ResizerProvider: React.FC<ResizerProviderProps> = ({
  children,
  delay = 500,
}) => {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const getScreenWidth = (): number => screen.width;

    const resizeHandler = debounce(() => {
      setScreenWidth(getScreenWidth());
    }, delay);

    window.addEventListener("resize", resizeHandler);

    resizeHandler(); // Call on first render

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <ResizerContext.Provider value={{ screenWidth, setScreenWidth }}>
      {children}
    </ResizerContext.Provider>
  );
};

export const useScreenWidth = () => {
  const { screenWidth } = useContext(ResizerContext);

  return screenWidth;
};
