import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import styled from "styled-components";

import Layout from "../components/layout";
import { db, PresentInfo } from "../components/presetInfo";

const PageHeader = styled.h1`
  margin: 1rem;
  font-size: 1.8rem;
  font-family: "Playfair Display", serif;
  text-align: center;
`;

const GalleryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

const GalleryItem = styled.button`
  display: flex;
  flex-direction: column;
  margin: 0.4rem;
  padding: 0;
  border: none;
  border-radius: 0.5rem;
  background-color: transparent;
  box-shadow: 5px 5px 5px rgba(169,50,47,0.35);
  
  img {
    width: 100%;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }
  
  span {
    text-align: center;
    margin-top: 0.5rem;
    margin-bottom: 0.2rem;
  }
`;

const GalleryPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [images, setImages] = useState<string[] | undefined>([]);
  const [thumbs, setThumbs] = useState<string[]>([]);

  const showGallery = (present: PresentInfo) => {
    setImages(present.images);
    setThumbs(present.thumbs);
    setIsOpen(true);
  };
  const closeGallery = () => {
    setIsOpen(false);
    setImages([]);
    setThumbs([]);
    setImageIndex(0);
  };

  const renderGalleryItems = () => {
    return db.map((present: PresentInfo) => {
      return (
        <GalleryItem
          key={present.name}
          onClick={() => {
            showGallery(present);
          }}
        >
          <img src={present.thumbs[0]} alt={present.name} />
          <span>
            {present.name} - ({present.weight}, {present.price})
          </span>
        </GalleryItem>
      );
    });
  };

  return (
    <Layout>
      <PageHeader>Лол, вот вам Галерея</PageHeader>
      <GalleryWrapper>{renderGalleryItems()}</GalleryWrapper>
      {isOpen && (
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
        />
      )}
    </Layout>
  );
};

export default GalleryPage;
