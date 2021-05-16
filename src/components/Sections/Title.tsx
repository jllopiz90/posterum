import React from "react";
import "./title.css";
import { useBreakpoint } from "gatsby-plugin-breakpoints";

const Title = ({ text }: { text: string }) => {
  const breakpoints = useBreakpoint();

  const title = () => <h1 className="title">{text}</h1>;

  const mobileRow = () => <div className="full-row">{title()}</div>;

  const row = () => (
    <>
      <div></div>
      <div>{title()}</div>
      <div></div>
    </>
  );
    
  return breakpoints.sm ? mobileRow() : row();
};

export default Title;
