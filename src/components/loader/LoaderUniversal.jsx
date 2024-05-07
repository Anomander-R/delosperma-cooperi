import React, { useEffect, useState } from "react";

const LoaderUniversal = () => {
  const [animationName, setAnimationName] = useState("");

  const animationsList = [
    {
      name: "rotationA",
      keyframes: `
    @keyframes rotationA {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }`,
      style: {
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
      },
    },
    {
      name: "rotationB",
      keyframes: `
    @keyframes rotationB {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }`,
      style: {
        "--base": "#263238",
        "--lite": "#FFF",
        "--brand": "#FF3D00",
        "--size": "48px",
        width: "var(--size)",
        height: "var(--size)",
        border: "3px solid var(--lite)",
        // borderBottomColor: "var(--brand)",
        borderRadius: "50%",
        display: "inline-block",
        animation: `rotationB 1s linear infinite`,
        "&:after":{
            content: "''",
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: 'translate(-50% , -50%)',
            width:  "40px",
            height:  "40px",
            borderRadius: "50%",
            border: "3px solid transparent",
            borderBottomColor: "var(--brand)",
          },
      },
    },
  ];

  const animation = {
    name: "rotationA",
    keyframes: `
    @keyframes rotationA {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }`,
    style: {
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
    },
  };

  useEffect(() => {
    const animationName = animationsList[0].name;
    const keyframes = animationsList[0].keyframes;

    const styleEl = document.createElement("style");
    document.head.appendChild(styleEl);
    const styleSheet = styleEl.sheet;
    styleSheet.insertRule(keyframes, 0);

    setAnimationName(animationName);
  }, []);

  return (
    <section className="section-universal">
      <span style={animationsList[0].style}></span>
    </section>
  );
};

export default LoaderUniversal;
