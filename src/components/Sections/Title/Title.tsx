import React from "react";
import * as titleStyles from  "./title.module.css";

const Title = ({ text }: { text: string }) => (
  <>
    <div></div>
    <div className="full-row">
      <h1 className={titleStyles.title}>{text}</h1>
    </div>
    <div></div>
  </>
);

export default Title;
