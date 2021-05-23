/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Helmet } from "react-helmet";

import Layout from "./src/components/Layout/Layout";

export function wrapPageElement({ element, props }) {
  return (
    <>
      <Helmet>
        <title>Posterum</title>
      </Helmet>
      <Layout {...props}>{element}</Layout>
    </>
  );
}
