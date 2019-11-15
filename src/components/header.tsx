import React from "react";

import "./custom.css";

import logo from "../images/skazka_logo.png";

interface Props {
  siteTitle?: string;
}

const Header: React.FC<Props> = ({ siteTitle }) => (
  <header>
    <div className="logo_container">
      <img src={logo} alt="" />
    </div>
  </header>
);

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
