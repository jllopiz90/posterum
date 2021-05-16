import React from "react";
import "./title.css";

const Title = ({ text }: { text: string }) => (
  <div className="full-row">
    <h1>{text}</h1>
  </div>
);

export default Title;
