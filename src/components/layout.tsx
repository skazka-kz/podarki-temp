import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import logo from "../images/skazka_logo.png";
import topLeft from "../images/top_left.png";
import middle from "../images/middle_graphic.png";
import bottomLeft from "../images/bottom_left.png";
import botomRight from "../images/bottom_right.png";
import left from "../images/left.png";
import right from "../images/right.png";
import top from "../images/top.png";

const PageWrap = styled.div`
  font-family: "Pacifico", cursive, sans-serif;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  //justify-content: space-between;
`;
const Header = styled.header``;

const LogoContainer = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 100px;
    padding: 0.5rem;
  }
`;

const Nav = styled.nav`
  background-color: #922c27;
  padding: 0.5rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InnerNav = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  a {
    color: white;
    text-decoration: none;
  }
`;

const LeftSideGraphic = styled.img`
  position: absolute;
  z-index: -1;
  max-height: 400px;
  left: 0;
  top: 0;
`;

const TopLeftGraphic = styled.img`
  position: absolute;
  z-index: -1;
  max-width: 100px;
  left: 70px;
`;

const RightSideGraphic = styled.img`
  position: absolute;
  z-index: -1;
  max-height: 400px;
  top: 0;
  right: 0;
`;

const Footer = styled.footer`
  width: 100vw;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: white;
  background-color: #922c27;
  padding: 1rem 0;
`;

const AddressBlock = styled.div``;
const AddressTitle = styled.h1`
  line-height: 1.5;
  padding: 0.7rem;
`;
const ContactsWrap = styled.div`
  display: flex;
  justify-content: center;
`;
const ContactsBlock = styled.address`
  font-family: serif;
  font-style: italic;
  
  a {
  color: white;
  }
`;
const ContactsSeparator = styled.div`
  background-color: white;
  border: 1px solid white;
  border-radius: 0.25rem;
  margin: 0 1rem;
`;
const HorizontalSeparator = styled.div`
  margin: 1rem 10%;
  border: 1px solid white;
  border-radius: 0.25rem;
`;

const Larger = styled.span`
  font-size: 1.3rem;
`;

const Layout: React.FC = ({ children }) => {
  return (
    <PageWrap>
      <LeftSideGraphic src={left} />
      <TopLeftGraphic src={topLeft} />
      <RightSideGraphic src={right} />
      <Header>
        <LogoContainer>
          <img src={logo} alt="Сказка Кокшетау Логотип" />
        </LogoContainer>
        <Nav>
          <InnerNav>
            <a href="#links"><Larger>Скачать</Larger></a>
            <a href="#contacts"><Larger>Где Мы</Larger></a>
          </InnerNav>
        </Nav>
      </Header>
      {children}
      <Footer id="contacts">
        <AddressBlock>
          <AddressTitle>
            Сказка ждёт вас по адресу:
            <br />
            <Larger>г. Кокшетау, Ауэзова 191\1</Larger>
          </AddressTitle>
          <ContactsWrap>
            <ContactsBlock>
              пн-пт: 9:00 - 18:00
              <br />
              сб-вс: выходной
            </ContactsBlock>
            <ContactsSeparator />
            <ContactsBlock>
              тел: <a href="tel:+77162254545">25-45-45</a>
              <br />
              <a href="tel:+77162256725">+7 (7162) 25-67-25</a>
            </ContactsBlock>
          </ContactsWrap>
        </AddressBlock>

        <HorizontalSeparator />

        <AddressBlock>
          <AddressTitle>
            Сказка ждёт вас по адресу:
            <br />
            <Larger>г. Костанай, Карбышева 117</Larger>
          </AddressTitle>
          <ContactsWrap>
            <ContactsBlock>
              пн-пт: 9:00 - 18:00
              <br />
              сб-вс: выходной
            </ContactsBlock>
            <ContactsSeparator />
            <ContactsBlock>
              тел: <a href="tel:+77142392426">39-24-26</a>
              <br />
              <a href="tel:+77775380260">+7 777 538 0260</a>
            </ContactsBlock>
          </ContactsWrap>
        </AddressBlock>
      </Footer>
    </PageWrap>
  );
};

export default Layout;
