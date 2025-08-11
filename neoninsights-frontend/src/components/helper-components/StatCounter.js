// StatCounter.jsx
import React, { useEffect, useRef } from "react";
import { CountUp } from "countup.js";

const StatCounter = ({ id, endValue, label }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const counter = new CountUp(id, endValue);
          if (!counter.error) {
            counter.start();
            observer.disconnect();
          }
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [id, endValue]);

  return (
    <div className="wow fadeInUp" ref={ref}>
      <h3 id={id}>0</h3>
      <p>{label}</p>
    </div>
  );
};

export default StatCounter;
