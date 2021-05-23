import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/Layout/Layout";
import { useIntersectionObserver } from "../functions/scroll-animations/watchElementsIntoView";

function HTMLPage() {
  const { init } = useIntersectionObserver();
  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <Helmet>
        <title>Posterum</title>
      </Helmet>
      <Layout>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingLeft: '10px',
            alignItems: 'center',
          }}
        >
          <h1>Uncommon HTML tags</h1>
        </div>
      </Layout>
    </>
  );
}

export default HTMLPage;
