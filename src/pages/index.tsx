import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";

import titleImage from "../images/middle_graphic.png";

import "../components/reset.css";

const MainWrap = styled.section``;
const PromotionSection = styled.div`
  position: relative;
  padding-top: 20vh;
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
  z-index: 0;
  left: 10%;
`;

const ActionContainer = styled.section`

`;

const ActionButtonLink = styled.a``;

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
        <ActionButtonLink href="">
          Каталог Подарков
        </ActionButtonLink>
        <ActionButtonLink href="">
          Состав Подарков
        </ActionButtonLink>
      </ActionContainer>
    </MainWrap>
  </Layout>
);

export default IndexPage;
