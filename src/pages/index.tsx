import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";

// Import css
import "react-image-lightbox/style.css";
import "../components/custom.css";

import titleImage from "../images/middle_graphic.png";
import catalogue from "../files/katalog_2020_skazka.pdf";
import contents from "../files/sostav_2020_skazka.pdf";

import cat_cover from "../images/cover.png";
import screenshot from "../images/screen.png";

import "../components/reset.css";
import { Link } from "gatsby";

const MainWrap = styled.section`
  margin-bottom: 50px;
  flex: 1;

  display: flex;
  flex-direction: column;
`;
const PromotionSection = styled.div`
  position: relative;
  padding-top: 20vh;
  text-align: center;

  @media (min-width: 600px) {
    min-height: 200px;
    padding-top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (min-width: 1000px) {
    width: 1000px;
    align-self: center;
  }
`;

const Promo = styled.div`
  font-family: "Playfair Display", serif;
  z-index: 10;
  margin: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 600px) {
    max-width: 180px;
    justify-content: space-between;
  }
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

const ActionWrapper = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: center;
    margin: 2rem 0;
  }
`;

const ActionButton = styled.span`
  font-size: 1.8rem;
  border-radius: 0.25rem;
  padding: 1rem;
  margin: 0.5rem 0;
  text-align: center;
  color: white;
  text-decoration: none;
  background-color: #922c27;
`;

const CallToAction = styled.a`
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  text-decoration: none;

  @media (min-width: 1000px) {
    margin: 0 4rem;
  }
`;

const CtaLink = styled(Link)`
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  text-decoration: none;

  @media (min-width: 1000px) {
    margin: 0 4rem;
  }
`;

const ActionImage = styled.img`
  width: 100%;
  display: none;
  box-shadow: 0px 5px 5px rgba(169, 50, 47, 0.35);

  @media (min-width: 600px) {
    display: block;
    border-radius: 0.25rem;
    max-width: 300px;
  }

  @media (min-width: 1000px) {
    max-width: 350px;
  }
`;

const IndexPage: React.FC = () => (
  <Layout>
    <SEO />
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
      <ActionWrapper>
        <CtaLink to="gallery">
          <ActionImage src={screenshot} />
          <ActionButton>Онлайн Каталог</ActionButton>
        </CtaLink>

        <CallToAction href={catalogue} target="_blank" rel="noopener noreferrer">
          <ActionImage src={cat_cover} />
          <ActionButton>Скачать Каталог</ActionButton>
        </CallToAction>
      </ActionWrapper>
    </MainWrap>
  </Layout>
);

export default IndexPage;
