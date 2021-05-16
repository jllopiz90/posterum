import React from "react"
import { Helmet } from "react-helmet"
import '../css/global.css';

import Layout from '../components/Layout/Layout';
import Title from '../components/Sections/Title';
import WhoIAm from "../components/Sections/WhoIAm";

// markup
const IndexPage = () => {
  return (
    <>
      <Helmet>
        <title>Posterum</title>
      </Helmet>
      <Layout>
        <div className="three-columns-grid">
          <Title text="Jesus Llopiz Portfolio" />
          <WhoIAm />
        </div>
      </Layout>
    </>
  )
}

export default IndexPage
