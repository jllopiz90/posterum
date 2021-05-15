import React from "react"
import { Helmet } from "react-helmet"
import '../css/global.css';

import Layout from '../components/Layout/Layout';

// markup
const IndexPage = () => {
  return (
    <>
      <Helmet>
        <title>Posterum</title>
      </Helmet>
      <Layout>
        <h1>Hello World!</h1>
      </Layout>
    </>
  )
}

export default IndexPage
