import React from "react";
import { useBreakpoint } from "gatsby-plugin-breakpoints";
import { StaticImage } from "gatsby-plugin-image";

import "./whoiam.css";

const CodingImg = () => (
  <StaticImage
    src="../../images/coding.png"
    width={150}
    height={150}
    alt="avatar"
    className="grow"
    placeholder="blurred"
  />
)

const WhoIAm = () => {
  const breakpoints = useBreakpoint();

  const mobileSection = () => (
    <>
      <div className="full-row">
        <a href="https://github.com/jllopiz90" target="_new">
        <CodingImg />
        </a>
      </div>
      <div className="full-row">
        <ul className="circle">
          <li>👨‍👩‍👧 Father of 1 lovely girl and husband of a wonderful woman.</li>
          <li>🇨🇺 Cuban born in 1990.</li>
          <li>🇺🇸 US resident since late 2015.</li>
          <li>🤖 Logical thinker</li>
          <li>
            👨🏽‍🎓 Computer Science graduate in the University of Havana in 2014
          </li>
          <li>
            👨🏽‍💻 Learned to code with C#, worked in web applications with PHP, in
            love with JS because of React ⚛️{" "}
          </li>
          <li>
            🎮 Gamer for fun 📚 I have to admit I use to read a lot more than I
            do nowdays ⚽ Love european football.{" "}
          </li>
        </ul>
      </div>
    </>
  );

  const regularSection = () => (
    <>
      <div
        className="fadeLeftContainer"
        style={breakpoints.sm ? { width: 150 } : {}}
      >
        <a
          href="https://github.com/jllopiz90"
          target="_new"
          className={breakpoints.sm ? "fadeLeftInMobile" : "fadeLeftIn"}
        >
          <CodingImg />
        </a>
      </div>
      <div style={{ paddingLeft: "5%" }}>
        <ul className="circle">
          <li>👨‍👩‍👧 Father of 1 lovely girl and husband of a wonderful woman.</li>
          <li>🇨🇺 Cuban born in 1990.</li>
          <li>🇺🇸 US resident since 2015.</li>
          <li>🤖 Logical thinker</li>
          <li>
            👨🏽‍🎓 Computer Science graduate in the University of Havana in 2014
          </li>
          <li>
            👨🏽‍💻 Learned to code with C#, worked in web applications with PHP, in
            love with JS because of React ⚛️{" "}
          </li>
          <li>
            🎮 Gamer for fun 📚 I have to admit I use to read a lot more than I
            do nowdays ⚽ Love european football.{" "}
          </li>
        </ul>
      </div>
    </>
  );

  return breakpoints.sm ? mobileSection() : regularSection();
};

export default WhoIAm;
