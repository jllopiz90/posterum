import React, { useEffect } from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout/Layout";
import { useIntersectionObserver } from "../functions/scroll-animations/watchElementsIntoView";
import "../css/global.module.css";
import * as styles from "../css/index.module.css";

const CodingImg = () => (
  <StaticImage
    src="../images/coding.png"
    width={150}
    height={150}
    alt="avatar"
    className="grow"
    placeholder="blurred"
  />
);

// markup
function IndexPage({ data }) {
  const image = getImage(data.file);
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
        <div className="three-columns-grid">
          <div></div>
          <div className={`${styles.twoColumns} ${styles.fullRowMobile}`}>
            <h1 className={styles.title}>Jesus Llopiz portfolio</h1>
          </div>
          <div className={`${styles.codingImg} ${styles.fullRowMobile}`}>
            <a
              href="https://github.com/jllopiz90"
              target="_new"
              className={`${styles.fadeInLeftMobile}`}
            >
              <CodingImg />
            </a>
          </div>
          <div
            className={`${styles.fullRowMobile} ${styles.twoColumns} ${styles.description}`}
          >
            <ul className="circle">
              <li>
                <span role="img" aria-label="Family">
                  👨‍👩‍👧
                </span>{" "}
                Father of 1 lovely girl and husband of a wonderful woman.
              </li>
              <li>
                <span role="img" aria-label="Cuban Flag">
                  🇨🇺
                </span>{" "}
                Cuban born in 1990.
              </li>
              <li>
                <span role="img" aria-label="USA Flag">
                  🇺🇸
                </span>{" "}
                US resident since 2015.
              </li>
              <li>
                <span role="img" aria-label="robot">
                  🤖
                </span>{" "}
                Logical thinker
              </li>
              <li>
                <span role="img" aria-label="Graduated">
                  👨🏽‍🎓
                </span>{" "}
                Computer Science graduate in the University of Havana in 2014
              </li>
              <li>
                <span role="img" aria-label="Man Laptop">
                  👨🏽‍💻
                </span>{" "}
                Learned to code with C#, worked in web applications with PHP, in
                love with JS because of React ⚛️{" "}
              </li>
              <li>
                <span role="img" aria-label="Joystick">
                  🎮
                </span>{" "}
                Gamer for fun{" "}
                <span role="img" aria-label="Book">
                  📚
                </span>{" "}
                I have to admit I use to read a lot more than I do nowdays{" "}
                <span role="img" aria-label="Ball">
                  ⚽
                </span>{" "}
                Love european football.{" "}
              </li>
            </ul>
          </div>
          <div></div>
          <div
            className={`${styles.fullRowMobile} ${styles.twoColumns} ${styles.whatsThisImgContainer}`}
          >
            <div className={styles.whatsThis}>
              <h1>What's this?</h1>
            </div>
            <div
              data-scroll="slide-up"
              data-scroll-duration="1000"
              dat-scroll-delay="400"
              data-scroll-easing="ease"
              className={`${styles.whatsThisImg}`}
            >
              <GatsbyImage image={image} alt="whats-this-pic" />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export const pageQuery = graphql`
  query {
    file(relativePath: { eq: "whatsthis.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, width: 200)
      }
    }
  }
`;

export default IndexPage;
