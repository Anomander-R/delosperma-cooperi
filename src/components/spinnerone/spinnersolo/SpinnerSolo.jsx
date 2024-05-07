import React, { useEffect, useState } from "react";

const SpinnerSolo = () => {
  const [animationName, setAnimationName] = useState("");

  useEffect(() => {
    const animationName = "rotation";
    const keyframes = `
      @keyframes ${animationName} {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }`;

    const styleEl = document.createElement("style");
    document.head.appendChild(styleEl);
    const styleSheet = styleEl.sheet;
    styleSheet.insertRule(keyframes, 0);

    setAnimationName(animationName);
  }, []);

  return (
    <section className="section-universal">
      <span
        style={{
          "--base": "#263238",
          "--lite": "#FFF",
          "--brand": "#FF3D00",
          "--size": "48px",
          width: "var(--size)",
          height: "var(--size)",
          border: "5px solid var(--lite)",
          borderBottomColor: "var(--brand)",
          borderRadius: "50%",
          display: "inline-block",
          animation: `${animationName} 1s linear infinite`,
        }}
      ></span>
    </section>
  );
};

export default SpinnerSolo;