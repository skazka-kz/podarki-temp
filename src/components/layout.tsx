import React from "react";
import styled from "styled-components";

import logo from "../images/skazka_logo.png";
import topLeft from "../images/top_left.png";
import left from "../images/left.png";
import right from "../images/right.png";
import top from "../images/top.png";
import catalogue from "../files/katalog_2020_skazka.pdf";

const PageWrap = styled.div`
  font-family: "Pacifico", cursive, sans-serif;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
`;
const Header = styled.header``;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 100px;
    padding: 0.5rem;

    @media (min-width: 600px) {
      height: 150px;
    }
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
  max-width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (min-width: 600px) {
    max-width: 600px;
  }

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

  @media (min-width: 1000px) {
    max-height: 600px;
  }
`;

const TopLeftGraphic = styled.img`
  position: absolute;
  z-index: -1;
  max-width: 100px;
  left: 70px;

  @media (min-width: 1000px) {
    max-width: 200px;
  }
`;

const TopMiddleGraphic = styled.img`
  position: absolute;
  z-index: -1;
  top: 0;
  left: calc(50% - 150px);
  display: none;
  width: 300px;

  @media (min-width: 600px) {
    display: block;
  }

  @media (min-width: 1000px) {
    width: 450px;
    left: calc(50% - 225px);
  }
`;

const RightSideGraphic = styled.img`
  position: absolute;
  z-index: -1;
  max-height: 400px;
  top: 0;
  right: 0;

  @media (min-width: 1000px) {
    max-height: 600px;
  }
`;

const Footer = styled.footer`
  width: 100vw;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: white;
  background-color: #922c27;
  padding: 1rem 0;

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const AddressBlock = styled.div`
  display: flex;
  flex-direction: column;
`;
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
  line-height: 1.5;

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

const BlockSeparator = styled.div`
  margin: 1rem 10%;
  border: 1px solid white;
  border-radius: 0.25rem;

  @media (min-width: 600px) {
    margin: 1rem;
  }
`;

const Larger = styled.span`
  font-size: 1.3rem;
`;

const MapLinkButton = styled.a`
  background-color: white;
  border-radius: 0.25rem;
  color: #922c27;
  padding: 0.5rem;
  margin: 0 1rem 1rem;
  text-decoration: none;
  cursor: pointer;
  font-size: 1.2rem;
`;

const Layout: React.FC = ({ children }) => {
  return (
    <PageWrap>
      <LeftSideGraphic src={left} />
      <TopLeftGraphic src={topLeft} />
      <TopMiddleGraphic src={top} />
      <RightSideGraphic src={right} />
      <Header>
        <LogoContainer>
          <img src={logo} alt="Сказка Кокшетау Логотип" />
        </LogoContainer>
        <Nav>
          <InnerNav>
            <a href={catalogue} target="_blank" rel="noopener noreferrer">
              <Larger>Скачать</Larger>
            </a>
            <a href="#contacts">
              <Larger>Где Мы</Larger>
            </a>
          </InnerNav>
        </Nav>
      </Header>
      {children}
      <Footer id="contacts">
        <AddressBlock>
          <AddressTitle>
            Сказка ждёт вас по адресу:
            <br />
            <Larger>г. Кокшетау, Ауэзова 191/1</Larger>
          </AddressTitle>
          <MapLinkButton
            href="https://go.2gis.com/rxt0v"
            target="_blank"
            rel="noopener nofollow"
          >
            Показать на карте
          </MapLinkButton>
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

        <BlockSeparator />

        <AddressBlock>
          <AddressTitle>
            Сказка ждёт вас по адресу:
            <br />
            <Larger>г. Костанай, Карбышева 117</Larger>
          </AddressTitle>
          <MapLinkButton
            href="https://go.2gis.com/gavcf"
            target="_blank"
            rel="noopener nofollow"
          >
            Показать на карте{" "}
          </MapLinkButton>
          <ContactsWrap>
            <ContactsBlock>
              пн-пт: 9:00 - 18:00
              <br />
              сб-вс: выходной
            </ContactsBlock>
            <ContactsSeparator />
            <ContactsBlock>
              тел: <a href="tel:+77142392427">39-24-27</a>
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
