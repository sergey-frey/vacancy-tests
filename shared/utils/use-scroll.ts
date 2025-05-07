import { useEffect, useRef, useState } from "react";

export const useScroll = <Elem extends HTMLElement>() => {
  const elemRef = useRef<Elem>(null);
  const [scroll, setScroll] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    clientWidth: 0,
  });

  useEffect(() => {
    const elem = elemRef.current;

    if (!elem) return;

    const handleScroll = () => {
      setScroll({
        x: elem.scrollLeft,
        y: elem.scrollTop,
        width: elem.scrollWidth,
        height: elem.scrollHeight,
        clientWidth: elem.clientWidth,
      });
    };

    handleScroll(); // Set initial scroll position

    elem.addEventListener("scroll", handleScroll);

    return () => {
      elem.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { elemRef, scroll };
};
