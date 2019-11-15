import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import styled from "styled-components";

// Import css
import "../components/reset.css";
import "react-image-lightbox/style.css";
import "../components/custom.css";

import Layout from "../components/layout";
import { db, PresentInfo } from "../components/presetInfo";

const PageHeader = styled.h1`
  padding: 1rem;
  font-size: 1.8rem;
  font-family: "Playfair Display", serif;
  text-align: center;
`;

const GalleryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-self: center;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 1rem;

  max-width: 440px;

  @media (min-width: 600px) {
    max-width: 580px;
  }

  @media (min-width: 1000px) {
    max-width: 720px;
  }
`;

const GalleryItem = styled.button`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: stretch;
  padding: 0;
  margin: 0 0 1rem;
  border: none;
  border-radius: 0.5rem;
  background-color: transparent;
  box-shadow: 5px 5px 5px rgba(169, 50, 47, 0.35);
  width: 150px;

  img {
    width: 100%;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }

  span {
    text-align: center;
    color: #672722;

    font-family: "Pacifico", cursive, sans-serif;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100px;
  justify-content: space-evenly;
`;
const Name = styled.span`
  font-size: 1.3rem;
  line-height: 1.4rem;
`;
const Weight = styled.span`
  font-size: 1.3rem;
  line-height: 1.1rem;
`;
const Price = styled.span`
  font-size: 1.8rem;
  line-height: 1.1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: center;
`;

const SortButton = styled.button`
  margin: 0 0.5rem;
  padding: 0.3rem 0.5rem;
  font-size: 1.2rem;
  color: white;
  background-color: #922c27;
  border: none;
  border-radius: 0.25rem;
  box-shadow: 5px 5px 5px rgba(169, 50, 47, 0.35);
`;

const GalleryPage: React.FC = () => {
  const [activeItems, setActiveItems] = useState(db);
  const [isOpen, setIsOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [present, setPresent] = useState<PresentInfo | null>(null);

  const showGallery = (present: PresentInfo) => {
    setPresent(present);
    setIsOpen(true);
  };

  const closeGallery = () => {
    setIsOpen(false);
    setPresent(null);
    setImageIndex(0);
  };

  const sortItems = (asc = true) => {
    const sorted = asc
      ? db.sort((a, b) => Number.parseInt(a.price) - Number.parseInt(b.price))
      : db.sort((a, b) => Number.parseInt(b.price) - Number.parseInt(a.price));
    setActiveItems([...sorted]);
  };

  const renderGalleryItems = () => {
    return activeItems.map((present: PresentInfo) => {
      const thumbs = present.images.map(filename => {
        return `/presents/${present.folder}/thumb/${filename}`;
      });
      return (
        <GalleryItem
          key={present.name}
          onClick={() => {
            showGallery(present);
          }}
        >
          <img src={thumbs[0]} alt={present.name} />
          {present.description ? (
            <div>
              <div className="ribbon">
                <span>Особый</span>
              </div>
            </div>
          ) : null}
          <InfoContainer>
            <Name>{present.name}</Name>
            <Price>{present.price}₸</Price>
            <Weight>{present.weight}г</Weight>
          </InfoContainer>
        </GalleryItem>
      );
    });
  };

  const renderLightbox = (present: PresentInfo) => {
    const images = present.images.map(path => {
      return `/presents/${present.folder}/${path}`;
    });
    const thumbs = present.images.map(path => {
      return `/presents/${present.folder}/thumb/${path}`;
    });
    return (
      <Lightbox
        mainSrc={images[imageIndex]}
        nextSrc={images[(imageIndex + 1) % images.length]}
        prevSrc={images[(imageIndex + images.length - 1) % images.length]}
        onCloseRequest={closeGallery}
        onMoveNextRequest={() => {
          setImageIndex((imageIndex + 1) % images.length);
        }}
        onMovePrevRequest={() => {
          setImageIndex((imageIndex + images.length - 1) % images.length);
        }}
        mainSrcThumbnail={thumbs[imageIndex]}
        nextSrcThumbnail={thumbs[(imageIndex + 1) % thumbs.length]}
        prevSrcThumbnail={
          thumbs[(imageIndex + thumbs.length - 1) % thumbs.length]
        }
        imageTitle={present.name}
        imageCaption={present.description}
      />
    );
  };

  return (
    <Layout>
      <PageHeader>Галерея и состав подарков</PageHeader>
      <ButtonContainer>
        <SortButton
          onClick={() => {
            sortItems(true);
          }}
        >
          Сначала дешевле
        </SortButton>
        <SortButton
          onClick={() => {
            sortItems(false);
          }}
        >
          Сначала дороже
        </SortButton>
      </ButtonContainer>
      <GalleryWrapper>{renderGalleryItems()}</GalleryWrapper>
      {isOpen && present && renderLightbox(present)}
    </Layout>
  );
};

export default GalleryPage;
