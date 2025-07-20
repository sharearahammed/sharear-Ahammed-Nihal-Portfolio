import { useEffect, useState } from "react";

const useIsMediumUp = () => {
  const [isMediumUp, setIsMediumUp] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMediumUp(window.innerWidth >= 900);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return isMediumUp;
};

export default useIsMediumUp;
