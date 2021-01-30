import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import colors from "../ressources/colors";
import pages from "../ressources/pages";

const useCurrentColor = (): string => {
  const { pathname } = useLocation();

  const [currentColor, setCurrentColor] = useState(colors.default);

  useEffect(() => {
    switch (pathname) {
      case pages[1].url:
        setCurrentColor(colors.experiences);
        break;

      case pages[2].url:
        setCurrentColor(colors.formations);
        break;

      case pages[3].url:
        setCurrentColor(colors.projects);
        break;

      case pages[0].url:
      default:
        setCurrentColor(colors.default);
        break;
    }
  }, [pathname]);

  return currentColor;
};

export default useCurrentColor;
