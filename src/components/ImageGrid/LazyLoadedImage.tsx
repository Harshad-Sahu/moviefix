// LazyLoadedImage.tsx
import React, { useState } from "react";
import {
  LazyLoadImage,
  LazyComponentProps,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import PlaceholderImage from "../../Resources/Icon/Placeholder.jpg";

interface LazyLoadedImageProps {
  src: string;
  alt: string;
  height: number;
}

const LazyLoadedImage: React.FC<LazyLoadedImageProps & LazyComponentProps> = ({
  src,
  alt,
  height,
  scrollPosition,
}) => {
  const [imageSrc, setImageSrc] = useState(src);

  const handleImageError = () => {
    setImageSrc(PlaceholderImage);
  };

  return (
    <LazyLoadImage
      alt={alt}
      height={height}
      width={(window.innerWidth - 52) / 2}
      src={imageSrc}
      effect="blur"
      scrollPosition={scrollPosition}
      style={{ borderRadius: 8 }}
      onError={handleImageError}
    />
  );
};

export default trackWindowScroll(LazyLoadedImage);
