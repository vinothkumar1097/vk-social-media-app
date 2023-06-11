import { useEffect, useState } from "react";

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    width: null,
    height: null,
  });
  useEffect(() => {
    const handleScreenSize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    handleScreenSize();
    window.addEventListener("resize", handleScreenSize);
    return () => {
      // cleanup
      window.removeEventListener("resize", handleScreenSize);
    };
  }, []);
  return screenSize;
};
export default useScreenSize;
