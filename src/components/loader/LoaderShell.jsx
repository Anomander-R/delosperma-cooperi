import React, { useEffect} from "react";
import { rotationB as animation } from "./animations";

const LoaderShell = () => {

  useEffect(() => {
    const keyframes = animation.keyframes;

    const styleEl = document.createElement("style");
    document.head.appendChild(styleEl);
    const styleSheet = styleEl.sheet;
    styleSheet.insertRule(keyframes, 0);
  }, []);

  return (
    <section className="section-universal">
      {animation.component(animation.style, animation.styleInner)}
    </section>
  );
};

export default LoaderShell;
