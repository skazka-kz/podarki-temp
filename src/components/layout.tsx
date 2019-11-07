import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import logo from "../images/skazka_logo.png";

const PageWrap = styled.div``;
const Header = styled.header``;
const LogoContainer = styled.div``;
const Nav = styled.nav``;

const Footer = styled.footer``;

const Layout: React.FC = ({ children }) => {
  return (
    <PageWrap>
      <Header>
        <LogoContainer>
          <img src={logo} alt="Сказка Кокшетау Логотип" />
        </LogoContainer>
        <Nav>
          <a href="#links">Links</a>
          <a href="#contacts">Contacts</a>
        </Nav>
      </Header>
      {children}
      <Footer>Footer</Footer>
    </PageWrap>
  );
};

export default Layout;
