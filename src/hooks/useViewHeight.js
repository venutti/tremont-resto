import { useEffect } from "react";

const useViewHeight = () => {
  useEffect(() => {
    const setViewHeigth = () => {
      document
        .querySelector(":root")
        .style.setProperty("--vh", window.innerHeight / 100 + "px");
    };

    setViewHeigth();

    window.addEventListener("resize", setViewHeigth);

    return () => window.removeEventListener("resize", setViewHeigth);
  }, []);
};

export default useViewHeight;
