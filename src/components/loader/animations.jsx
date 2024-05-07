export const rotationB = {
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
      "--brand": "#aeff00",
      "--size": "48px",
      width: "var(--size)",
      height: "var(--size)",
      border: "3px solid var(--lite)",
      //   borderBottomColor: "var(--brand)",
      borderRadius: "50%",
      display: "grid",
      placeItems: "center",
      position: "relative",
      animation: `rotationB 1s linear infinite`,
    },
    styleInner: {
      width: "40px",
      height: "40px",
      border: "3px solid transparent",
      borderBottomColor: "var(--brand)",
      borderRadius: "50%",
      display: "inline-block",
      // animation: `rotationB 1s linear infinite`,
    },
    component: (style, styleInner) => (
      <span style={style}>
        <span style={styleInner}></span>
      </span>
    ),
  };

export const rotationA = {
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
      animation: `rotationA 1s linear infinite`,
    },
    component: (style, innerStyle)=>(<span style={style}></span>)
  }


  export const rotationC = {
    name: "rotationC",
    keyframes: `
  @keyframes rotationC {
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
      "--brand": "#aeff00",
      "--size": "48px",
      width: "var(--size)+8px",
      height: "var(--size)+8px",
      border: "3px solid transparent",
      borderBottomColor: "var(--brand)",
      borderRadius: "50%",
      display: "grid",
      placeItems: "center",
      position: "relative",
      animation: `rotationC 1.5s linear infinite`,
    },
    styleInner: {
      width: "var(--size)",
      height: "var(--size)",
      border: "3px solid var(--lite)",
      //borderBottomColor: "var(--brand)",
      borderRadius: "50%",
    //   display: "inline-block",
      // animation: `rotationC 1s linear infinite`,
    },
    component: (style, styleInner) => (
      <span style={style}>
        <span style={styleInner}></span>
      </span>
    ),
  };


  export const rotationD = {
    name: "rotationD",
    keyframes: `
  @keyframes rotationD {
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
      "--brand": "#aeff00",
      "--size": "48px",
      width: "var(--size)",
      height: "var(--size)",
      border: "3px solid var(--lite)",
    //   borderBottomColor: "var(--brand)",
      borderRadius: "50%",
      display: "grid",
      placeItems: "center",
      position: "relative",
      animation: `rotationD 1.5s linear infinite`,
    },
    styleInner: {
      width: "calc(var(--size) - 8px)",
      height: "calc(var(--size) - 8px)",
      border: "3px solid",
      borderRadius: "50%",
      borderColor: "var(--brand) transparent",
    },
    component: (style, styleInner) => (
      <span style={style}>
        <span style={styleInner}></span>
      </span>
    ),
  };

  export const rotationE = {
    name: "rotationE",
    keyframes: `
  @keyframes rotationE {
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
      "--brand": "#f50c0c",
      "--size": "48px",
      width: "var(--size)+8px",
      height: "var(--size)+8px",
      border: "3px solid",
      borderColor: "var(--brand) transparent",
      borderRadius: "50%",
      display: "grid",
      placeItems: "center",
      position: "relative",
      animation: `rotationC 1.5s linear infinite`,
    },
    styleInner: {
      width: "var(--size)",
      height: "var(--size)",
      border: "3px solid var(--lite)",
      //borderBottomColor: "var(--brand)",
      borderRadius: "50%",
    //   display: "inline-block",
      // animation: `rotationC 1s linear infinite`,
    },
    component: (style, styleInner) => (
      <span style={style}>
        <span style={styleInner}></span>
      </span>
    ),
  };