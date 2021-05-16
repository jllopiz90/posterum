import React from "react"
import { Helmet } from "react-helmet"
import '../css/global.css';

import Title from '../components/Title/Title';

import Layout from '../components/Layout/Layout';

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
        </div>
      </Layout>
    </>
  )
}

export default IndexPage
