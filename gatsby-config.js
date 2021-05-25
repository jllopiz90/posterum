module.exports = {
  siteMetadata: {
    title: "posterum",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    'gatsby-plugin-dts-css-modules',
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/coding.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
