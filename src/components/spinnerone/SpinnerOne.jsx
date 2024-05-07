import React from "react";
import "./spinnerone.css";

const loaderStyle = {};

const keyFrames = `@keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }`;

const SpinnerOne = () => {
  return (
    <>
      <section className="section-universal">
        <span
          style={{
            "--basee": "#263238",
            "--litee": "#FFF",
            "--brande": "#FF3D00",
            "--sizee": "58px",
            width: "var(--sizee)",
            height: "var(--sizee)",
            border: "5px solid var(--litee)",
            borderBottomColor: "var(--brande)",
            borderRadius: "50%",
            display: "inline-block",
            animation: "rotation 1s linear infinite",
            
          }}
        ></span>
      </section>
      <section className="section-universal">
        <span className="loader-1"></span>
      </section>
      <section className="section-universal">
        <span className="loader-2"></span>
      </section>
      <section className="section-universal">
        <span className="loader-3"></span>
      </section>
    </>
  );
};

export default SpinnerOne;
