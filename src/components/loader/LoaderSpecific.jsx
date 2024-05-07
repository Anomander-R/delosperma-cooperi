import React, { useEffect, useState } from "react";
import { rotationB as animation } from "./animations";

const LoaderSpecific = () => {
  const [animationName, setAnimationName] = useState("");

//   const animation = {
//     name: "rotationB",
//     keyframes: `
//   @keyframes rotationB {
//     from {
//       transform: rotate(0deg);
//     }
//     to {
//       transform: rotate(360deg);
//     }
//   }`,
//     style: {
//       "--base": "#263238",
//       "--lite": "#FFF",
//       "--brand": "#aeff00",
//       "--size": "48px",
//       width: "var(--size)",
//       height: "var(--size)",
//       border: "3px solid var(--lite)",
//       //   borderBottomColor: "var(--brand)",
//       borderRadius: "50%",
//       display: "grid",
//       placeItems: "center",
//       position: "relative",
//       animation: `rotationB 1s linear infinite`,
//     },
//     styleInner: {
//       width: "40px",
//       height: "40px",
//       border: "3px solid transparent",
//       borderBottomColor: "var(--brand)",
//       borderRadius: "50%",
//       display: "inline-block",
//       // animation: `rotationB 1s linear infinite`,
//     },
//     component: () => (
//       <span style={animation.style}>
//         <span style={animation.styleInner}></span>
//       </span>
//     ),
//   };

// const animation = rotationB;

  useEffect(() => {
    const animationName = animation.name;
    const keyframes = animation.keyframes;

    const styleEl = document.createElement("style");
    document.head.appendChild(styleEl);
    const styleSheet = styleEl.sheet;
    styleSheet.insertRule(keyframes, 0);
    setAnimationName(animationName);
  }, []);

  return (
    <section className="section-universal">
      {animation.component()}
    </section>
  );
};

export default LoaderSpecific;
