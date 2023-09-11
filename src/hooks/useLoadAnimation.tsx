import React, { useEffect, useRef } from "react";

const intersectionOptions = {
  root: null,
  rootMargin: "20px",
  threshold: 0,
};

const useLoadAnimation = () => {
  const [loadAnimationOnMount, setLoadAnimationOnMount] = React.useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      const observer = new IntersectionObserver((entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setTimeout(() => setLoadAnimationOnMount(true), 10);
        }
      }, intersectionOptions);

      observer.observe(ref.current);
      return () => observer.disconnect();
    }
  }, [ref]);

  return { loadAnimationOnMount, ref };
};

export default useLoadAnimation;
