import React from "react";
import "./title.css";

const Title = ({ text }: { text: string }) => (
  <>
    <div></div>
    <div className="full-row">
      <h1 className="title">{text}</h1>
    </div>
    <div></div>
  </>
);

export default Title;
