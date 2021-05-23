import React, { useEffect } from "react";

import { useIntersectionObserver } from "../functions/scroll-animations/watchElementsIntoView";

function HTMLPage() {
  const { init } = useIntersectionObserver();
  useEffect(() => {
    init();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        paddingLeft: "10px",
        alignItems: "center",
      }}
    >
      <h1>Uncommon HTML tags</h1>
    </div>
  );
}

export default HTMLPage;
