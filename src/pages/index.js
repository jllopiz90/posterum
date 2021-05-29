import React, { useEffect } from "react";
import { graphql } from "gatsby";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";

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
    // eslint-disable-next-line
  }, []);

  return (
    <div className="three-columns-grid">
      <div></div>
      <div className={`${styles.twoColumns} ${styles.fullRowMobile}`}>
        <h1 className={styles.title}>Jesus Llopiz portfolio</h1>
      </div>
      <div
        className={`${styles.codingImg} ${styles.fullRowMobile} ${styles.hideOnMenu}`}
      >
        <a href="https://github.com/jllopiz90" target="_new">
          <CodingImg />
        </a>
      </div>
      <div
        className={`${styles.fullRowMobile} ${styles.twoColumns} ${styles.description} circle`}
      >
        <ul>
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
            Gamer for fun
            <span role="img" aria-label="Book">
              📚
            </span>{" "}
            I have to admit I use to read a lot more than I do nowdays
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
          <h1 className={styles.title}>What's this?</h1>
        </div>
        <div
          data-scroll="slide-up"
          data-scroll-duration="1000"
          dat-scroll-delay="400"
          data-scroll-easing="ease"
          className={`${styles.whatsThisImg}`}
        >
          <a href="https://www.imdb.com/title/tt0107688/" target="_new">
            <GatsbyImage image={image} alt="whats-this-pic" className="grow" />
          </a>
        </div>
      </div>
      <div></div>
      <div
        className={`${styles.fullRowMobile} ${styles.twoColumns} ${styles.description} circle`}
      >
        <ul>
          <li>
            <span role="img" aria-label="Briefcase">
              💼
            </span>{" "}
            This is mainly an attempt to build a personal portfolio. I have been
            working in the industry a few more than{" "}
            {new Date().getFullYear() - 2016} years now. I worked in the BE with
            PHP using laravel and using plain PHP, then I shifted to the FE
            because React and ES6, but everytime I search for a new job I face
            the same issue, I don't have any code to show because it belongs to
            the companies, now I decided to change that, a bit late but never
            too late.
          </li>
          <li>
            <span role="img" aria-label="Notebook">
              📓
            </span>{" "}
            I also pretend this site to be a bit more than that, a lot of coders
            I follow recommend to write your own blogs for a lot of reasons,
            mainly to fix the knowledge and have a place where you can find help
            quickly. That's why I want this to be also a site with helpful blogs
            and examples to help myself and others to build their web
            applications easier and faster.
          </li>
          <li>
            <span role="img" aria-label="">
              🧰
            </span>{" "}
            Since I have been a frontend developer the last{" "}
            {new Date().getFullYear() - 2018} years and I really enjoy that
            role, most of the content will be orientated to that environment,
            this doesn't mean in the future I can't post something about other
            technologies I may find interesting. But for now CSS, JS, HTML and
            especially ReactJS content will be the majority (if not all) of the
            content.
          </li>
        </ul>
      </div>
    </div>
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
