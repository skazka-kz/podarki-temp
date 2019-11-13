import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import Layout from "../components/layout";
import { PresentInfo, db } from "../components/presetInfo";

const GalleryPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [images, setImages] = useState(db[0].images);

  const showGallery = (present: PresentInfo) => {
    setImages(present.images);
    setIsOpen(true);
  };

  const renderButtons = () => {
    return db.map((present: PresentInfo) => {
      return (
        <button
          key={present.name}
          onClick={() => {
            showGallery(present);
          }}
        >
          {present.name} - ({present.weight}, {present.price})
        </button>
      );
    });
  };

  return (
    <Layout>
      <h1>Лол, вот вам Галерея</h1>
      {renderButtons()}
      {isOpen && (
        <Lightbox
          mainSrc={images[imageIndex]}
          nextSrc={images[(imageIndex + 1) % images.length]}
          prevSrc={images[(imageIndex + images.length - 1) % images.length]}
          onCloseRequest={() => {
            setIsOpen(false);
          }}
          onMoveNextRequest={() => {
            setImageIndex((imageIndex + 1) % images.length);
          }}
          onMovePrevRequest={() => {
            setImageIndex((imageIndex + images.length - 1) % images.length);
          }}
        />
      )}
    </Layout>
  );
};

export default GalleryPage;
