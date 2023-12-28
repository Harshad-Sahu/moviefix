// LazyLoadedImage.tsx
import React from "react";
import {
  LazyLoadImage,
  LazyComponentProps,
  trackWindowScroll,
} from "react-lazy-load-image-component";

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
  return (
    <LazyLoadImage
      alt={alt}
      height={height}
      width={(window.innerWidth - 52) / 2}
      src={src}
      effect="blur"
      scrollPosition={scrollPosition}
      style={{ borderRadius: 8 }}
    />
  );
};

export default trackWindowScroll(LazyLoadedImage);
