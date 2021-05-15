import React from "react";
import Header from "./Header";

const Layout = ({ children }: { children: JSX.Element }) => (
  <>
    <Header />
    <main>{children}</main>
  </>
);

export default Layout;