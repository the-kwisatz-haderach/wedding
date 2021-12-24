import { useState } from "react";
import { useRef, useEffect } from "react";

export default function useIntersectingElement(
  { threshold = 1, rootMargin = "0px", removeOnIntersection = false } = {
    threshold: 1,
    rootMargin: "0px",
    removeOnIntersection: false,
  }
) {
  const ref = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const observer = useRef();

  useEffect(() => {
    if (!observer.current) {
      observer.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            setIsIntersecting(entry.isIntersecting);
          });
        },
        {
          threshold,
          rootMargin,
        }
      );
    }
    if (ref.current) {
      observer.current.observe(ref.current);
    }
    return () => {
      observer.current.disconnect();
    };
  }, [ref]);

  useEffect(() => {
    if (removeOnIntersection && isIntersecting && observer.current) {
      observer.current.disconnect();
    }
  }, [isIntersecting]);

  return [ref, isIntersecting];
}
