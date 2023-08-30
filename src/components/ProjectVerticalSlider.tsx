import React from 'react';

import '../styles/InfiniteLooper.css';

const { useState, useEffect, useRef, useCallback } = React;

export const InfiniteLooper = function InfiniteLooper({
  speed,
  direction,
  vertical,
  children,
  className,
}: {
  speed: number;
  vertical?: boolean;
  direction: 'right' | 'left';
  children: React.ReactNode;
  className?: string;
}) {
  const [looperInstances, setLooperInstances] = useState(1);
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  function resetAnimation() {
    if (innerRef?.current) {
      innerRef.current.setAttribute('data-animate', 'false');

      setTimeout(() => {
        if (innerRef?.current) {
          innerRef.current.setAttribute('data-animate', 'true');
        }
      }, 10);
    }
  }

  const setupInstances = useCallback(() => {
    if (!innerRef?.current || !outerRef?.current) return;
    if (vertical) {
      const { height } = innerRef.current.getBoundingClientRect();

      const { height: parentHeight } = outerRef.current.getBoundingClientRect();

      const heightDeficit = parentHeight - height;

      const instanceHeight = height / innerRef.current.children.length;

      if (heightDeficit) {
        setLooperInstances(
          looperInstances + Math.ceil(heightDeficit / instanceHeight) + 1
        );
      }
      resetAnimation();
    } else {
      const { width } = innerRef.current.getBoundingClientRect();

      const { width: parentWidth } = outerRef.current.getBoundingClientRect();

      const widthDeficit = parentWidth - width;

      const instanceWidth = width / innerRef.current.children.length;

      if (widthDeficit) {
        setLooperInstances(
          looperInstances + Math.ceil(widthDeficit / instanceWidth) + 1
        );
      }
      // console.log('RESET');
      resetAnimation();
    }
  }, [looperInstances]);

  /*
    6 instances, 200 each = 1200
    parent = 1700
  */

  useEffect(() => setupInstances(), [setupInstances]);

  useEffect(() => {
    if (!vertical) {
      window.addEventListener('resize', setupInstances);
    }

    return () => {
      if (!vertical) {
        window.removeEventListener('resize', setupInstances);
      }
    };
  }, [looperInstances, setupInstances]);

  return (
    <div className={`looper ${className}`} ref={outerRef}>
      <div
        className={`looper__innerList ${vertical ? 'vertical' : ''}`}
        ref={innerRef}
        data-animate="true"
      >
        {[...Array(looperInstances)].map((_, ind) => (
          <div
            key={ind}
            className={`looper__listInstance ${vertical ? 'vertical' : ''}`}
            style={{
              width: vertical ? '100%' : undefined,
              animationDuration: `${speed}s`,
              animationDirection: direction === 'right' ? 'reverse' : 'normal',
            }}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
};
