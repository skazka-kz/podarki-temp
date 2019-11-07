import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";

import titleImage from "../images/middle_graphic.png";
import catalogue from "../files/katalog_2020_skazka.pdf";
import contents from "../files/sostav_2020_skazka.pdf";

import "../components/reset.css";

const MainWrap = styled.section`
  margin-bottom: 50px;
  flex: 1;

  display: flex;
  flex-direction: column;
`;
const PromotionSection = styled.div`
  position: relative;
  padding-top: 20vh;

  @media (min-width: 600px) {
    min-height: 200px;
    padding-top: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;

const Promo = styled.div`
  font-family: "Playfair Display", serif;
  z-index: 10;
  margin: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LargeScreenOnly = styled.span`
  display: none;
  @media (min-width: 600px) {
    display: block;
  }
`;

const SmallScreenOnly = styled.span`
  display: block;
  font-size: 1.5rem;
  @media (min-width: 600px) {
    display: none;
  }
`;

const TopTitleImage = styled.img`
  position: absolute;
  top: 0;
  width: 80%;
  left: 10%;
  z-index: 0;

  @media (min-width: 600px) {
    width: 400px;
    left: calc(50% - 200px);
  }
`;

const ActionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  text-align: center;
`;

const ActionButtonLink = styled.a`
  font-size: 1.8rem;
  padding: 1rem;
  margin: 0.5rem 1rem;
  border-radius: 0.25rem;
  color: white;
  text-decoration: none;
  background-color: #922c27;
`;

const ActionImage = styled.img``;

const IndexPage: React.FC = () => (
  <Layout>
    <MainWrap>
      <PromotionSection>
        <TopTitleImage src={titleImage} />
        <Promo>
          <LargeScreenOnly>Индивидуальная система скидок</LargeScreenOnly>
          <SmallScreenOnly>Система скидок</SmallScreenOnly>
        </Promo>
        <Promo>
          <SmallScreenOnly>Бесплатная Доставка</SmallScreenOnly>
          <LargeScreenOnly>
            Бесплатная доставка по городу и области
          </LargeScreenOnly>
        </Promo>
      </PromotionSection>
      <ActionContainer>
        <ActionButtonLink
          href={catalogue}
          target="_blank"
          rel="noopener noreferrer"
        >
          Каталог Подарков
        </ActionButtonLink>
        <ActionButtonLink
          href={contents}
          target="_blank"
          rel="noopener noreferrer"
        >
          Состав Подарков
        </ActionButtonLink>
      </ActionContainer>
    </MainWrap>
  </Layout>
);

export default IndexPage;
