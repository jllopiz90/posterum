import React from "react";

//@ts-ignore
import MeCoding from "../../images/coding.png";
import "./whoiam.css";

const WhoIAm = () => (
  <>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <a href="https://github.com/jllopiz90" target="_new">
        <img src={MeCoding} width="150px" alt="avatar" className="grow" />
      </a>
    </div>
    <div>
      <ul className="circle">
        <li>👨‍👩‍👧 Father of 1 lovely girl and husband of a wonderful woman.</li>
        <li>🇨🇺 Cuban born in 1990.</li>
        <li>🇺🇸 US resident since 2017.</li>
        <li>🤖 Logical thinker</li>
        <li>👨🏽‍🎓 Computer Science graduate in the University of Havana in 2014</li>
        <li>👨🏽‍💻 Learned coding with C#, worked in web applications with PHP, in love with JS because of React ⚛️ </li>
        <li>🎮 Gamer for fun 📚 I have to admit I use to read a lot more than I do nowdays ⚽  Love european football. </li>
      </ul>
    </div>
    <div></div>
  </>
);

export default WhoIAm;
